// Fizz / Bizz FizzBizz
// let user = -1;
// if (user <= 5 && user > 0) {
//   console.log("Fizz");
// } else if (user <= 10 && user >= 6) {
//   console.log("Bizz");
// } else if (user > 10) {
//   console.log("FizzBizz");
// } else {
//   console.log("N/A");
// }

// todo 1
// const form = document.querySelector(".js-form"),
//   input = document.querySelector(".js-input");
// const wrapper = document.querySelector(".js-wrapper");

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const p = document.createElement("p");
//   p.textContent = input.value;
//   wrapper.appendChild(p);

//   input.value = null;
// });

// toto 2
const form = document.querySelector(".js-form"),
  input = document.querySelector(".js-input");
const wrapper = document.querySelector(".js-ul");
const template = document.querySelector(".js-template").content;

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const docFrg = document.createDocumentFragment();
  const clone = template.cloneNode(true);
  clone.querySelector(".js-li").textContent = input.value;
  docFrg.appendChild(clone);
  wrapper.appendChild(docFrg);

  input.value = null;
});
