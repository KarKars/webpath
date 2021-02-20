import React from "react";
import ReactDom from "react-dom";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg",
    title: "A Promised Land",
    author: "Barack Obama",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/413kTDJpUKL._AC_SX184_.jpg",
    title:
      "Wild Game: My Mother, Her Secret, and MeWild Game: My Mother, Her Secret, and Me",
    author: "Adrienne Brodeur",
  },
];

function BookList() {
  return (
    <section>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
const Book = ({ img, title, author }) => {
  return (
    <section>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </section>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
