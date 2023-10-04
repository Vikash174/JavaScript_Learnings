const startAddMovieBtn = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const deleteMovieModal = document.getElementById("delete-modal");
const backDropDiv = document.getElementById("backdrop");
const cancelAddingMovieBtn =
  addMovieModal.lastElementChild.querySelector(".btn--passive");
const addMovieBtn = cancelAddingMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const ul = document.getElementById("movie-list");
const movies = [];
let movieLiID = 0;
let cancelDeletingMovieButton = document.querySelectorAll('.btn--passive')[1];
//  console.log(cancelAddingMovieBtn);

const updateUI = () => {
  const section = document.querySelector("#entry-text");
  if (movies.length > 0) {
    section.style.display = "none";
  } else {
    section.style.display = "block";
  }
};



const togleDeleteMovieModal = ()=>{
  deleteMovieModal.classList.toggle('visible');
};

const deleteMovie = (li)=>{
  // console.log(li);
  for (const movieLI of ul.children) {
    if(li.id === movieLI.id){
      movieLI.remove();
      movies.pop();
    }
  }
  updateUI();
  togleDeleteMovieModal();
}





const startDeletingMovieHandler = (li)=>{
  //  addMovieModal.classList.toggle('visible');
   deleteMovieModal.classList.toggle('visible');
   const confirmDeleteMovieButton  = document.querySelector('.btn--danger');
  confirmDeleteMovieButton.addEventListener('click',deleteMovie.bind(this,li));
  //  deleteMovie(li);
}
const renderNewMovieElement = (title, imageUrl, rating) => {
  // console.log("called RenderMovieFunction");
  const newMovieElementLi = document.createElement("li");
  newMovieElementLi.id = movieLiID++;
  // console.log(newMovieElementLi);
  newMovieElementLi.classList = "movie-element";
  newMovieElementLi.innerHTML = `
    <div class = "movie-element__image">
      <img src = "${imageUrl}" alt = "${title}">
    </div>
    <div class = "movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
    <button class = "delete-button">Delete Movie</button>
    `;


  newMovieElementLi.addEventListener('click',startDeletingMovieHandler.bind(this,newMovieElementLi));

  ul.appendChild(newMovieElementLi);
  // console.log(ul);
};

const toggleBackDrop = () => {
  backDropDiv.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};


const backDropHandler = () => {
  toggleMovieModal();
};

const clearMovieInputs = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
};
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;

  const urlValue = userInputs[1].value;

  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    urlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue > 5 ||
    +ratingValue < 1
  ) {
    alert(
      "Please enter valid values (rating should be between 1 to 5, and values can not empty)"
    );
    return;
  }

  const newMovie = {
    movieName: titleValue,
    imageUrl: urlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);

  toggleMovieModal();
  clearMovieInputs();
  updateUI();
  renderNewMovieElement(newMovie.movieName, newMovie.imageUrl, newMovie.rating);
};

startAddMovieBtn.addEventListener("click", toggleMovieModal);
addMovieBtn.addEventListener("click", addMovieHandler);
cancelAddingMovieBtn.addEventListener("click", cancelAddMovieHandler);
backDropDiv.addEventListener("click", backDropHandler);
cancelDeletingMovieButton.addEventListener('click',togleDeleteMovieModal);
