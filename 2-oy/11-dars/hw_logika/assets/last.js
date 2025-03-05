// HTML Form
const Elform = document.querySelector(".js-form");
const ElButtonPlus = document.querySelector(".js-button_plus");
const ElButtonMinus = document.querySelector(".js-button_minus");
let Elnum = document.querySelector(".js-num") 


let count = Number(localStorage.getItem("num")) || 0;
Elnum.textContent = count;


ElButtonPlus.addEventListener("click", (evt) => {
    evt.preventDefault();
    ++count;
    Elnum.textContent = count;
    localStorage.setItem("num", count)
});

ElButtonMinus.addEventListener("click", (evt) => {
    evt.preventDefault();
    count -= 1;
    Elnum.textContent = count;
    localStorage.setItem("num", count)
});