const qrcode = require("qrcode");

const data = "Your data to be encoded in the QR code"; // Replace with your actual data
const options = {
  errorCorrectionLevel: "H", // Choose error correction level (H, Q, M, or L)
  type: "image/png", // Output image format (e.g., image/png, image/jpeg, etc.)
  rendererOpts: {
    quality: 0.3, // Image quality (0.0 to 1.0)
  },
};

qrcode.toDataURL(data, options, (err, url) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("QR code value:", data); // Your original data
  console.log("QR code data URL:", url); // Data URL for the QR code image
});
