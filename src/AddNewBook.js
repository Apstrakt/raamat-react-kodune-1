import { useState } from 'react'
import pipi from './covers/Pipi.jpg'

function AddNewBook({addBook}) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [picture, setPicture] = useState('')
    const submitValues = () => {
        console.log("About to submit values ");
        console.log('title', title)
        let userPicture = "https://d33318exxque5k.cloudfront.net/covers/eesti/large/9789985576175.jpg";
        
         if (picture) {
            userPicture = picture
        } 

    
        
        addBook({ title, author, genre, picture:userPicture })
        setTitle('')
        setAuthor('')
        setGenre('')
        setPicture('')
    }

    return (

        <>
        <div className="container row">
            <input 
                className="col-12 col-sm-12" 
                placeholder="Book title"
                value={title}
                onChange={(event) => setTitle(event.target.value) }
            />
            <input 
                className="col-12" 
                placeholder="Author"
                value={author}
                onChange={(event) => setAuthor(event.target.value) }
            />
            <input 
                className="col-12" 
                placeholder="Genre"
                value={genre}
                onChange={(event) => setGenre(event.target.value) }
            />
            <input 
                className="col-12" 
                placeholder="URL"
                value={picture}
                onChange={(event) => setPicture(event.target.value) }
            />
            <button 
                className='col-12 '
                onClick={submitValues}
            >
                Add
            </button>

        </div>
        </>
    )
}

export default AddNewBook
        

    
   