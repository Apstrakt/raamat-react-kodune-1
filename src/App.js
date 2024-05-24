import './App.css';
import Book from './Book.js';
import Book2 from './Book2.js';
import natr from './covers/Naksitrallid.jpg'
import pipi from './covers/Pipi.jpg'
import gof from './covers/GobletOfFire.jpg'
import ReadCount from './ReadCount.js';
import {useState} from 'react';


const moreBooks = [
  {
    title: 'Pipi Pikksukk',
    author: 'Astrid Lindgren',
    genre: 'Children`s book, Adventure',
    notice: 'No picture available',
    picture: pipi,
  },
   {
    title: ' Jälle need Naksitrallid',
    author: 'Eno Raud',
    genre: 'Children`s book, Adventure',
    notice: 'No picture available',
    picture: natr,
   },
    {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J. K. Rowling',
    genre: 'Fantasy',
    notice: 'No picture available',
    picture: gof
    }
]

function App() {
  const [activeBook, setActiveBook] = useState(0);
  
  const moreBooksJsx = moreBooks.map((title1) => <Book2 title= {title1.title} />)
   

  return (
    <div className="container ">
      <h1 className="Heading">The Library</h1>
      <div className="leftPanel AppL">
        {moreBooksJsx}
                <button onClick={() => setActiveBook(activeBook) + 1} >Next</button>
      </div>
      <div className="rightPanel AppR">
        <Book title={moreBooks[activeBook].title} author={moreBooks[activeBook.author]} genre={moreBooks[activeBook.genre]} picture={moreBooks[activeBook.picture]} /> 
        
        <ReadCount />
        
      </div>
      
     
      
 
    </div>
  );
}

export default App;
