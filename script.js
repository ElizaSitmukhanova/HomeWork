"use strict";
const numberOfFilms=+prompt ('Сколько фильмов вы уже посмотрели?','');


const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
};


const oneQn=prompt('Один из последних просмотренных фильмов', ''),
      twoQn=prompt('На сколько оцените его', ''),
      thirdQn=prompt('Один из последних просмотренных фильмов', ''),
      fourQn=prompt('На сколько оцените его', '');

personalMovieDB.movies[oneQn]  =twoQn;    
personalMovieDB.movies[thirdQn]  =fourQn;     
console.log(personalMovieDB);

