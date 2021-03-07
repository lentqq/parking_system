//Selectors
const carInput = document.querySelector('.car-input');
const carButton = document.querySelector('.car-button');
const carList = document.querySelector('.car-list');

//Event Listeners
carButton.addEventListener('click', addCar);

//Functions

function addCar(event) {
    //Prevent form from submit
    event.preventDefault();
    //Car DIV
    const carDiv = document.createElement('div');
    carDiv.classList.add('car');
    //Create LI
    const newCar = document.createElement('li');
    newCar.innerText = 'Hey Niksy';
    newCar.classList.add('car-item');
    carDiv.appendChild(newCar);
    //Add trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    carDiv.appendChild(trashButton);
    //Append to List
    carList.appendChild(carDiv);
}