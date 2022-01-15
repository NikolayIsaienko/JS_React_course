'use strict';

// localStorage.setItem('number', 5);

// console.log(localStorage.getItem('number'));

// localStorage.removeItem('number');

// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');


checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'green';
    }
});

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'green';
}

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);

localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex'))); 