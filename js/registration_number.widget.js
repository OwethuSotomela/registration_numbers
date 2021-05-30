function Registration(local) {

    var resList = local;
    var message = "";
    var filterTown = []

    function setRegi(carReg){

        // var regx = /[A-Z]{2}\s[0-9]{6}$/.test(carReg)
        // var regx = /[A-Z]{2}\s[0-9]{3}\s[0-9]{3}$/.test(carReg)
        var regx = /[A-Z]{2}\s[0-9]{6}$/.test(carReg)

        console.log(regx)

        if (!resList.includes(carReg)){
            resList.push(carReg)
            message = "Car registration added successfully!";
            return true;
        } else {
            message = "Car registration number already entered!";
            return false;
        }
    }

    function regPlate(regPlate){
        filterTown = []
        for(var i=0; i<resList.length; i++){
            if(resList[i].startsWith(regPlate)){
                filterTown.push(resList[i])
            }
        }
        // return filterTown
    }

    function getFilterTown(){
        return filterTown;
    }

    function getRegi() {
        return resList;
    }

    function getMessage(){
        return message;
    }

    return {
        Registration,
        setRegi,
        regPlate,
        getRegi,
        getMessage,
        getFilterTown,
    }
}


