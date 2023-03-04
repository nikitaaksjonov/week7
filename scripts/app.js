const container = document.querySelector('.container');
const movieTitle = document.querySelector('.inputmovieTitle');
const movieTitleUrl = document.querySelector('.inputmovieTitleUrl');
const movieYear = document.querySelector('.inputMovieYear');
const btn = document.querySelector('.button');
const movieTitleNew = document.querySelector('.favoriteMovieTitle');
const movieYearNew = document.querySelector('.favoriteMovieYear');


let movieTitleInStorage = localStorage.getItem('title');
let movieTitleUrlInStorage = localStorage.getItem('posterUrl');
let movieYearInputInStorage = localStorage.getItem('movieYear');


if(movieTitleInStorage && movieTitleUrlInStorage){
    movieTitleNew.textContent =movieTitleInStorage ;
    container.style.backgroundImage = `radial-gradient( rgba(255, 255, 255, 0.385) , rgba(14, 14, 14, 0.445) ), 
    url('${movieTitleUrlInStorage}')`;
    movieYearNew.textContent = movieYearInputInStorage;
}

btn.addEventListener('click', ()=>{
    let movieTitleInput = movieTitle.value;
    let movieTitleUrlInput = movieTitleUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('posterUrl', movieTitleUrlInput);
    localStorage.setItem('movieYear', movieYearInput);
    movieTitleNew.textContent = movieTitleInput;
    container.style.backgroundImage = `radial-gradient( rgba(255, 255, 255, 0.385) , rgba(14, 14, 14, 0.445) ), 
    url('${movieTitleUrlInput}')`;
    movieYearNew.textContent = movieYearInput;
    movieTitle.value='';
    movieTitleUrl.value='';
    movieYear.value='';

});