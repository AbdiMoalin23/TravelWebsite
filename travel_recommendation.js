const apiUrl = './travel_recommendation_api.json';

let data;

fetch(apiUrl)
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        console.log('GET Request Result:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function searchDestination() {
    const input = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.innerHTML = '';

    if (input.includes('beach') || input.includes('beaches')) {
        data.beaches.forEach(beach => {
            resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
            resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="${beach.name}">`;
            resultDiv.innerHTML += `<p>${beach.description}</p>`;
        });
    } else if (input.includes('temple') || input.includes('temples')) {
        data.temples.forEach(temple => {
            resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
            resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
            resultDiv.innerHTML += `<p>${temple.description}</p>`;
        });
    } else if (input.includes('country') || input.includes('countries')) {
        data.countries.forEach(country => {
            resultDiv.innerHTML += `<h2>${country.name}</h2>`;
            country.cities.forEach(city => {
                resultDiv.innerHTML += `<h3>${city.name}</h3>`;
                resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="${city.name}">`;
                resultDiv.innerHTML += `<p>${city.description}</p>`;
            });
        });
    } else {
        resultDiv.innerHTML = 'No results found.';
    }
}

function clear (){
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.innerHTML = '';
    
 }
 
const SearchButton = document.getElementById('bttn');
SearchButton.addEventListener('click', searchDestination);

const ClearButton = document.getElementById('clear');
ClearButton.addEventListener('click', clear);

