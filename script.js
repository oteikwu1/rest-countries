import countries from './data.js'

const toggleBgBtn = document.querySelector('.toggle-bg-btn');
let searchInput = document.querySelector('.search-input');
const displayContainer = document.querySelector('.display-country');
const regionSelect = document.getElementById('region-select');
const themeIcon = document.querySelector('.theme-icon');

function toggleBackgroundColor() {
  let toggleBackground = document.body;
  let themeIcon = document.getElementById('theme-icon'); 

  toggleBackground.classList.toggle('dark-mode');

  let isDarkMode = toggleBackground.classList.contains('dark-mode');

  if (isDarkMode) {
    themeIcon.src = './assets/sun.png';
  } else {
    themeIcon.src = './assets/moon.svg'; 
}
}

 toggleBgBtn.addEventListener('click', toggleBackgroundColor);

 
function displayCountries(countries) {
  displayContainer.innerHTML = countries
    .map(
      (country) =>
        `
     <div class="countries-result">
      <img class="country-flag" src="${country.flag}" alt="${country.name} flag" />
      <h3 class="country-name">${country.name}</h3>
     <p> <strong>Population: </strong>${country.population} </p>
     <p> <strong>Region: </strong>${country.region}  </p>
      <p> <strong>Capital: </strong>${country.capital}  </p>
     </div>
`,
    )
    .join('');
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
        displayContainer.innerHTML = `
         <h1>Opps!!</h1>
        <h2>Country not Found</h2>
        
        `;
    }
   searchInput.value = '';
  }

});


regionSelect.addEventListener('change', (e) => {
  const selectedRegion = e.target.value.toLowerCase();

  if (selectedRegion === 'all') {
     displayCountries(countries);
  } else {
    const filteredCountries = countries.filter(
      (country) => country.region && country.region.toLowerCase() === selectedRegion,
    );
    displayCountries(filteredCountries);
  }
});
