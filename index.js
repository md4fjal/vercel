import dotenv from "dotenv";
import app from "./app.js";

const port = process.env.PORT || 4900;

dotenv.config({
  path: "./.env",
});

app.get("/api/data", (req, res) => {
  res.send(`<h1>Data Sent</h1>`);
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
