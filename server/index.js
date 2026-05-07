const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const { enquiryRoutes } = require("./Routes/EnquiryRoutes");
require("dotenv").config();


const app = express();
app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
// ✅ Routes
app.use("/web/api/enquiry", enquiryRoutes);
// ✅ Routes
app.use("/web/api/enquiry", enquiryRoutes);
app.listen(process.env.PORT,()=>{
  console.log("Server Running");
})
// ✅ Export app for Vercel
module.exports = app;

