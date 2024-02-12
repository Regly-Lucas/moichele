let button = document.querySelector('#no');
let height = window.innerHeight - 100;
let width = window.innerWidth - 100;

button.addEventListener('mouseover', () => {
    button.style.position = 'absolute';
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px"
})