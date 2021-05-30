var inputTextElement = document.querySelector(".townName");
var addButtonElement = document.querySelector(".addButton");
var radioButtonsElement = document.querySelector(".itemTypeRadio1");
var displayElement = document.querySelector(".outPut");
var errorsElement = document.querySelector(".errors");
var showAllElement = document.querySelector(".showAllButton");
var showElement = document.querySelector(".showButton");
var resetBtnElement = document.querySelector(".resetButton");

var regStored = [];

if(localStorage['plates']){
    regStored = JSON.parse(localStorage.getItem('plates'))
} else{
    regStored = [];
}


let regi = Registration(regStored)

dsiplayFun(regi.getRegi())

function dsiplayFun(argPassed) {

    let element = document.getElementById("myList");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    for(var i=0; i<argPassed.length; i++){
        var node = document.createElement("li");
        var textnode = document.createTextNode(argPassed[i]);
        node.appendChild(textnode);
        element.appendChild(node);
    }

    
}

function addRegistration(){
    var inputText = inputTextElement.value
    
    if (inputText !== ""){
        if(regi.setRegi(inputText)){
            localStorage.setItem('plates', JSON.stringify(regi.getRegi()));
    
            dsiplayFun(regi.getRegi())
            errorsElement.classList.remove("errors")
            errorsElement.classList.add("green")
            errorsElement.innerHTML = regi.getMessage()
        } else {
            errorsElement.innerHTML = regi.getMessage()
        }
    }else{
        errorsElement.innerHTML = "Please enter a valid registration number!"
    }
   
}

function forTown(){
    var radioBtnChecked = document.querySelector("input[name='itemType1']:checked");
    if(radioBtnChecked){
        radioBtnChecked = radioBtnChecked.value
        regi.regPlate(radioBtnChecked)
        var array = regi.getFilterTown()
        if(array.length !=0){
            dsiplayFun(array)
        } else {
            errorsElement.innerHTML = "No registration plates for this town!"
            dsiplayFun(array)
        }

    }else{
        errorsElement.innerHTML = "Select town first!"
    }
}

showElement.addEventListener('click', forTown)

addButtonElement.addEventListener('click', addRegistration )
