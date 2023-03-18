import axios from "axios";

const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";


function TrendingMovies() {
    return (
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + movieDataBaseKey)
        .then(function (response) {
          // handle success
          console.log(response);
        })
    )
}

export default TrendingMovies

