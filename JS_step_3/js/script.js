 "use strict";

 //   function showFirstMessage(text) {
 //       console.log(text);
 //       alert(text);
 //   }

 //   showFirstMessage("Hello world!");

 //   function calc(a, b) {
 //       return (a + b);
 //   }

 //   console.log(calc(4, 3));
 //   console.log(calc(5, 4));
 //   console.log(calc(6, 5));

 // const logg = "Hello world";
 // console.log(logg.indexOf("rl"));
 // console.log(logg.slice(0));

 // const arr = ["asd", "cvb", "ghj"];
 // console.log(arr[0]);

 // const str = "Hello world";
 // const strq = str.slice(3, 8);
 // console.log(strq);

 let numberOfFilms;

 function start() {
     numberOfFilms = prompt('How many films have you already seen?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
         numberOfFilms = prompt('How many films have you already seen?', '');
     }
 }

 start();

 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: true
 };

 function rememberMyFilms() {
     for (let i = 0; i < numberOfFilms; i++) {
         const q1 = prompt('What movie did you watch the last time?', ''),
             q2 = +prompt('What rate would you give?', '');

         if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
             personalMovieDB.movies[q1] = q2;
             console.log('Done');
         } else {
             console.log('Error');
             i--;
         }
     }
 }

 //  rememberMyFilms();

 function detectPersonalLevel() {
     if (personalMovieDB.count < 3) {
         console.log('Too few movies!');
     } else if (personalMovieDB.count >= 3 && personalMovieDB.count < 6) {
         console.log('Not bad!');
     } else if (personalMovieDB.count >= 6) {
         console.log('Cool!');
     } else {
         console.log('Error!');
     }
 }

 detectPersonalLevel();

 function showMyDB(hidden) {
     if (!hidden) {
         console.log(personalMovieDB);
     }
 }

 showMyDB(personalMovieDB.privat);

 function writeYourGenres() {
     for (let i = 1; i <= 3; i++) {
         personalMovieDB.genres[i - 1] = prompt(`Your favorite genre under number ${i}`);
     }
 }

 writeYourGenres();

 console.log(personalMovieDB);