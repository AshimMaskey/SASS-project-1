import express from "express";
import db from "./database/connection.js";
import bookRoute from "./routes/book.route.js";
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/books", bookRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
