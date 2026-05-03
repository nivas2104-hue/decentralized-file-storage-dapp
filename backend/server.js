const express = require("express");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const cors = require("cors");

const app = express();
const upload = multer();

app.use(cors());

const PINATA_API_KEY = "cb88ffd875a8750715b6";
const PINATA_SECRET =
  "117906c966998457cd4daf4e895215c3b4870eeee14a6352d25e003b7fbb544e";

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const data = new FormData();
    data.append("file", req.file.buffer, req.file.originalname);

    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data,
      {
        maxBodyLength: "Infinity",
        headers: {
          ...data.getHeaders(),
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET,
        },
      },
    );

    res.json({ hash: response.data.IpfsHash });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
