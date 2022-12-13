import React, { useState, useEffect } from 'react'
import Catelog from './catelog'

const start_url = "https://api.themoviedb.org/3"
const purpose_url = ["/movie/popular", "/tv/popular", "/search/movie"]
const param = "?api_key=a9230cc5284b56f7030a8068360f3487&language=en-US&page=1"
const query = "&query="

export default function Shelf(props) {
    const [getMovieData, setMovieData] = useState([])

    const searchMovies = async () => {
        const category = props.category
        var url = ""

        if (category === "home" || category === "movies") {
            url = start_url + purpose_url[0] + param
        }
        if (category === "tvshows") {
            url = start_url + purpose_url[1] + param
        }
        const response = await fetch(url)
        const data = await response.json()
        setMovieData(data.results)
    }

    useEffect(() => {
        setTimeout(() => {
            searchMovies()
        })
    }, [])

    const showMoviesFromSearch = async () => {
        const searchTerm = document.getElementById("searchTextField").value
        if (searchTerm !== "") {
            const url = start_url + purpose_url[2] + param + query + searchTerm
            const response = await fetch(url)
            const data = await response.json()
            setMovieData(data.results)
        }
    }

    return (
        <div className="catelog">
            <input
                type="text"
                id="searchTextField"
                placeholder="Search"
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        showMoviesFromSearch()
                    }
                }} />
            <div className='movieCard'>
                {getMovieData.length === 0 ?
                    <h3 style={{ fontSize: 20, color: "white", padding: 30 }}>
                        No movie found :(
                    </h3>
                    :
                    getMovieData.map((movie) => (
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
