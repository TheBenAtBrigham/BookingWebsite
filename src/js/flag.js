
//npm install cors
//npm start run
link = "./src/countries.json"

fetch(link) // Path to your JSON file
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

var jsonData = JSON.stringify(data);
for (var i = 0; i < jsonData.length; i++) {
  var obj = jsonData[i];
  console.log(obj);
  //rows += "<tr><td>" + obj.id +"</td><td>" + obj.name +"</td></tr>"
}
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
