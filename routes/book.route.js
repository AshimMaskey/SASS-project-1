import express from "express";
import {
  handleCreateBook,
  handleDeleteBook,
  handleGetBooks,
  handleGetSingleBook,
  handleUpdateBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.route("/").get(handleGetBooks).post(handleCreateBook);
router
  .route("/:id")
  .delete(handleDeleteBook)
  .patch(handleUpdateBook)
  .get(handleGetSingleBook);

export default router;
