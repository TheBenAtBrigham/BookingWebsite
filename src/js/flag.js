
//npm install cors
//npm start run
//const link = './src/countries.json'

async function loadAndStringThisJSON(filePath)
{ try
  {
  const response = await fetch(filePath);
  if (!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const jsonData = await response.json();
        const jsonString = JSON.stringify(jsonData);
        return jsonString;
    } catch (error) {
        console.error("Could not read or stringify the file:", error);
        return null;
    }
}

loadAndStringThisJSON('./src/countries.json')
    .then(jsonString => {
        if (jsonString) {
            console.log(jsonString);
        }
});

const string = loadAndStringThisJSON

var rows = '';
var jsonData = JSON.stringify(data);
for (var i = 0; i < jsonData.length; i++) {
  var obj = jsonData[i];
  console.log(obj);
  rows += "<tr><td>" + obj.id +"</td><td>" + obj.name +"</td></tr>"
}
document.getElementById("demo").innerHTML = "<tr><th>Id</th><th>Name</th></tr>" + rows;


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
