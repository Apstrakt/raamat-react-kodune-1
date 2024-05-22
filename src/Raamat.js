function Raamat(props) {
    console.log(props) 
        let bookStyle = ""
        let genreStyle = ""
        let authorStyle = ""
        let noticeStyle = ""
 
  if (props.title) {
      bookStyle = "books"
  }

  if (props.author) {
      authorStyle = "authors"
  }

  if (props.genre) {
     genreStyle = "genres"
  }

  if (props.notice) {
    noticeStyle = "notices" 
  }


  

    
    return (
       
        < div >
            <h2 className={bookStyle}>{props.title}</h2>
            <h4 className={authorStyle}>{props.author}</h4>
            <h6 className={genreStyle}>{props.genre}</h6>
            <p className={noticeStyle}>{props.notice}</p>
        </div>
    )
}
        
           

export default Raamat