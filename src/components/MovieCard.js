import React from "react";
import '../styles.css';
export default function MovieCard({ movie }) {

    const handleError = (e) => {
        e.target.src = 'images/defaul';
    };
    const getRatingClass = (rating) => {
        // ternary operator
        return rating >= 8 ? 'rating-good' : rating >= 5 ? 'rating-ok' : 'rating-bad';
    }
    return (
        <div key={movie.id} className='movie-card'>
            <img src={`images/${movie.image}`}
                alt={movie.title}
                onError={handleError} />
            <div className='movie-card-info'>

                <div className='movie-card-title'>{movie.title}</div>
                <h3 className='movie-card-genre'>{movie.genre}</h3>
                <p className={'movie-card-rating '+ getRatingClass(movie.rating)}>{movie.rating}</p>
            </div>
        </div>

    );
}