import './App.css';
import Book from './Book.js';
import Book2 from './Book2.js';
import natr from './covers/Naksitrallid.jpg'
import pipi from './covers/Pipi.jpg'
import gof from './covers/GobletOfFire.jpg'
import ReadCount from './ReadCount.js';
import AddNewBook from './AddNewBook.js';


import { useState } from 'react';

function App() {


  const [books, setBooks] = useState([
    {
      title: 'Pipi Pikksukk',
      author: 'Astrid Lindgren',
      genre: 'Children`s book, Adventure',
      picture: pipi,
    
    },
    {
      title: ' Jälle need Naksitrallid',
      author: 'Eno Raud',
      genre: 'Children`s book, Adventure',
      picture: natr,
    
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      author: 'J. K. Rowling',
      genre: 'Fantasy',
      picture: gof
    
    }
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = ({ title, author, genre, picture }) => {
    console.log('About to add ' + title)
    const newBook = {
      title,
      author,
      genre,
      picture,
    };
    
    setBooks([...books, newBook])
  };
    const handleClick = (book) => {
      setSelectedBook(book);
    };



  

 
  

return (
 
 <div className="container">
   
   <h1 className="Heading">The Library</h1>
   <div className="leftPanel AppL col-6 ">
      <div classname="addBooks">
        <AddNewBook addBook={addBook} />
      </div>
      <div className="clickable">
          {
            books.map((book, index) => (
              <div key={index} onClick={() => handleClick(book)} style={{ cursor: 'pointer' }}>
                <Book booksReal={book} />
              </div>
            ))
          }
      </div>
     
   </div>
     
     
    <div className="rightPanel AppR col-6">
      {selectedBook ? (
          <Book2
          title={selectedBook.title}
          author={selectedBook.author}
          genre={selectedBook.genre}
          picture={selectedBook.picture}
          />
          
        ) : (
          <div className="askForDetails"><h4>Select a book to see details</h4></div>
        )}
   </div>
 </div>
);
}
        
  


   
   


        
          
        
      



        
       
       
        


       
          
      
        
        
        
      

export default App;
      
 
