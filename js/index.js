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

const header = document.querySelector('.main-navigation');
header.addEventListener('click', e => {
    header.style.backgroundColor = "wheat";
});

const title = document.querySelector('.logo-heading');
title.addEventListener('click', e => {
    title.style.color = "skyblue";
    e.stopPropagation();
});


