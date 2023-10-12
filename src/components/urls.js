const start_url = "https://api.themoviedb.org/3"
const category = [
    "action",
    "comedy",
    "crime",
    "romance",
    "drama",
    "documentary",
    "history",
    "horror",
    "music"
]
const purpose_url = ["/movie/popular",
    "/tv/popular",
    "/search/movie",
    {
        "action": "/movie/28/similar",
        "comedy": "/movie/35/similar",
        "crime": "/movie/85/similar",
        "romance": "/movie/10749/similar",
        "drama": "/movie/18/similar",
        "documentary": "/movie/99/similar",
        "history": "/movie/36/similar",
        "horror": "/movie/27/similar",
        "music": "/movie/10402/similar"
    },
    "/person/popular"
]
const param = "?api_key=a9230cc5284b56f7030a8068360f3487&language=en-US&page=1"
const query = "&query="

module.exports = {
    start_url,
    category,
    purpose_url,
    param,
    query
}