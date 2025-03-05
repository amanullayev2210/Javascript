// HTML Form
const elForm = document.querySelector(".js-form");
const  elSearch = document.querySelector(".js-search_inp");

// HTML Other Element
const elRenderList = document.querySelector(".js-render_list");
const elTemplate = document.querySelector(".js-template").content;

let FILMS_URL = `https://www.omdbapi.com/?apikey=42417edb&s=`;

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let inpValue = elSearch.value.trim();
  let url = `${FILMS_URL}${inpValue}`;
  GetData(url, inpValue);
  elSearch.value = "";
});

async function GetData(url, searchValue) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let datainfo = await data.Search;
    RenderListFn(datainfo, elRenderList);
  } catch (error) {
    console.error(error);
  }
}

function RenderListFn(arr, node) {
    node.innerHTML = "";
    const docFrg = document.createDocumentFragment();
    arr.forEach((piece) => {
      let clone = elTemplate.cloneNode(true);
      clone.querySelector(".js-render_img").src = piece.Poster;
      clone.querySelector(".js-tittle_name").textContent = piece.Title
      clone.querySelector(".js-type").textContent = piece.Type;    
      clone.querySelector(".js-year").textContent = piece.Year;      
      clone.querySelector(".js-imdbid").href = `https://www.imdb.com/title/${piece.imdbID}/`;
      docFrg.appendChild(clone);
    });
    node.appendChild(docFrg);
  }
