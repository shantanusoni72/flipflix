import React, { useState, useEffect } from 'react'
import Catelog from './catelog'

export default function Shelf(props) {
    var [getMovieData, setMovieData] = useState([])

    const searchMovies = async () => {
        const category = props.category
        if (category === "home" || category === "movies") {
            const url = "https://api.themoviedb.org/3/movie/popular?api_key=a9230cc5284b56f7030a8068360f3487&language=en-US&page=1"
            const response = await fetch(url)
            const data = await response.json()
            setMovieData(data.results)
        } 
        if(category === "tvshows") {
            const url = "https://api.themoviedb.org/3/tv/popular?api_key=a9230cc5284b56f7030a8068360f3487&language=en-US&page=1"
            const response = await fetch(url)
            const data = await response.json()
            setMovieData(data.results)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            searchMovies()
        })
    }, [])

    return (
        <div className="catelog">
            <div className='movieCard'>
                {getMovieData.map((movie) => (
                    <Catelog
                        title={movie.title || movie.name}
                        release_date={movie.release_date || movie.first_air_date}
                        poster_path={movie.poster_path}
                        vote_average={movie.vote_average}
                        overview={movie.overview}
                    />
                ))}
            </div>
        </div>
    )
}
