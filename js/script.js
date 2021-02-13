"use strict";

const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const q1 = prompt('What movie did you watch the last time?', ''),
    q2 = +prompt('What rate would you give?', ''),
    q3 = prompt('What movie did you watch the last time?', ''),
    q4 = +prompt('What rate would you give?', '');

personalMovieDB.movies[q1] = q2;
personalMovieDB.movies[q3] = q4;

console.log(personalMovieDB);