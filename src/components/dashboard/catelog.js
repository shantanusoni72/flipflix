import React from 'react'
import RatingImage from '../../rating.png'

export default function Catelog(props) {
    const url = "https://image.tmdb.org/t/p/w500/" + props.poster_path
    return (
        <div className='movie'>
            <div>
                <p>{props.title} ({props.release_date})</p>
                <img className="ratingImg" src={RatingImage} alt="ratingImage" /><p>{props.vote_average}</p>
                <p>{props.overview}</p>
            </div>
            <div>
                <img src={url} alt={props.title} />
            </div>
            <div>
                <label>{props.title}</label>
            </div>
        </div>
    )
}
