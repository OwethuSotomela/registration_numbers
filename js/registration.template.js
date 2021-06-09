describe('regPlate', function () {
    it('Should return the message "Not a supported format type"', function () {
        let myTemp = Registration([])
        var carReg = "L 154-896"

        myTemp.setRegi(carReg)

        assert.equal("Format doesn't match the required!", myTemp.getMessage(carReg))
    })
    it('Should return the message "Not a supported format type"', function () {
        let myTemp = Registration([])
        var carReg = "EC 154-89"

        myTemp.setRegi(carReg)

        assert.equal("Format doesn't match the required!", myTemp.getMessage(carReg))
    })
    it('Should return the message "Car registration successfully added"', function () {
        let myTemp = Registration([])
        var carReg = "CA 154-859"

        myTemp.setRegi(carReg)

        assert.equal("Car registration added successfully!", myTemp.getMessage(carReg))
    })
    it('Should return the message "Car registration number already added"', function () {
        let myTemp = Registration([])
        var carReg = "CA 154-859"

        myTemp.setRegi(carReg)
        myTemp.setRegi(carReg)

        assert.equal("Car registration number already entered!", myTemp.getMessage(carReg))
    })
})
describe('setRegi', function () {
    it('Should return the list of registration numbers entered', function () {
        let myTemp = Registration([])
        var carReg = "CA 123-456"
        var carReg1 = "CX 456-258"
        var carReg2 = "CY 587 756"
        var carReg3 = "CW 456-875"
        var carReg4 = "CA 965-256"
        var carReg5 = "CY 789-586"
        var carReg6 = "CX 987-256"

        myTemp.setRegi(carReg)
        myTemp.setRegi(carReg1)
        myTemp.setRegi(carReg2)
        myTemp.setRegi(carReg3)
        myTemp.setRegi(carReg4)
        myTemp.setRegi(carReg5)
        myTemp.setRegi(carReg6)

        assert.deepEqual([carReg, carReg1, carReg2, carReg3, carReg4, carReg5, carReg6], myTemp.getRegi())
        assert.deepEqual(7, myTemp.getRegi().length)
    })
    it('Should return the list of registration numbers entered', function () {
        let myTemp = Registration([])
        var carReg = "CA 123-456"
        var carReg1 = "CX 456-258"
        var carReg2 = "CY 587 756"
        var carReg3 = "CW 456-875"
        var carReg4 = "CA 965-256"
        var carReg5 = "CY 789-586"
        var carReg6 = "CX 987-256"
        var carReg7 = "CW 965-255"
        var carReg8 = "CY 789-546"
        var carReg9 = "CY 987-656"

        myTemp.setRegi(carReg)
        myTemp.setRegi(carReg1)
        myTemp.setRegi(carReg2)
        myTemp.setRegi(carReg3)
        myTemp.setRegi(carReg4)
        myTemp.setRegi(carReg5)
        myTemp.setRegi(carReg6)
        myTemp.setRegi(carReg7)
        myTemp.setRegi(carReg8)
        myTemp.setRegi(carReg9)

        assert.deepEqual([carReg, carReg1, carReg2, carReg3, carReg4, carReg5, carReg6, carReg7, carReg8, carReg9], myTemp.getRegi())
        assert.deepEqual(10, myTemp.getRegi().length)
    })
    it('Should return the first two characters of a registration number in UPPERCASE', function () {
        let myTemp = Registration([])
        var carReg = "cy 254635"
        var carReg = "cy 254635"

        myTemp.setRegi(carReg)

        assert.equal('CY 254635', myTemp.getRegi(carReg))
    })
    it('Should return the first two characters of a registration number in UPPERCASE', function () {
        let myTemp = Registration([])
        var carReg = "cx 539-874"
        var carReg = "cx 539-874"

        myTemp.setRegi(carReg)

        assert.equal('CX 539-874', myTemp.getRegi(carReg))
    })
})
