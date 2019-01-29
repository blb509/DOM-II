// Your code goes here

const nav = document.querySelector('nav');
nav.addEventListener('mouseover', e => {
    nav.style.justifyContent = "space-between";
});

const a = document.querySelectorAll('a');
a.forEach(element =>{
    element.addEventListener('click', e => {
        e.preventDefault();
    });
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

const funBus = document.querySelector('.intro img');
funBus.addEventListener('wheel', e => {
    funBus.style.display = "none";
});

const center = document.querySelector('.intro h2');
center.addEventListener('dblclick', e => {
    center.style.padding = "0 0 0 30% ";
});

const map = document.querySelector('.content-section .img-content img');
map.addEventListener('mouseup', e => {
    alert("You shouldn't put that many drinks near a map!");
});

const border = document.querySelector('img');
border.addEventListener('mouseenter', e => {
    border.style.border = "5px solid black";
});

border.addEventListener('mouseout', e => {
    border.style.border = "none";
});

window.addEventListener('beforeprint', e => {
    alert("Print at your own Peril!!!");
});