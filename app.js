//Selectors
const carInput = document.querySelector('.car-input');
const carButton = document.querySelector('.car-button');
const carList = document.querySelector('.car-list');

//Event Listeners
// document.addEventListener('DOMContentLoaded', getCars);
carButton.addEventListener('click', addCar);
carList.addEventListener('click', deleteCar);
//Functions

function addCar(event) {
    //Prevent form from submit
    event.preventDefault();
    //Car DIV
    const carDiv = document.createElement('div');
    carDiv.classList.add('car');
    //Create LI
    const newCar = document.createElement('li');
    newCar.innerText = carInput.value;
    newCar.classList.add('car-item');
    carDiv.appendChild(newCar);
    //Add Car To LocaleStorage
    // saveLocalCars(carInput.value);
    //Add trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    carDiv.appendChild(trashButton);
    //Append to List
    carList.appendChild(carDiv);
    //Clear Car Input Value
    carInput.value = "";
}

function deleteCar(e) {
    const item = e.target;
    //Delete Car
    if (item.classList[0] === 'trash-btn') {
        const car = item.parentElement;
        // removeLocaleCars(car);
        car.remove();

        //Animation
        // car.classList.add("fall");
        // // removeLocaleCars(car);
        // car.addEventListener('transitionend', function () {
        //     car.remove();
        // })
    }
};

// function saveLocalCars(car) {
//     //Check if it exists
//     let cars;
//     if (localStorage.getItem('cars') === null) {
//         cars = [];
//     } else {
//         cars = JSON.parse(localStorage.getItem('cars'));
//     }

//     cars.push(car);
//     localStorage.setItem('cars', JSON.stringify('cars'));
// }

// function getCars() {
//     //Check if it exists
//     let cars;
//     if (localStorage.getItem('cars') === null) {
//         cars = [];
//     } else {
//         cars = JSON.parse(localStorage.getItem('cars'));
//     }
//     cars.forEach(function (car) {
//         //Car DIV
//         const carDiv = document.createElement('div');
//         carDiv.classList.add('car');
//         //Create LI
//         const newCar = document.createElement('li');
//         newCar.innerText = car;
//         newCar.classList.add('car-item');
//         carDiv.appendChild(newCar);
//         //Add trash button
//         const trashButton = document.createElement('button');
//         trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//         trashButton.classList.add('trash-btn');
//         carDiv.appendChild(trashButton);
//         //Append to List
//         carList.appendChild(carDiv);
//     });
// }

// function removeLocaleCars(car) {
//     //Check if it exists
//     let cars;
//     if (localStorage.getItem('cars') === null) {
//         cars = [];
//     } else {
//         cars = JSON.parse(localStorage.getItem('cars'));
//     }
//     const carIndex = car.children[0].innerText;
//     cars.splice(cars.indexOf(carIndex), 1);
//     localStorage.setItem('cars', JSON.stringify(cars));
// }