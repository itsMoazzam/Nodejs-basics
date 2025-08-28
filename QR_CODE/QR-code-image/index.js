const express = require("express");
const QR = require("qrcode");
const app = express();

app.get("/", async (req, res) => {
  try {
    const arr = req.query.url || "https://www.youtube.com/shorts/0TcpBvxzKnU";
    const qrCodeImage = await QR.toDataURL(arr);
    res.send(`<img src="${qrCodeImage}" alt="QR Code"/>`);
  } catch (err) {
    console.error("Error generating QR code:", err);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`);
});
