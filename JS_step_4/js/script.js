"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films have you already seen?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you already seen?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('What movie did you watch the last time?', ''),
                b = prompt('What rate would you give?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Too few movies!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Not bad!');
        } else if (personalMovieDB.count >= 30) {
            console.log('Cool!');
        } else {
            console.log('Error!');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 2; i++) {
            let genres = prompt(`Your favorite genre under number ${i}`);
            if (genres === '' || genres == null) {
                console.log('You entered incorrect data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} is ${item}`);
        });
    }
};