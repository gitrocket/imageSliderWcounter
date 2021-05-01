const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('img');
const counter = document.getElementById('counter');

let index = 0;


rightBtn.addEventListener('click', () => {
    index++;
    changeImage();
    count()
})

leftBtn.addEventListener('click', () => {
    index--;
    changeImage();
    count()
})

function changeImage() {
    if(index > images.length - 1) {
        index = 0;
    } else if(index < 0) {
        index = images.length - 1;
    }
    slider.style.transform = `translateX(${-index * 600}px)`;
}

function count() {
    counter.innerText = `${index + 1}/${images.length}`;
}

