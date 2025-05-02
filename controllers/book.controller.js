import db from "../database/connection.js";

export const handleCreateBook = async (req, res) => {
  const datas = await db.books.findAll();
  res.status(200).json({ message: "books fetched successfully", datas });
};

export const handleGetBooks = async (req, res) => {
  const { bookName, bookAuthor, bookPrice, bookGenre } = req.body;

  if (!bookName || !bookAuthor || !bookPrice || !bookGenre) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log(req.body);
  const book = await db.books.create(req.body);
  res.status(201).json({ message: "books created successfully", book });
};

export const handleUpdateBook = async (req, res) => {};

export const handleDeleteBook = async (req, res) => {};

export const handleGetSingleBook = async (req, res) => {
  const id = req.params.id;
  const datas = await db.books.findByPk(id);
  return res.status(200).json({ message: "single book fetched", datas });
};
