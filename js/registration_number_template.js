var inputBarElement = document.querySelector(".townBar");
var addBarElement = document.querySelector(".addBar");
var radioBarElement = document.querySelector(".itemTypeRadioBar");
var displayBarElement = document.querySelector(".displayBar");
var errorBarElement = document.querySelector(".errorBar");
var showAllBarElement = document.querySelector(".showAllBar");
var showBarElement = document.querySelector(".showBar");
var resetBarElement = document.querySelector(".resetBar");

var templateSource = document.querySelector(".regTemplate").innerHTML;
var regTemplate = Handlebars.compile(templateSource);

var regStored = [];

if (localStorage['templates']) {
    regStored = JSON.parse(localStorage.getItem('templates'))
} else {
    regStored = [];
}

let regiBar = Registration(regStored)

dsiplayFunBar(regiBar.getRegi())

function dsiplayFunBar(argPassed) {
    displayBarElement.innerHTML = regTemplate({regBar: argPassed})
}
function setOut() {
    setTimeout(function () {
        errorBarElement.innerHTML = ''
    }, 3000)
}
function addRegistration() {
    var inputText = inputBarElement.value

    if (inputText !== "") {
        if (regiBar.setRegi(inputText)) {
            localStorage.setItem('templates', JSON.stringify(regiBar.getRegi()));

            dsiplayFunBar(regiBar.getRegi())
            errorBarElement.classList.remove("errors")
            errorBarElement.classList.add("green")
            errorBarElement.innerHTML = regiBar.getMessage()
        } else {
            errorBarElement.classList.remove("green")
            errorBarElement.classList.add("errors")
            errorBarElement.innerHTML = regiBar.getMessage()
        }
    } else {
        errorBarElement.classList.remove("green")
        errorBarElement.classList.add("errors")
        errorBarElement.innerHTML = "Please enter a valid registration number!"
    }
    inputBarElement.value = ''
    setOut()
}
function forTown() {
    var radioBtnChecked = document.querySelector("input[name='itemType1']:checked");
    if (radioBtnChecked) {
        radioBtnChecked = radioBtnChecked.value
        regiBar.regPlate(radioBtnChecked)
        var array = regiBar.getFilterTown()
        if (array.length != 0) {
            dsiplayFunBar(array)
        } else {
            errorBarElement.classList.remove("green")
            errorBarElement.classList.add("errors")
            errorBarElement.innerHTML = "No registration numbers for this town!"
            dsiplayFunBar(array)
        }

    } else {
        errorBarElement.classList.remove("green")
        errorBarElement.classList.add("errors")
        errorBarElement.innerHTML = "Select the town to show the registration numbers for!"
    } setOut()
}

function removeBarCars() {

    errorBarElement.classList.remove("errors")
    errorBarElement.classList.add("green")
    errorBarElement.innerHTML = "Local storage will be cleared in 5 seconds!"
    setTimeout(function () {
        localStorage.removeItem('templates');
        location.reload()
    }, 5000)
}
showBarElement.addEventListener('click', forTown)
resetBarElement.addEventListener('click', removeBarCars)
addBarElement.addEventListener('click', addRegistration)