
// apiKey = api_key=95a8fe01a5e62f9d7024989925ec09ec
// url = https://api.themoviedb.org/3
//  path = /discover/movie?sort_by=popularity.desc&
//  img = https://image.tmdb.org/t/p/w500/


const apikey = "api_key=95a8fe01a5e62f9d7024989925ec09ec" 
const url = "https://api.themoviedb.org/3"
const path = "/discover/movie?sort_by=popularity.desc&"
const imgUrl = "https://image.tmdb.org/t/p/w500/"
const apiUrl = url + path + apikey

const container = document.getElementById("container")


getMovies(apiUrl);

function getMovies(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      showMovie(data.results);
    });
}

function showMovie(data) {
  container.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, id } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    <a href="./movieDetails.html?id=${id}" >
      <img src="${imgUrl + poster_path}" alt="" />
      <h4 id="movieName">${title}</h4>
    </a>
    `;
   container.appendChild(movieElement);

  });
}
let movieId=location.search.split("=")[1];
const movieDetailsData = document.getElementById("movieData")
function getMoviesDetails(url) {
 fetch(url).then((res) => res.json()).then((data) => {
 data.results.forEach((movie) => {
 if (movie.id == movieId) {
  const { title, poster_path, overview } = movie;
const mElement = document.createElement("div")
mElement.classList.add("contain")
mElement.innerHTML=  `
  <img src="${imgUrl + poster_path}" alt="" />
  <div id="box">
  <h3>${title}</h3>
  <p>${overview}</p>
  </div>
`;
movieDetailsData.appendChild(mElement)
    }
  })
})
}
getMoviesDetails(apiUrl)
