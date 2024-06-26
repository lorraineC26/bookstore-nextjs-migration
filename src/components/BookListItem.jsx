import React from "react";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import "../styles/BookListItem.scss";

import { selectedBook, deleteBook } from "../redux/actions/bookActions";

const BookListItem = () => {
  const books = useSelector((state) => state.allBooks.books);
  const dispatch = useDispatch();

  const renderList = () => {
    // make sure the map fx only works when books array is not empty
    if (books.length === 0) {
      // eslint-disable-next-line react/no-unescaped-entities
      return <div className="empty-message">Oops it is empty!</div>;
    } else {
      return books.map((book) => {
        const { id, title, price, category, image } = book;

        const handleClickModalOpen = (book) => {
          dispatch(selectedBook(book));
        };

        const handleDelete = (book) => {
          dispatch(deleteBook(book));
        };

        return (
          <div className="book-list-item" key={id}>
            <div className="book-card">
              <div
                className="book-cover"
                onClick={() => handleClickModalOpen(book)}
              >
                <img src={image} alt={title} />

                {/* <Image src={image} alt={title} width={200} height={200}/> */}
              </div>

              <div className="book-info">
                <div className="title">{title}</div>
                <div className="price">${price}</div>
                <div className="category">{category}</div>
              </div>

              <button className="delete" onClick={() => handleDelete(book.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      });
    }
  };

  return <>{renderList()}</>;
};

export default BookListItem;
