import db from "../database/connection.js";

export const handleGetBooks = async (req, res) => {
  const datas = await db.books.findAll();
  res.status(200).json({ message: "books fetched successfully", datas });
};

export const handleCreateBook = async (req, res) => {
  const { bookName, bookAuthor, bookPrice, bookGenre } = req.body;

  if (!bookName || !bookAuthor || !bookPrice || !bookGenre) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log(req.body);
  const book = await db.books.create(req.body);
  res.status(201).json({ message: "books created successfully", book });
};

export const handleGetSingleBook = async (req, res) => {
  const id = req.params.id;
  const datas = await db.books.findByPk(id);
  return res.status(200).json({ message: "single book fetched", datas });
};

export const handleUpdateBook = async (req, res) => {
  const id = req.params.id;
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;

  const book = await db.books.findByPk(id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  const [count] = await db.books.update(
    {
      bookAuthor,
      bookName,
      bookPrice,
      bookGenre,
    },
    {
      where: {
        id: id,
      },
    }
  );
  if (count === 0) return res.status(400).json({ message: "Book not updated" });

  return res.status(200).json({ message: "Book updated successfully" });
};

export const handleDeleteBook = async (req, res) => {
  const id = req.params.id;

  const deleted = await db.books.destroy({
    where: {
      id: id,
    },
  });

  if (deleted === 0) {
    return res.status(400).json({ message: "Book is not deleted" });
  } else {
    return res.status(200).json({ message: "Book deleted successfully" });
  }
};
