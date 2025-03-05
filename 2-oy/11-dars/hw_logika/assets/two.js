// HTML Form
const Elform = document.querySelector(".js-form");
const Elinp = document.querySelector(".js-inp");
const ElButton = document.querySelector(".js-button");

// HTML other
const wrapper = document.querySelector(".js-wrapper");

let num = 1;

Elform.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const p = document.createElement("p");
    p.textContent = Elinp.value;
    wrapper.appendChild(p);
    Elinp.value = null;
    setInterval(() => {
        if (p.textContent > 0) { 
            p.textContent -= 1;
      }
      else {
        p.textContent = "";
      }
    }, 1000);
});
