import React from 'react'

export default function Recommeded() {
    const movie_img="https://firebasestorage.googleapis.com/v0/b/netflix-clone-ae9c2.appspot.com/o/movie-thumb-imgs%2Fmovie1.png?alt=media&token=65a44ae8-c6b2-44d9-a826-de1d6d858c44"
    return (
        <div class="container-2">
            <h5 class="text">Recommeded Movies</h5>
            <img class="thumb" src={movie_img} />
            <img class="thumb" src={movie_img} />
            <img class="thumb" src={movie_img} />
            <img class="thumb" src={movie_img} />
            <img class="thumb" src={movie_img} />
        </div>
    )
}
