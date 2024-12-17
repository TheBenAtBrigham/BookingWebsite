const queryString = window.location.search;
let objectString = queryString.split('=')[1];
console.log(queryString, objectString);


async function countryDisplayInfo(countryString)
{
  const placeInfo = document.querySelector(".place-info");

  const line = document.createElement("div");

  line.classList.add('.line')

  const image = document.createElement('img');
  const countryName = document.createElement('h1');

  image.classList.add('flag')
  image.setAttribute("src",countryString.url);
  image.setAttribute("alt",countryString.alt);

  countryName.textContent = countryString.name;

  line.appendChild(image);
  line.appendChild(countryName);

  placeInfo.appendChild(line);
}



//Get JSON file
fetch('./src/countries.json') // Path to your JSON file

  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON
  })
  .then(data => {
    // Work with your JSON data here
    const names = data.map(item => item.name);
    console.log(names);

    const countryNames = [];


    for (let i = 0; i < data.length; i++) {
      countryNames.push(data[i].short); // Accessing the 'size' value and pushing it to the array
      if(data[i].short == objectString){
        countryDisplayInfo(data[i])
        console.log(i);
      }
    }
    console.log(countryNames); 

    // Access data elements like data.key1, data.key2, etc.
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });




