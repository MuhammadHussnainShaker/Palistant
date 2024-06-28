import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import BookCard from "./BookCard.tsx";

// Define the type for a book
interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  // Add other fields based on your API response
}

const ShowBookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }, []);

  const bookList =
    books.length === 0
      ? "There is no book record!"
      : books.map((book) => <BookCard book={book} key={book._id} />);

  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link href="/create-book" className="btn btn-outline-warning float-right">
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{bookList}</div>
      </div>
    </div>
  );
};

export default ShowBookList;

