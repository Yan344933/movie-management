import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
import Search from './Search';
import AddMovie from './AddMovie';
import '../css/App.css';
import { useState, useEffect } from 'react';
import Modal from './Modal';


function App() {

  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState({
    msg:'',
    visible: false
  });
  const [showAddMovie, setShowAddMovie] = useState(false);

  const closeModal = () =>{
    setModal({msg: '', visible: false});
  }

  const addMovie = (movie) =>{

    localStorage.setItem("movies", JSON.stringify([...movies, movie]));

    setMovies([...movies, movie]);

    setModal({
      visible: true,
      msg: "Movie is added"
    });
  }

  const deleteMovie = (id) => {

        const newMovies = movies.filter((movie)=>{
            return movie.id !== id
        })

        localStorage.setItem("movies", newMovies);

        setMovies(newMovies);

        setModal({
          visible: true,
          msg: "Movie is deleted"
        })

        
  }

  const toggleAddMovie = () => {
    setShowAddMovie(!showAddMovie);
  }

  const filter = (input) =>{
    let newMovies = movies.filter(e => e.title.includes(input));

    if(input === ''){
      newMovies = JSON.parse(localStorage.getItem("movies"))
    } else if(input !== "" && newMovies.length > 0){
      
    }
    setMovies(newMovies);
  }

  // onReady
  useEffect(()=>{
        
    if(localStorage.getItem("movies")){

      const newMovies = JSON.parse(localStorage.getItem("movies"))
      setMovies(newMovies);
    }

    
}, []);

  return (
    <div className='container'>

      <Modal modal={modal} onClose={closeModal} />
      <Header toggleForm={toggleAddMovie} />
      <Search onFilter={filter}/>
      <main>
        <AddMovie onAdd={addMovie} visible={showAddMovie} />
        <MovieList onDelete={deleteMovie} movies={movies}/>

      </main>
      
      <Footer />

    </div>
  );
}

export default App;
