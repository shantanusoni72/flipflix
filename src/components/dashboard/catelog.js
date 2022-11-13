import React from 'react'
import RatingImage from '../../rating.png'

export default function Catelog({ movie }) {
    const url = "https://image.tmdb.org/t/p/w500/" + movie.poster_path
    return (
        <div className='movie'>
            <div>
                <p>{movie.title} ({movie.release_date})</p>
                <img class="ratingImg" src={RatingImage} alt="ratingImage" /><p>{movie.vote_average}</p>
                <p>{movie.overview}</p>
            </div>
            <div>
                <img src={url} alt={movie.title} />
            </div>
            <div>
                <label>{movie.title}</label>
            </div>
        </div>
    )
}
