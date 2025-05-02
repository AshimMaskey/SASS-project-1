import express from "express";
import {
  handleCreateBook,
  handleGetBooks,
} from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", handleCreateBook);
router.post("/", handleGetBooks);

export default router;
