const form = document.querySelector(".js-form"),
  input = document.querySelector(".js-inp");
const text = document.querySelector(".js-items");
const template = document.querySelector(".js-template").content;

let arr = [];

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  arr.push(input.value);
  renderText();
  input.value = "";
});

function renderText() {
  text.innerHTML = "";

  const docFrg = document.createDocumentFragment();

  arr.forEach((item, index) => {
    const clone = template.cloneNode(true);
    clone.querySelector(".js-paragraph").textContent = `${index + 1}. ${item}`;
    clone.querySelector(".js-btn").addEventListener("click", (evt) => {
      evt.preventDefault();
      arr = arr.filter((_, inx) => index !== inx);
      renderText();
    });
    docFrg.appendChild(clone);
  });

  text.appendChild(docFrg);
}
