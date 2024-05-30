import ReadCount from './ReadCount.js'
import { useState } from 'react';

function Book({booksReal}) {
    
        let bookStyle = ""
        let genreStyle = ""
        let authorStyle = ""
        
 
  if (booksReal.title) {
      bookStyle = "books"
  }

  if (booksReal.author) {
      authorStyle = "authors"
  }

  if (booksReal.genre) {
     genreStyle = "genres"
  }
  return (
      < div >
          <h4 className="books">{booksReal.title}</h4>
         
          
          
          
      </div>
  )
}

  

       
   
  
  
    



  
  

    
        
           

export default Book