const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];

const renderMovieList = (fliterTerm = "") => {
  const movieListEle = document.getElementById("movie-list");

  if (movies.length > 0) {
    movieListEle.classList.add("visible");
  } else {
    movieListEle.classList.remove("visible");
  }

  movieListEle.innerHTML = "";

  const fliterdMovies = !fliterTerm? movies : movies.filter(movie => movie.info.title.includes(fliterTerm));


  fliterdMovies.forEach((movie) => {
    const li = document.createElement("li");

    let text = movie.info.title + "(";
    /*   const objectKeys = Object.keys(movieObj.info);
    console.log(objectKeys);
    for (const key of objectKeys) {
      console.log(key !== 'title');
      if(key !== 'title'){
          console.log( movieObj.info.key);
         text += movieObj.info[key];
      }
    } */

    for (const key in movie.info) {
      // for in loop can be used here for finding keys in objects
      if (key !== "title") {
        text += ` ${key} : ${movie.info[key]} )`;
      }
    }

    li.innerHTML = text;

    movieListEle.appendChild(li);
  });
};

const addMovieHanlder = () => {
  const title = document.getElementById("title").value;
  const extraInfoKeyName = document.getElementById("extra-name").value;
  const extraInfoKeyValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraInfoKeyName.trim() === "" ||
    extraInfoKeyValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraInfoKeyName]: extraInfoKeyValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  renderMovieList();
  //    console.log(movies);
};

const filterMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovieList(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHanlder);
searchBtn.addEventListener("click", filterMovieHandler);
