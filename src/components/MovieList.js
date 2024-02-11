import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {

  return (
    <section className='movie-list-container'>
        {
            props.movies.map((e)=> <Movie key={e.id} id={e.id}title={e.title} description={e.description} handler={props.onDelete} />)
        }
    </section>

  )
}

export default MovieList;