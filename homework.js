  "use strict";

const numberOfFilms=+prompt ('Сколько фильмов вы уже посмотрели?','');
function start() {

}
const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
};
     
for (let i=0; i< 2; i++){
     const oneQn=prompt('Один из последних просмотренных фильмов', ''),
           twoQn=prompt('На сколько оцените его', '');
      if (oneQn!=null && twoQn != null && oneQn!= "" && twoQn != "" && oneQn.length > 5) {
          personalMovieDB.movies[oneQn]  =twoQn;
          console.log('done');
      } else {
          console.log('error');
          i--;
      }

     }

console.log(personalMovieDB);

if (personalMovieDB.count < 10){
     console.log('You watched so little films');
} else if (personalMovieDB.count>=10 && personalMovieDB.count<=30) {
     console.log('You are classical viewer');
} else if (personalMovieDB.count>30) {
     console.log('You are cinephile');
} else {
     console.log('Error');
}
 


function showFirstMessage(text) {
     let a = console.log(text)
     return a;
     
}
showFirstMessage('Hello world!');


 
