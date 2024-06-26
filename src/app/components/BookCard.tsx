import React from "react"
import Link from "next/link"
import "../App.css"

interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
}

interface Props {
  book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height={200}
      />
      <div className="desc">
        <h2>
          <Link href={`/show-book/${book._id}`}>
            {book.title}
          </Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookCard
