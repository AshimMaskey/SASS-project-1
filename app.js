import express from "express";
import db from "./database/connection.js";
import bookRoute from "./routes/book.route.js";
import cors from "cors";
const app = express();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//routes
app.use("/api/books", bookRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
