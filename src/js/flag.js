
//npm install cors
//npm start run

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

async function loadThisJSON(filePath)
{ try
  {
  const response = await fetch(filePath);
  if (!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const jsonData = await response.json();
        const jsonArray = jsonData;
        return jsonArray;
    } catch (error) {
        console.error("Could not read or stringify the file:", error);
        return null;
    }
}



//get and set paragraphs and images
async function addCountryList(countryString)
{
  const scrollBar = document.querySelector(".scroll-bar");
  const anchor = document.createElement('a');
  const image = document.createElement('img');
  const countryName = document.createElement('p');

  image.classList.add('flag')
  image.setAttribute("src",countryString.url)
  image.setAttribute("alt",countryString.alt);

  countryName.textContent = "Liberia"

  anchor.appendChild(image);
  anchor.appendChild(countryName);

  scrollBar.appendChild(anchor);
}

//var rows = '';
const str = loadAndStringThisJSON('./src/countries.json')

const myArray = loadThisJSON('./src/countries.json')

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
  console.log(myArray[i]);
  console.log(myArray[i][1]);
  console.log(myArray[i].short, myArray[i].url);
  addCountryList(myArray[i]);
  //rows += "<tr><td>" + obj.id +"</td><td>" + obj.name +"</td></tr>"
}
//document.getElementById("demo").innerHTML = "<tr><th>Id</th><th>Name</th></tr>" + rows;



const scrollBar = document.querySelector(".scroll-bar");
const anchor = document.createElement('a');
const image = document.createElement('img');
const countryName = document.createElement('p');

image.classList.add('flag')
image.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/2560px-Flag_of_Liberia.svg.png")
image.setAttribute("alt","Liberian Flag");

countryName.textContent = "Liberia"

anchor.appendChild(image);
anchor.appendChild(countryName);

scrollBar.appendChild(anchor);

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
