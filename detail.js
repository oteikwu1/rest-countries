
const detailContainer = document.querySelector('.display-country'); 

const savedCountry = localStorage.getItem('selectedCountry');

if (savedCountry) {
  const country = JSON.parse(savedCountry);

  detailContainer.innerHTML = `
    <div class="country-details">
    <div class="country-flag-container">
    <img class="country-flag" src="${country.flag}" alt="${country.name} flag" />
    </div>

      <div>
      <h2>${country.name}</h2>

      <div>
        <p><strong>Population: </strong>${country.population}</p>
        <p><strong>Native Name: </strong>${country.nativeName}</p> 
        <p><strong>Region: </strong>${country.region}</p>
        <p><strong>Sub Region: </strong>${country.subregion}</p>
        <p><strong>Capital: </strong>${country.capital}</p>
      </div>

      <div>
          <p><strong>Top Level Domain: </strong>${country.topLevelDomain}</p>
          <p><strong> Currency: </strong>${country.currencies[0].name}</p>
          <p><strong>Languages: </strong>${country.languages[0].nativeName}</p>
      </div>

      <div>

      </div>
       <p><strong>Borders Countries:</strong> ${country.borders.map(c => `${c}`)
      .join(", ")}</p>
        
      </div>
      
    </div>
  `;
} else {
  detailContainer.innerHTML = `<h2>No country selected</h2>`;
}
