const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    console.log(countries[1]);
    const allCountriesHTML = countries.map((country) => getCountryHTML(country));
    // console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}

// destructuring option-2
const getCountryHTML = ({ name, flags, region, startOfWeek }) => {
    return `
        <div class="country">
            <h2>${name.official}</h2>
            <p>Continent: ${region}</p>
            <p>Week starts on: ${startOfWeek}</p>
            <img src="${flags.png}">
        </div>
    `
}

// destructuring option-1
// const getCountryHTML = (country) => {
//     const { name, flags } = country;
//     // console.log(name, flags);
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }


// original option
// const getCountryHTML = (country) => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }



loadCountries();