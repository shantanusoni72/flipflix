import React, { useState, useEffect } from 'react'
import Catelog from './catelog'
// "https://api.themoviedb.org/3/movie/popular?api_key=a9230cc5284b56f7030a8068360f3487&language=en-US&page=1"

export default function Shelf() {
    var [getMovieData, setMovieData] = useState([])
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=a9230cc5284b56f7030a8068360f3487&language=en-US&page=1"

    const searchMovies = async () => {
        var response 
        /*if(item != "") {
            response = await fetch(url + "&query=" + item)
        } else {
            response = await fetch(url)
        }*/
        
        response = await fetch(url)
        const data = await response.json()

        setMovieData(data.results)
    }

    useEffect(() => {
        setTimeout(() => {
            searchMovies("")
        })
    }, [])

    function searchMedia() {
        const searchTerm = document.getElementById("search").value 
        if(searchTerm != "") {
            searchMovies(searchTerm)
        }
    }

    return (
        <div className="catelog">
            <input id="search" type="text" placeholder="Search" />
            <button onClick={ () => searchMedia() }>Search</button>
            <div className='movieCard'>
                {getMovieData.map((movie) => (
                    <Catelog movie={movie} />
                ))}
            </div>
        </div>
    )
}
