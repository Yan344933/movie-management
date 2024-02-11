import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const Movie = (props) => {

    const onDelete = () => props.handler(props.id);

  return (
    <div className="movie-container">
            
        <div className="grid grid-col-2 movie-top-area">
            <p className="">
                {props.title}
            </p>
            <FaWindowClose className="icon-cursor icon-size-dbl-xlg grid-x-right" onClick={onDelete}/>

        </div>
        
        <p className="movie-description">
            {props.description}
        </p>
        
    </div>
  );
}

Movie.defaultProps = {
    title: 'Random Movie',
    description: 'Random description'
}


export default Movie;