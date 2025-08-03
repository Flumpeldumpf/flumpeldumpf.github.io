let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dotsContainer = document.querySelector(".dots-container");

function initSlides() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.onclick = () => showSlide(i);
        dotsContainer.appendChild(dot);
    }
    showSlide(slideIndex);
}

function showSlide(n) {
    if (n >= slides.length) slideIndex = 0;
    else if (n < 0) slideIndex = slides.length - 1;
    else slideIndex = n;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dotsContainer.children[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("fade");
    dotsContainer.children[slideIndex].classList.add("active");
}

function changeSlide(delta) {
    showSlide(slideIndex + delta);
}

window.addEventListener("DOMContentLoaded", initSlides);