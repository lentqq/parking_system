//Selectors
const carInput = document.querySelector('.car-input');
const carButton = document.querySelector('.car-button');
const carList = document.querySelector('.car-list');

//Event Listeners
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
        car.remove();

        //Animation
        // car.classList.add("fall");
        // car.addEventListener('transitionend', function () {
        //     car.remove();
        // })
    }
};