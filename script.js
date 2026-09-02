import countries from './data.js'

const toggleBgBtn = document.querySelector('.toggle-bg-btn');
let searchInput = document.querySelector('.search-input');
const displayContainer = document.querySelector('.display-country');


function toggleBackgroundColor() {
     let toggleBackground = document.body;
     toggleBackground.classList.toggle('dark-mode') 
}

 
 toggleBgBtn.addEventListener('click', toggleBackgroundColor);

 
function displayCountries(allCountries) {
  displayContainer.innerHTML = countries
    .map(
      (country) =>
        `
     <div class="countries-result">
      <img class="country-flag" src="${country.flag}" alt="${country.name} flag" />
      <h3>${country.name}</h3>
     <p> <strong>Population: </strong>${country.population} </p>
     <p> <strong>Region: </strong>${country.region}  </p>
      <p> <strong>Capital: </strong>${country.capital}  </p>
     </div>
`,
    ).join('');
}


searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    let searchValue = searchInput.value;
    let searchCountries = countries.find((country) =>
      country.name.toLowerCase().includes(searchValue)
    );

    if (searchCountries) {
      
    }
    displayCountries(searchCountries);
    searchInput.value = '';
  }
});
