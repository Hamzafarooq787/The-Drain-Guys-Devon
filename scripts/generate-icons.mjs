import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ICON_SRC = path.join(ROOT, "public/images/icon-source.webp");
const OG_SRC = path.join(ROOT, "public/images/og-image-source.webp");
const BRAND_NAVY = "#001f3f";

function pngToIco(pngBuffer, size) {
  // Minimal single-image ICO container wrapping a PNG (supported since Windows Vista).
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 = 256)
  entry.writeUInt8(0, 2); // color palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // image size
  entry.writeUInt32LE(header.length + entry.length, 12); // offset

  return Buffer.concat([header, entry, pngBuffer]);
}

async function main() {
  // Square, transparent app icon (used for modern <link rel="icon">)
  const icon512 = await sharp(ICON_SRC)
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(ROOT, "src/app/icon.png"), icon512);

  // Apple touch icon: white background (iOS renders transparency as black, and the
  // icon's own navy tones would disappear against a navy fill)
  const appleIcon = await sharp(ICON_SRC)
    .resize(140, 140, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 20, bottom: 20, left: 20, right: 20, background: "#ffffff" })
    .flatten({ background: "#ffffff" })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(ROOT, "src/app/apple-icon.png"), appleIcon);

  // Classic favicon.ico (32x32 PNG-in-ICO)
  const icon32 = await sharp(ICON_SRC)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(ROOT, "src/app/favicon.ico"), pngToIco(icon32, 32));

  // Open Graph image, standardized to 1200x630 on brand navy background
  const og = await sharp(OG_SRC)
    .resize(1200, 630, { fit: "contain", background: BRAND_NAVY })
    .flatten({ background: BRAND_NAVY })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(ROOT, "public/images/og-image.png"), og);

  console.log("Generated: src/app/icon.png, src/app/apple-icon.png, src/app/favicon.ico, public/images/og-image.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
