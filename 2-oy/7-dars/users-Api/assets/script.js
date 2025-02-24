const ul = document.querySelector(".js-items");
const template = document.querySelector(".js-template").content;

const docFrg = document.createDocumentFragment();
let URL = "https://jsonplaceholder.typicode.com/users";


fetch(URL)
  .then((res) => res.json())
  .then((data) => renderList(data));

function renderList(url) {
  console.log(url);
  url.forEach((item) => {
    const clone = template.cloneNode(true);
    clone.querySelector(".js-tittle").textContent = item.name;
    clone.querySelector(".js-username").textContent = item.username;
    clone.querySelector(".js-overview").textContent = item.email;
    clone.querySelector(".js-address").textContent = item.address.street;
    clone.querySelector(".js-suite").textContent = item.address.suite;
    clone.querySelector(".js-city").textContent = item.address.city;
    clone.querySelector(".js-phone").textContent = item.phone;
    clone.querySelector(".js-website").textContent = item.website;
    clone.querySelector(".js-company_name").textContent = item.company.name;
    clone.querySelector(".js-catchPhrase").textContent = item.company.catchPhrase;
    clone.querySelector(".js-company_name-bs").textContent = item.company.bs;

    docFrg.appendChild(clone);
  });

  ul.appendChild(docFrg);
}
