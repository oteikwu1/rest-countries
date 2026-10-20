
const detailContainer = document.querySelector('.display-country'); 
const savedCountry = localStorage.getItem('selectedCountry');
const toggleBgBtn = document.querySelector('.toggle-bg-btn');
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

if (savedCountry) {
  const country = JSON.parse(savedCountry);

  detailContainer.innerHTML = `
    <div class="country-details">
        <div class="country-flag-container">
            <img
                class="country-flag"
                src="${country.flag}"
                alt="${country.name} flag"
            />
        </div>

        <div class="country-content-container">
        <div class="countries-content">
            <div>
                <h2 class="country-name">${country.name}</h2>
                <p><strong>Population:</strong> ${country.population}</p>
                <p><strong>Native Name:</strong> ${country.nativeName}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Sub Region:</strong> ${country.subregion}</p>
                <p><strong>Capital:</strong> ${country.capital}</p>
            </div>

            <div>
                <p><strong>Top Level Domain:</strong> ${country.topLevelDomain}</p>
                <p><strong>Currency:</strong> ${country.currencies?.[0]?.name || 'N/A'}</p>
                <p><strong>Languages:</strong> ${country.languages?.map((lang) => lang.name).join(', ') || 'N/A'}</p>
            </div>
            </div>
            <p>
            <strong>Border Countries:</strong>${country.borders?.length ? country.borders.map((border) => `<span class="border-country">${border}</span> `,).join(''): 'None'}
             </p>
        </div>
    </div>
    `;
} else {
  detailContainer.innerHTML = `<h2>No country selected</h2>`;
}
