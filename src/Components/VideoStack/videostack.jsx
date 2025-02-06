import { useState, useEffect } from "react";
import "./style.css";

export default function MovieRack() {
    const [movies, setMovies] = useState([]);
    const [review, setReview] = useState({});
    const [disabled, setDisabled] = useState(true);

    const CACHE_KEY = "popularMovies";
    const CACHE_TIMESTAMP = "popularMoviesTimestamp";

    const openReviewWindow = (movie) => {
        setDisabled(false);
        setReview(movie);
    };

    const closeReviewWindow = () => {
        setDisabled(true);
    };

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            "x-rapidapi-host": "imdb236.p.rapidapi.com",
        },
    };

    const fetchTopMovies = async () => {
        const url = "https://imdb236.p.rapidapi.com/imdb/most-popular-movies";
        try {
            const response = await fetch(url, options);
            const data = await response.json();

            if (data) {
                setMovies(data);
                console.log(1);

                // localStorage.setItem(CACHE_KEY, JSON.stringify(data.results));
                // localStorage.setItem(CACHE_TIMESTAMP, Date.now().toString());
            }
        } catch (err) {
            console.error("Error fetching movies:", err.message);
        }
    };

    const loadMovies = () => {
        const cachedMovies = localStorage.getItem(CACHE_KEY);
        const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP);

        if (cachedMovies && cacheTimestamp) {
            const cacheAge = Date.now() - parseInt(cacheTimestamp, 10);
            const isCacheValid = cacheAge < 24 * 60 * 60 * 1000; // 24 hours

            if (isCacheValid) {
                setMovies(JSON.parse(cachedMovies));
                return;
            }
        }

        fetchTopMovies();
    };

    useEffect(() => {
        // loadMovies();
        fetchTopMovies();
    }, []);

    return (
        <div className="movie-rack-container">
            <div className="movie-rack">
                <h2>Movies</h2>
                <div className="rack-container">
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div
                                key={movie.id}
                                className="movie-card"
                                onClick={() => openReviewWindow(movie)}>
                                <img
                                    src={movie.primaryImage || 'https://placehold.co/400x600'}
                                    alt={movie.originalTitle || "Unknown Title"}
                                    className="movie-image"
                                />
                                <label className="movie-title">
                                    {movie.originalTitle || "Unknown Title"}
                                </label>
                            </div>
                        ))
                    ) : (
                        <div className="no-movies">
                            <label>No movies available</label>
                        </div>
                    )}
                </div>
                <div className={`review ${disabled ? 'disabled' : ''}`}>
                    <i className="fa fa-times" aria-hidden="true" onClick={closeReviewWindow}></i>
                    <div className="review-image">
                        <img
                            src={review.primaryImage || 'https://placehold.co/400x600'}
                            alt={review.originalTitle || "Movie"}
                        />
                    </div>
                    <div className="review-text">
                        <h2>{review.originalTitle || "No Title"}</h2>
                        <label>{review.releaseDate || "No Release Date"}</label>
                        <label>
                            <img src="assets/star.svg" alt="rate" />
                            {review.averageRating || "N/A"}
                        </label>
                        <p>{review.description || "No description available."}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}