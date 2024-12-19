//npm install cors
//npm start run


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

  image.classList.add('flag');
  image.setAttribute("src",countryString.url);
  image.setAttribute("alt",countryString.alt);

  anchor.setAttribute("href",`./info.html?country=${countryString.parameter}`);

  countryName.textContent = countryString.short;

  anchor.appendChild(image);
  anchor.appendChild(countryName);

  scrollBar.appendChild(anchor);
}





const myArray = loadThisJSON('./src/countries.json')




//most important function for pulling JSON information...
fetch('./src/countries.json') // Path to your JSON file

  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON
  })
  .then(data => {



    for (let i = 0; i < data.length; i++) {
      addCountryList(data[i]);
      
    }

  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });
