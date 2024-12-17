const queryString = window.location.search;
let objectString = queryString.split('=')[1];
console.log(queryString, objectString);


async function countryDisplayInfo(countryString)
{
  const placeInfo = document.querySelector(".place-info");

  const line1 = document.createElement("div");
  const line2 = document.createElement("div");
  const line3 = document.createElement("div");


  line1.classList.add('line');
  line2.classList.add('line');
  line3.classList.add('line');

  const image = document.createElement('img');
  const countryName = document.createElement('h1');
  const countryStatus = document.createElement('p');
  const countryLoc = document.createElement('p');

  const countryInfo = document.createElement('p');
  
  
 
  image.classList.add('flag');
  image.setAttribute("src",countryString.url);
  image.setAttribute("alt",countryString.alt);

  for (let i = 0; i < countryString.img.length; i++){
    let countryImage = document.createElement('img');
    //console.log(countryString.img[i])
    countryImage.classList.add('flag');
    countryImage.setAttribute("src",countryString.img[i].url);
    countryImage.setAttribute("alt",countryString.img[i].alt);
    line3.appendChild(countryImage);
  }

  //set information for
  countryName.textContent = countryString.name;
  countryStatus.textContent = `Political status: ${countryString.status}`;
  countryLoc.textContent = `Region: ${countryString.region}`;
  countryInfo.textContent = countryString.info;

  line1.appendChild(image);
  line1.appendChild(countryName);

  line2.appendChild(countryLoc);
  line2.appendChild(countryStatus);
  

  placeInfo.appendChild(line1);
  placeInfo.appendChild(line2);
  placeInfo.appendChild(countryInfo);
  placeInfo.appendChild(line3);
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
      if(data[i].parameter == objectString){
        countryDisplayInfo(data[i])
      }
    }
    console.log(countryNames); 

    // Access data elements like data.key1, data.key2, etc.
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });




