const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";
// You tube API key : https://console.cloud.google.com/apis/credentials?project=projectone-376623
const youTubeKey = "AIzaSyAIiJIzXXZuhC176V9ed3Vso1B3NU-CdQ8";

const submitButtonEl = document.querySelector("#submit");
const leaveReviewButtonEl = document.querySelector("#review");

fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=" + movieDataBaseKey)
    .then(response => response.json())
    .then(trendingMovies => {
        console.log(trendingMovies);

        let movieTitle = "";
        let posterLink = "";
        
        for (let i = 0; i < 6; i++) {
            movieTitle = trendingMovies.results[i].title;
            console.log(movieTitle);
            posterLink = "https://image.tmdb.org/t/p/original/" + trendingMovies.results[i].poster_path;
            console.log(posterLink);
        }

    });
    



submitButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button Click");
    
})

leaveReviewButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button Click");
    fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=" + movieDataBaseKey)
    .then(response => response.json())
    .then(newToken => {
        let requestToken = newToken.request_token
        console.log(requestToken);
        window.location.href = "https://www.themoviedb.org/authenticate/" + requestToken + "?redirect_to=C:/Users/barry/Projects/Project-two/index.html";
        
        
    })
    
})


fetch("https://api.themoviedb.org/3/search/person?api_key=" + movieDataBaseKey + "&language=en-US&query=bruce%20willis&page=1&include_adult=false")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // let actorName = "";
        // let actorPicture = "";
        // let knownFor1 = "";
        // let knownFor2 = "";
        // let knownFor3 = "";

        // for (let i = 0; i < array.length; i++) {
        //     const element = array[i];
            
        // }
        
    })
    
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=1&order=viewCount&q=Sandra%20Bullock&videoType=any&key=" + youTubeKey)
.then(response => response.json())
.then(data => {
    console.log(data);
})
