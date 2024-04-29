import { React, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addBook, closeAddBookModal } from "../redux/actions/bookActions";

import "../styles/AddBookModal.scss";
import closeSymbol from "@/assests/closeSymbol.svg";
import defaultCover from "@/assests/defaultCover.png"

import { v4 as uuidv4 } from "uuid";

const AddBookModal = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(closeAddBookModal());
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(), // Generate a unique ID for the new book
      title,
      price,
      category,
      description,
      image: "https://www.hachette.co.nz/graphics/CoverNotAvailable.jpg", // use url instead imported image to prevent renderiing broken img on the main page after adding a new book
    };

    dispatch(addBook(newBook));

    // Clear form fields
    setTitle("");
    setPrice("");
    setCategory("");
    setDescription("");

    // Close popup when submit the form
    handleClickClose();
  };



  return (
    <div className="add-book-modal">
      <button className="book-details__close-button" onClick={handleClickClose}>
        <Image src={closeSymbol} alt="close symbol" />
      </button>

      <div className="book-details-card">
        <h2>Add a New Book</h2>

        <Image
          src={defaultCover}
          alt="defalut cover"
          className="book-details-image"
        />

        <form className="edit-form" onSubmit={handleAddBook}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBookModal;