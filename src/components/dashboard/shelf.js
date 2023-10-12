import React, { useState, useEffect } from 'react'
import Catelog from './catelog'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import PeopleRack from './people';
import urls from '../urls'
import './style.css'

export default function Shelf(props) {
    const [getMovieData, setMovieData] = useState([])
    const [getPeopleData, setPeopleData] = useState([])

    const search = async (url, purpose) => {
        const response = await fetch(url)
        const data = await response.json()
        if(purpose === 'search') {
            setMovieData(data.results)
        } else if(purpose === 'people') {
            setPeopleData(data.results)
        }
    }

    const searchMovies = async () => {
        const category = props.category
        var url = ""

        if (category === "home" || category === "movies") {
            url = urls.start_url + urls.purpose_url[0] + urls.param
        }
        if (category === "tvshows") {
            url = urls.start_url + urls.purpose_url[1] + urls.param
        }

        search(url, 'search')
    }

    const searchPeople = async () => {
        const url = urls.start_url + urls.purpose_url[4] + urls.param
        search(url, 'people')
    }

    useEffect(() => {
        setTimeout(() => {
            searchMovies()
            searchPeople()
        })
    }, [])

    const showMoviesFromSearch = async () => {
        const searchTerm = document.getElementById("searchTextField").value
        if (searchTerm !== "") {
            const url = urls.start_url + urls.purpose_url[2] + urls.param + urls.query + searchTerm
            search(url, 'search')
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
                {
                    urls.category.map((key) => (
                        <Chip className="chips"
                            label={ key }
                            color="error"
                            onClick={() => {
                                const url = urls.start_url + urls.purpose_url[3][key] + urls.param
                                search(url, 'search')
                            }}
                        />
                    ))
                }
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
            <h3 className="title">People</h3>
            <div className="peopleBoard">
                {getPeopleData.length === 0 ?
                    <h3 style={{ fontSize: 20, color: "white", padding: 30 }}>
                        No people found :(
                    </h3>
                    :
                    getPeopleData.map((people) => (
                        <PeopleRack
                            name={people.name}
                            image={people.profile_path}
                        />
                    ))
                }
            </div>
        </div>
    )
}
