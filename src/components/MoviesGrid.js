import '../styles.css';
import React, { useState, useEffect, use } from 'react';
import MovieCard from './MovieCard';
export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [saerchTerm, setSearch] = useState('');
    const [genre, setGenre] = useState('All  Genres');
    const [tating, setRating] = useState('All ');
    // refresh to get new movies

    // 1. title
    // 2. genre
    // 3. rating
    // 4. image
    // movies.map(movie => console.log(movie));

    //const fetchMovies = async () => {
    //  const response = await fetch('movies.json');
    //const data = await response.json();
    //setMovies(data);
    //}

    //useEffect(() => {
    //  console.log('useEffect');
    //fetchMovies();
    //}, [reload]);

    //const handleReload = () => {
    //   setReload(true);
    //}

    useEffect(() => {
        // promise
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))

    }, []);
    const handlesdSearchChange = (e) => {
        setSearch(e.target.value);
    }
    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }
    const matchesGenre = (movie, genre) => {
        return genre === 'All Genres' || movie.genre === genre;
    }
    const matchesSearchTerm= (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    const filteredMovies = movies.filter(movie => {

        return movie.title.toLowerCase().includes(saerchTerm.toLowerCase());
    });
    return (
        <div>
            <input type='text'
                className='search-input'
                placeholder='Search movies...'
                value={saerchTerm}
                onChange={handlesdSearchChange} />
            <div className="filter-bar">
                <div className="filter-slot">
                    <label> Genres</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option >Drama</option>
                        <option >Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className="filter-slot">
                    <label> Ratiang</label>
                    <select className="filter-dropdown" onChange={handleRatingChange}>
                        <option>All Rating</option>
                        <option>Good</option>
                        <option >ok</option>
                        <option >bad</option>
                    </select>
                </div>
            </div>
            <div classname='movies-grid'>
                {
                    filteredMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
}