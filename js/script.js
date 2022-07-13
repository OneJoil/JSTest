'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// ПЕРВЫЙ СПОСОБ ЦИКЛА FOR //

for (let i = 0; i < 2; i++) {
    const whatsMovie = prompt('Один из последних просмотренных фильмов?', ''),
          rateMovie = prompt('На сколько оцените его?', '');

    if ( whatsMovie != null && rateMovie != null && whatsMovie != '' && rateMovie != '' && whatsMovie.length < 50 && rateMovie.length < 50) {
        personalMovieDB.movies[whatsMovie] = rateMovie;
        console.log('done');
    } else {
        console.log('done');
        i--;
    }
}

// ВТОРОЙ СПОСОБ ЦИКЛА WHILE //

// let i = 0;

// while ( i < 2 ) {
//     i++;
//     const whatsMovie = prompt('Один из последних просмотренных фильмов?', ''),
//           rateMovie = prompt('На сколько оцените его?', '');
        
//     if ( whatsMovie != null && rateMovie != null && whatsMovie != '' && rateMovie != '' && whatsMovie.length < 50 && rateMovie.length < 50) {
//         personalMovieDB.movies[whatsMovie] = rateMovie;
//         console.log('done');
//     } else {
//         console.log('done');
//         i--;
//     }
// }


if ( personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);