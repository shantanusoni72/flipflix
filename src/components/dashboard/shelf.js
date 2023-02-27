import React, { useState, useEffect } from 'react'
import Catelog from './catelog'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const start_url = "https://api.themoviedb.org/3"
const purpose_url = ["/movie/popular", "/tv/popular", "/search/movie", {"action": "/movie/28/similar", 
                    "comedy": "/movie/35/similar", "crime": "/movie/85/similar", "romance": "/movie/10749/similar",
                    "drama": "/movie/18/similar", "documentary": "/movie/99/similar", "history": "/movie/36/similar",
                    "music": "/movie/10402/similar"
                    }]
const param = "?api_key=<apiKey>&language=en-US&page=1"
const query = "&query="

export default function Shelf(props) {
    const [getMovieData, setMovieData] = useState([])

    const search = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setMovieData(data.results)
    }

    const searchMovies = async () => {
        const category = props.category
        var url = ""

        if (category === "home" || category === "movies") {
            url = start_url + purpose_url[0] + param
        }
        if (category === "tvshows") {
            url = start_url + purpose_url[1] + param
        }
        
        search(url)
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
            search(url)
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
            <Stack direction="row" spacing={1} className="chip">
                <Chip className="chips"
                      label="Action" 
                      color="error"
                      onClick={()=>{
                        const url = start_url + purpose_url[3]["action"] + param
                        search(url)
                      }}
                />
                <Chip className="chips"
                      label="Comedy" 
                      color="error"
                      onClick={()=>{
                        const url = start_url + purpose_url[3]["comedy"] + param
                        search(url)
                      }} 
                />
                <Chip className="chips"
                      label="Crime"
                      color="error" 
                      onClick={()=>{
                        const url = start_url + purpose_url[3]["crime"] + param
                        search(url)
                      }}
                />
                <Chip className="chips" 
                      label="Romance" 
                      color="error" 
                      onClick={()=>{
                        const url = start_url + purpose_url[3]["romance"] + param
                        search(url)
                      }}
                />
                <Chip className="chips" 
                      label="Drama" 
                      color="error" 
                      onClick={()=>{
                        const url = start_url + purpose_url[3]["drama"] + param
                        search(url)
                      }}
                />
                <Chip className="chips" 
                      label="Documentary" 
                      color="error" 
                      onClick={()=>{
                        const url = start_url + purpose_url[3]["documentary"] + param
                        search(url)
                      }}
                />
                <Chip className="chips" 
                      label="History" 
                      color="error" 
                      onClick={()=>{
                        const url = start_url + purpose_url[3]["history"] + param
                        search(url)
                      }}
                />
                <Chip className="chips" 
                      label="Horror" 
                      color="error" 
                      onClick={()=>{
                        const url = start_url + purpose_url[3]["horror"] + param
                        search(url)
                      }}
                />
                <Chip className="chips" 
                      label="Music" 
                      color="error" 
                      onClick={()=>alert(4)}
                />
            </Stack>
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
