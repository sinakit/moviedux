import '../styles.css';
import React, { useState, useEffect } from 'react';
export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))

    }, []);
    return (
        <div classname='movies-grid'>
            {
                movies.map(movie => (
                    <div key={movie.id} className='movie-card'>
                        <img src={`images/${movie.image}`} alt={movie.title} />
                        <div className='movie-card-info'>

                            <div className='movie-card-title'>{movie.title}</div>
                            <h3 className='movie-card-genre'>{movie.genre}</h3>
                            <p className='movie-card-rating'>{movie.rating}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}