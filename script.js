import countries from './data.js'

const toggleBgBtn = document.querySelector('.toggle-bg-btn');
let searchInput = document.querySelector('.search-input');
const displayContainer = document.querySelector('.display-country');
const regionSelect = document.getElementById('region-select');


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

displayCountries(countries);

searchInput.addEventListener("keydown", (e) => {

  if(e.key === "Enter") {
    e.preventDefault()
    let searchValue = searchInput.value.toLowerCase();

    let foundCountry = countries.find((country) => 
      country.name.toLowerCase() === searchValue
    );

    if(foundCountry) {
      localStorage.setItem("selectedCountry", JSON.stringify(foundCountry))
      window.location.href = "detail.html"
     
    } else {
        displayContainer.innerHTML = `<h2>Country not Found</h2>`;
    }
   searchInput.value = '';
  }

});

function handleRegionSelection(event) {
  const selectedRegion = event.target.value;

  if(!selectedRegion || selectedRegion === 'filter') {
    return countries;
  }

  const filterData = countries.filter(country => country.region === selectedRegion)
  return filterData
}

regionSelect.addEventListener('change', (event) => {
  const result = handleRegionSelection(event);

   displayCountries(result);
})

