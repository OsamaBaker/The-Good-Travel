'use strict';

// creating allPlaces variables for the places to be push into this array
let allPlaces = [];

// Constructor Function
function Place(placeName, tripPlace, typeOfTransport){
    this.placeName = placeName,
    this.tripPlace = tripPlace,
    this.typeOfTransport = typeOfTransport,

    allPlaces.push(this),

    setItem()
}

// setting item into localStorage
function setItem(){
    let setArr = JSON.stringify(allPlaces);
    localStorage.setItem('place', setArr);
}

// getting form and result div
let form = document.getElementById('form');
let resultsDiv = document.getElementById('results');

// adding event listener to the form
form.addEventListener('submit', submitter);

// creating the submitter function
function submitter(event){
    event.preventDefault();

    let placeName = event.target.placeName.value;
    let tripPlace = event.target.tripPlace.value;
    let typeOfTransport = event.target.typeOfTransport.value;

    // creating new Instance
    let newPlace = new Place(placeName, tripPlace, typeOfTransport);

    newPlace.render();
}

// render function
Place.prototype.render = function (){
    // if hawaii is selected
    if(this.tripPlace === 'hawaii'){
    let image = document.createElement('img');
    resultsDiv.appendChild(image);
    image.src = 'img/HAWAII.jpg'

    let placeName = document.createElement('p');
    resultsDiv.appendChild(placeName);
    placeName.textContent = `Place Name: ${this.placeName}`;

    let tripPlace = document.createElement('p');
    resultsDiv.appendChild(tripPlace);
    tripPlace.textContent = `Trip Place: ${this.tripPlace}`

    let typeOfTransport = document.createElement('p');
    resultsDiv.appendChild(typeOfTransport);
    typeOfTransport.textContent = `Type Of Transport: ${this.typeOfTransport}`;

    let x = document.createElement('span');
    resultsDiv.appendChild(x);
    x.textContent = 'x'
    x.classList = 'close'
    

    let hrLine = document.createElement('hr')
    resultsDiv.appendChild(hrLine);

    // if london is selected
    } else if (this.tripPlace === 'london'){

        let image = document.createElement('img');
    resultsDiv.appendChild(image);
    image.src = 'img/LONDON.png'

    let placeName = document.createElement('p');
    resultsDiv.appendChild(placeName);
    placeName.textContent = `Place Name: ${this.placeName}`;

    let tripPlace = document.createElement('p');
    resultsDiv.appendChild(tripPlace);
    tripPlace.textContent = `Trip Place: ${this.tripPlace}`

    let typeOfTransport = document.createElement('p');
    resultsDiv.appendChild(typeOfTransport);
    typeOfTransport.textContent = `Type Of Transport: ${this.typeOfTransport}`;

    let hrLine = document.createElement('hr')
    resultsDiv.appendChild(hrLine);

    // if paris is selected    
    } else if(this.tripPlace === 'paris'){

        let image = document.createElement('img');
    resultsDiv.appendChild(image);
    image.src = 'img/PARIS.png'

    let placeName = document.createElement('p');
    resultsDiv.appendChild(placeName);
    placeName.textContent = `Place Name: ${this.placeName}`;

    let tripPlace = document.createElement('p');
    resultsDiv.appendChild(tripPlace);
    tripPlace.textContent = `Trip Place: ${this.tripPlace}`

    let typeOfTransport = document.createElement('p');
    resultsDiv.appendChild(typeOfTransport);
    typeOfTransport.textContent = `Type Of Transport: ${this.typeOfTransport}`;

    let hrLine = document.createElement('hr')
    resultsDiv.appendChild(hrLine);
    }
    // if italy is selected
    else if(this.tripPlace === 'italy'){
        
        let image = document.createElement('img');
    resultsDiv.appendChild(image);
    image.src = 'img/ITALY.png'

    let placeName = document.createElement('p');
    resultsDiv.appendChild(placeName);
    placeName.textContent = `Place Name: ${this.placeName}`;

    let tripPlace = document.createElement('p');
    resultsDiv.appendChild(tripPlace);
    tripPlace.textContent = `Trip Place: ${this.tripPlace}`

    let typeOfTransport = document.createElement('p');
    resultsDiv.appendChild(typeOfTransport);
    typeOfTransport.textContent = `Type Of Transport: ${this.typeOfTransport}`;

    let hrLine = document.createElement('hr')
    resultsDiv.appendChild(hrLine);
    }

    // if slovakia is selected    
    else if(this.tripPlace === 'slovakia'){

        let image = document.createElement('img');
    resultsDiv.appendChild(image);
    image.src = 'img/SLOVAKIA.png'

    let placeName = document.createElement('p');
    resultsDiv.appendChild(placeName);
    placeName.textContent = `Place Name: ${this.placeName}`;

    let tripPlace = document.createElement('p');
    resultsDiv.appendChild(tripPlace);
    tripPlace.textContent = `Trip Place: ${this.tripPlace}`

    let typeOfTransport = document.createElement('p');
    resultsDiv.appendChild(typeOfTransport);
    typeOfTransport.textContent = `Type Of Transport: ${this.typeOfTransport}`;

    let hrLine = document.createElement('hr')
    resultsDiv.appendChild(hrLine);
    }

    // if malaysia is selected    
    else if(this.tripPlace === 'malaysia'){

        let image = document.createElement('img');
    resultsDiv.appendChild(image);
    image.src = 'img/MALAYSIA.png'

    let placeName = document.createElement('p');
    resultsDiv.appendChild(placeName);
    placeName.textContent = `Place Name: ${this.placeName}`;

    let tripPlace = document.createElement('p');
    resultsDiv.appendChild(tripPlace);
    tripPlace.textContent = `Trip Place: ${this.tripPlace}`

    let typeOfTransport = document.createElement('p');
    resultsDiv.appendChild(typeOfTransport);
    typeOfTransport.textContent = `Type Of Transport: ${this.typeOfTransport}`;

    let hrLine = document.createElement('hr')
    resultsDiv.appendChild(hrLine);
    }
}

// function to get item from localStorage
function getItem(){
    let data = localStorage.getItem('place');
    let getArr = JSON.parse(data);

    if(getArr){
        for(let i = 0; i < getArr.length; i++){
            new Place(getArr[i].placeName, getArr[i].tripPlace, getArr[i].typeOfTransport)
        }
    }
}

// getting item from localStorage
getItem();

// rendering the places that are in local Storage
for(let i = 0; i < allPlaces.length; i++){
    allPlaces[i].render();
}