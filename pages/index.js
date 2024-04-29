"use client";
import { useSelector } from "react-redux";

import NavBar from "../src/components/NavBar";
import BookList from "../src/components/BookList";
import BookDetailsModal from "../src/components/BookDetailsModal";
import AddBookModal from "../src/components/AddBookModal";

export default function Home() {
  const bookModalState = useSelector((state) => state.allBooks.isBookModalOpen);
  const addBookModalState = useSelector(
    (state) => state.allBooks.isAddBookModalOpen
  );

  return (
    <div className="App">
      <NavBar />
      <BookList />
      {/* only show the book details popup when isOpenModal is true */}
      {bookModalState && <BookDetailsModal />}

      {addBookModalState && <AddBookModal />}
    </div>
  );
}
