const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const whatsMovie = prompt('Один из последних просмотренных фильмов?', ''),
      rateMovie = prompt('На сколько оцените его?', ''),
      whatsMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
      rateMovie1= prompt('На сколько оцените его?', '');

personalMovieDB.movies[whatsMovie] = rateMovie;
personalMovieDB.movies[whatsMovie1] = rateMovie1;

console.log(personalMovieDB);