import React from "react";
import ReactDom from "react-dom";

import Book from "./Book";
import { books } from "./books";
import "./index.css";

const getBooks = () => books.map((b, idx) => <Book key={b.id} {...b} />);

const BookList = () => {
  return <section className="booklist">{getBooks()}</section>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
