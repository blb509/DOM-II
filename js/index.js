// Your code goes here

const nav = document.querySelector('nav');
nav.addEventListener('mouseover', e => {
    nav.style.justifyContent = "space-between";
});

const body = document.querySelector('body');
body.addEventListener('keydown', e => {
    body.style.zoom = "120%";
});

body.addEventListener('keyup', e => {
    body.style.zoom = "100%";
});

 

