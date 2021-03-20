/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Logan",
        "Justice League",
        "Deadpool",
        "Captain America",
        "The Lord of the Rings"
    ]
};

const advBlocks = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
    //   movieList = document.querySelectorAll('.promo__interactive-list');
    movieList = document.querySelector('.promo__interactive-list');

// advBlocks.forEach(function (item) {
//     item.remove();
// });
advBlocks.forEach(item => {
    item.remove();
});

genre.textContent = 'Drama';
poster.style.backgroundImage = 'url("img/bg.jpg")';
// movieList[0].innerHTML = "";
movieList.innerHTML = "";

movieDB.movies.sort();
// console.log(movieDB.movies);

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film} 
        <div class="delete"></div>
    </li>
    `;
});