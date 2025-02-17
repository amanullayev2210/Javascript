const form = document.querySelector(".js-form"),
  input = document.querySelector(".js-inp");
const text = document.querySelector(".js-items");
const template = document.querySelector(".js-template").content;
const searchInp = document.querySelector(".js-search-inp");

let arr = [];
let newArr = [];

searchInp.addEventListener("input", (evt) => {
  evt.preventDefault();
  let serchValue = searchInp.value.toLowerCase();

  if (serchValue === "") {
    arr = [...newArr];
  } else {
    arr = newArr.filter((item) => item.toLowerCase().includes(serchValue));
  }

  renderText();
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (input.value === "") {
    alert("Nimadur kiriting");
  } else {
    arr.push(input.value);
    newArr.push(input.value);
    renderText();
    form.reset();
  }
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
