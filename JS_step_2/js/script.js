"use strict";

const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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



if (personalMovieDB.count < 3) {
    console.log('Too few movies!');
} else if (personalMovieDB.count >= 3 && personalMovieDB.count < 6) {
    console.log('Not bad!');
} else if (personalMovieDB.count >= 6) {
    console.log('Cool!');
} else {
    console.log('Error!');
}

console.log(personalMovieDB);