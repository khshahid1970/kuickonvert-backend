const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use("/uploads", express.static("uploads"));

// Example route
app.get("/", (req, res) => {
    res.send("Kuickonvert Backend is running!");
});

// Future API routes will go here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});