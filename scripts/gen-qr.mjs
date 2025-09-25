import fs from "node:fs/promises";
import QRCode from "qrcode";

const dest = "public/qr-code.svg";
const url = process.env.APP_STORE_URL || process.env.PLAY_STORE_URL || "https://www.totersapp.com";

try {
  const svg = await QRCode.toString(url, { type: "svg", margin: 0, width: 512, errorCorrectionLevel: "M" });
  await fs.writeFile(dest, svg, "utf8");
  console.log(`✔ QR generated for ${url} → ${dest}`);
} catch (e) {
  console.error("✖ QR generation failed:", e?.message || e);
  process.exitCode = 1;
}
