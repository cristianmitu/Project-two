const key = "79a50b21902c8d9bd27a20543dc2f4c5";
// let apiLink = ;




fetch("https://api.themoviedb.org/3/search/person?api_key=" + key + "&language=en-US&query=tom&page=1&include_adult=false")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
