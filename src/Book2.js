//eslint-disable-next-line no-unused-vars
import natr from "./covers/Naksitrallid.jpg";
//eslint-disable-next-line no-unused-vars
import pipi from "./covers/Pipi.jpg";
//eslint-disable-next-line no-unused-vars
import gof from "./covers/GobletOfFire.jpg";
import ReadCount from "./ReadCount.js";

function Book2({ title, author, genre, picture }) {
  return (
    <div className="rightPanel">
      <h2 className="books">{title}</h2>
      <br />
      <h4 className="authors">{author}</h4>
      <br />
      <h6 className="genres">{genre}</h6>
      <br />
      <div className="readCount">
        <ReadCount />
      </div>
      <br />
      <br />
      <img
        className="coverPic img-fluid max-width: 100%"
        src={picture}
        alt={picture}
      />
    </div>
  );
}

export default Book2;
