//import jsonData from 'countries.json' assert {type : 'json'};
//npm start run
//console.log(jsonData);
//JSON.parse();

//npm install cors
//npm start run

fetch('./src/countries.json') // Path to your JSON file
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON
  })
  .then(data => {
    // Work with your JSON data here
    console.log(data);
    // Access data elements like data.key1, data.key2, etc.
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });

/*async function getData() {
  const url =
    "https://github.com/TheBenAtBrigham/BookingWebsite/blob/master/countries.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
*/
const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
