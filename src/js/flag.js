//npm install cors
//npm start run

//AIzaSyAbu9S5cLdwk18FUGNPoZEQLMT5xFBj610

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
  image.setAttribute("src",countryString.url);
  image.setAttribute("alt",countryString.alt);

  anchor.setAttribute("href",`./info.html?country=${countryString.parameter}`);

  countryName.textContent = countryString.short;

  anchor.appendChild(image);
  anchor.appendChild(countryName);

  scrollBar.appendChild(anchor);
}





const myArray = loadThisJSON('./src/countries.json')
console.log(myArray);




//most important function for pulling JSON information...
fetch('./src/countries.json') // Path to your JSON file

  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON
  })
  .then(data => {
    // Work with your JSON data here
    //const names = data.map(item => item.name);

    const countryNames = [];


    for (let i = 0; i < data.length; i++) {
      countryNames.push(data[i].short); // Accessing the 'size' value and pushing it to the array
      addCountryList(data[i]);
      
    }
    console.log(countryNames); 

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
