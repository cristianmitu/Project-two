// Movie database API key : https://www.themoviedb.org/  
const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";
// You tube API key : https://console.cloud.google.com/apis/credentials?project=projectone-376623
const youTubeKey = "AIzaSyAIiJIzXXZuhC176V9ed3Vso1B3NU-CdQ8";




fetch("https://api.themoviedb.org/3/search/person?api_key=" + movieDataBaseKey + "&language=en-US&query=tom&page=1&include_adult=false")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=10&order=viewCount&q=Sandra%20Bullock&videoType=any&key=" + youTubeKey)
.then(response => response.json())
.then(data => {
    console.log(data);
})
