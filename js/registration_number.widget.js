function Registration(local) {

    var regList = local;
    var message = "";
    var filterTown = []

    function setRegi(carReg){

        carReg = carReg.toUpperCase();

        var regx = /[A-Z]{2}\s[0-9]{6}$/.test(carReg)
        var regx1 = /[A-Z]{2}\s[0-9]{3}\s[0-9]{3}$/.test(carReg)
        var regx2 = /[A-Z]{2}\s[0-9]{3}\-[0-9]{3}$/.test(carReg)

        if(!regx && !regx1 && !regx2){
            message = "Format doesn't match the required!"
            return false;
        } else{
            if (!regList.includes(carReg)){
                regList.push(carReg)
                message = "Car registration added successfully!";
                return true;
            } else {
                message = "Car registration number already entered!";
                return false;
            }
        }
    }
    function regPlate(regPlate){
        filterTown = []
        for(var i=0; i<regList.length; i++){
            if(regList[i].startsWith(regPlate)){
                filterTown.push(regList[i])
            }
        }
    }
    function getFilterTown(){
        return filterTown;
    }
    function getRegi() {
        return regList;
    }
    function getMessage(){
        return message;
    }
    function regCounter(){
        return regList.length;
    }
    return {
        Registration,
        setRegi,
        regPlate,
        getRegi,
        getMessage,
        getFilterTown,
        regCounter,
    }
}


