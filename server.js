const express = require("express");
const db = require("./db/database");
const productModel = require("./models/productModel");

const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Yes, Herbert");
});

app.post("/create", async (req, res, next) => {
  try {
    const createProduct = await productModel.create(req.body);
    console.log(createProduct);
    return res.status(201).json({ message: "The model has been created" });
  } catch (error) {
    console.error(error);
    return next(error); // Pass the error to the Express error handler
  }
});

// Define an error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  await db();
  console.log(`Server up and running on http://localhost:${port}`);
});