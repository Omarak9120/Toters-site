import fs from "node:fs/promises";
import QRCode from "qrcode";

const SITE = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : (process.env.SITE_URL || "http://localhost:4321");

const target = `${SITE.replace(/\/$/, "")}/download`;
const dest = "public/qr-code.svg";

try {
  const svg = await QRCode.toString(target, { type: "svg", margin: 0, width: 512, errorCorrectionLevel: "M" });
  await fs.writeFile(dest, svg, "utf8");
  console.log(`✔ QR generated → ${target}`);
} catch (e) {
  console.error("✖ QR generation failed:", e?.message || e);
  process.exitCode = 1;
}
