var inputTextElement = document.querySelector(".townName");
var addButtonElement = document.querySelector(".addButton");
var radioButtonsElement = document.querySelector(".itemTypeRadio1");
var displayElement = document.querySelector(".outPut");
var errorsElement = document.querySelector(".errors");
var showAllElement = document.querySelector(".showAllButton");
var showElement = document.querySelector(".showButton");
var resetBtnElement = document.querySelector(".resetButton");

var regStored = [];

if (localStorage['plates']) {
    regStored = JSON.parse(localStorage.getItem('plates'))
} else {
    regStored = [];
}


let regi = Registration(regStored)

dsiplayFun(regi.getRegi())

function dsiplayFun(argPassed) {

    let element = document.getElementById("myList");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    for (var i = 0; i < argPassed.length; i++) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(argPassed[i]);
        node.appendChild(textnode);
        element.appendChild(node);
    }
}

function setOut() {
    setTimeout(function () {
        errorsElement.innerHTML = ''
    }, 3000)
}



function addRegistration() {
    var inputText = inputTextElement.value


    if (inputText !== "") {
        if (regi.setRegi(inputText)) {
            localStorage.setItem('plates', JSON.stringify(regi.getRegi()));

            dsiplayFun(regi.getRegi())
            errorsElement.classList.remove("errors")
            errorsElement.classList.add("green")
            errorsElement.innerHTML = regi.getMessage()
        } else {
            errorsElement.classList.remove("green")
            errorsElement.classList.add("errors")
            errorsElement.innerHTML = regi.getMessage()
            }
        } else {
            errorsElement.classList.remove("green")
            errorsElement.classList.add("errors")
            errorsElement.innerHTML = "Please enter a valid registration number!"
        }
            inputTextElement.value = ''
            setOut()
}

function forTown() {
    var radioBtnChecked = document.querySelector("input[name='itemType1']:checked");
    if (radioBtnChecked) {
        radioBtnChecked = radioBtnChecked.value
        regi.regPlate(radioBtnChecked)
        var array = regi.getFilterTown()
        if (array.length != 0) {
            dsiplayFun(array)
        } else {
            errorsElement.classList.remove("green")
            errorsElement.classList.add("errors")
            errorsElement.innerHTML = "No registration plates for this town!"
            dsiplayFun(array)
        }

    } else {
        errorsElement.classList.remove("green")
        errorsElement.classList.add("errors")
        errorsElement.innerHTML = "Select town first!"
    } setOut()
}


function removeCars() {

errorsElement.innerHTML = "Local storage will be cleared in 1 second!"
    setTimeout(function () {
        localStorage.clear()
        location.reload()
    }, 1000)
}
showElement.addEventListener('click', forTown)
resetBtnElement.addEventListener('click', removeCars)
addButtonElement.addEventListener('click', addRegistration)

