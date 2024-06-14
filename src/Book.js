import ReadCount from "./ReadCount.js";
import { useState } from "react";

function Book({ booksReal }) {
  return (
    <div>
      <h4 className="books">{booksReal.title}</h4>
    </div>
  );
}

export default Book;
