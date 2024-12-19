const main = document.querySelector(".requests");




async function getLists()
{
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    items[key] = JSON.parse(value);
        
    let numberIndex = key.split(':')[1];

    

            
    const placeInfo = document.createElement("div");
    const div = document.createElement("div");
    let deleteButton = document.createElement("input");
    deleteButton.setAttribute("type","submit");
    deleteButton.setAttribute("value","Delete");
    deleteButton.setAttribute("onclick","deleteElement(event)");

    placeInfo.classList.add('request');

    let countryList = document.createElement("h2");

    let emailList = document.createElement("p");
    let phoneList = document.createElement("p");
    let dateTimeList = document.createElement("p");
    let contactAt = document.createElement("p");

    for (let i = 0; i < data.length; i++) {
        if (data[i].parameter === items[key].country)
        {
            countryList.textContent = `${numberIndex}. ${data[i].short}`;
        }
        
    }

    emailList.textContent = `Email: ${items[key].email}`;
    //countryList.textContent = `${numberIndex}. ${items[key].country}`;
    phoneList.textContent = `Phone: ${items[key].phone}`;
    dateTimeList.textContent = `${items[key].time} on ${items[key].date}`;
    contactAt.textContent = `Contact: ${items[key].contact}`
            
    placeInfo.appendChild(countryList);
    div.appendChild(emailList);
    div.appendChild(phoneList);
    div.appendChild(dateTimeList);
    div.appendChild(contactAt);

    placeInfo.appendChild(div);
    placeInfo.appendChild(deleteButton);

    main.appendChild(placeInfo);
            

    }
}


fetch('./src/countries.json') // Path to your JSON file

  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON
  })
  .then(data => {
    // Work with your JSON data here
    getLists(data);
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });



        
const x = document.getElementById("location");

        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
        }

        function showPosition(position) {
          x.innerHTML = "Your Latitude is: " + position.coords.latitude +
          " and Longitude is: " + position.coords.longitude;
        }
        getLocation();
        




