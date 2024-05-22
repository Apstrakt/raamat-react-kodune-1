import './App.css';
import Raamat from './Raamat';
import anka from './covers/AnnaKarenina.jpg'
import aow from './covers/ArtofWar.jpg'
import cap from './covers/CrimeAndPunishment.jpg'
import dune from './covers/Dune.jpg'
import lotr from './covers/LOTR.jpg'
import modi from './covers/MobyDick.jpg'
import nima from './covers/NimeMarmortahvlil.jpg'
import pipr from './covers/PrideAndPredjudice.jpg'
import grga from './covers/TheGreatGatsby.jpg'
import todoi from './covers/TodeJaOigus.jpg'
import natr from './covers/Naksitrallid.jpg'
import pipi from './covers/Pipi.jpg'
import gof from './covers/GobletOfFire.jpg'

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
  const moreBooksJsx = moreBooks.map((name) => (
    <div>
    <Raamat title={name.title} author={name.author} genre={name.genre} notice={name.notice} picture={name.picture} />
      <img className="coverPic img-fluid" src={name.picture} alt={name.picture} /> 
    </div>
    )
  )
  return (
    <div className="container App">
      <h1 className="Heading">The Library</h1>
      <div className="bookPanel">
        <Raamat title="Lord of the Rings" author="J. R. R. Tolkien" genre="Fantasy" />
        <img className="coverPic img-fluid" src={lotr} alt='lotr' /> 
      </div>
      <div className="bookPanel">
        <Raamat title=" The Art of War" author="Sun Tzu" genre="Military strategy" />
        <img className="coverPic img-fluid" src={aow} alt='aow' /> 
      </div>
      <div className="bookPanel">
        <Raamat title="Crime & Punishment" author="Fyodor Dostoevsky" genre="Literary fiction" />
        <img className="coverPic img-fluid" src={cap} alt='cap' />
      </div>
      <div className="bookPanel">
        <Raamat title="Dune" author="Frank Herbert" genre="Science fiction" />
        <img className="coverPic img-fluid" src={dune} alt='dune' /> 
      </div>
      <div className="bookPanel">
        <Raamat title="The Great Gatsby" author="F. Scott Fitzgerald" genre="Tragedy" />
        <img className="coverPic img-fluid" src={grga} alt='grga' /> 
      </div>
      <div className="bookPanel">
        <Raamat title="Tõde ja Õigus" author="A. H. Tammsaare" genre="Historical Fiction" />
        <img className="coverPic img-fluid" src={todoi} alt='todoi' /> 
      </div>
      <div className="bookPanel">
        <Raamat title="Nimed marmortahvlil" author="Albert Kivikas" genre="War novel" />
        <img className="coverPic img-fluid" src={nima} alt='nima' /> 
      </div>
      <div className="bookPanel">
        <Raamat title="Anna Karenina" author="Leo Tolstoy" genre="Realist novel" />
        <img className="coverPic img-fluid" src={anka} alt='anka' /> 
      </div>
      <div className="bookPanel">
        <Raamat title="Pride and prejudice" author="Jane Austen" genre="Romance novel" />
        <img className="coverPic img-fluid" src={pipr} alt='pipr' /> 
      </div >
      <div className="bookPanel">
        <Raamat title="Moby-dick" author="Herman Melville" genre="Adventure fiction" />
        <img className="coverPic img-fluid" src={modi} alt='modi' /> 
      </div>
      {moreBooksJsx}
 
    </div>
  );
}

export default App;
