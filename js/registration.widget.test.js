describe('regPlate', function () {
    it('Should return the message "Not a supported format type"', function () {
        let myPlate = Registration([])
        var carReg = "L 154-896"

        myPlate.setRegi(carReg)

        assert.equal("Format doesn't match the required!", myPlate.getMessage(carReg))
    })
    it('Should return the message "Not a supported format type"', function () {
        let myPlate = Registration([])
        var carReg = "EC 154-89"

        myPlate.setRegi(carReg)

        assert.equal("Format doesn't match the required!", myPlate.getMessage(carReg))
    })
    it('Should return the message "Car registration successfully added"', function () {
        let myPlate = Registration([])
        var carReg = "CA 154-859"

        myPlate.setRegi(carReg)

        assert.equal("Car registration added successfully!", myPlate.getMessage(carReg))
    })
    it('Should return the message "Car registration number already added"', function () {
        let myPlate = Registration([])
        var carReg = "CA 154-859"

        myPlate.setRegi(carReg)
        myPlate.setRegi(carReg)

        assert.equal("Car registration number already entered!", myPlate.getMessage(carReg))
    })
})
describe('setRegi', function () {
    it('Should return the list of registration numbers entered', function () {
        let myPlate = Registration([])
        var carReg = "CA 123-456"
        var carReg1 = "CX 456-258"
        var carReg2 = "CY 587 756"
        var carReg3 = "CW 456-875"
        var carReg4 = "CA 965-256"
        var carReg5 = "CY 789-586"
        var carReg6 = "CX 987-256"

        myPlate.setRegi(carReg)
        myPlate.setRegi(carReg1)
        myPlate.setRegi(carReg2)
        myPlate.setRegi(carReg3)
        myPlate.setRegi(carReg4)
        myPlate.setRegi(carReg5)
        myPlate.setRegi(carReg6)

        assert.deepEqual([carReg, carReg1, carReg2, carReg3, carReg4, carReg5, carReg6], myPlate.getRegi())
        assert.deepEqual(7, myPlate.getRegi().length)
    })
    it('Should return the list of registration numbers entered', function () {
        let myPlate = Registration([])
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

        myPlate.setRegi(carReg)
        myPlate.setRegi(carReg1)
        myPlate.setRegi(carReg2)
        myPlate.setRegi(carReg3)
        myPlate.setRegi(carReg4)
        myPlate.setRegi(carReg5)
        myPlate.setRegi(carReg6)
        myPlate.setRegi(carReg7)
        myPlate.setRegi(carReg8)
        myPlate.setRegi(carReg9)

        assert.deepEqual([carReg, carReg1, carReg2, carReg3, carReg4, carReg5, carReg6, carReg7, carReg8, carReg9], myPlate.getRegi())
        assert.deepEqual(10, myPlate.getRegi().length)
    })
    it('Should return the first two characters of a registration number in UPPERCASE', function () {
        let myPlate = Registration([])
        var carReg = "cy 254635"
        var carReg = "cy 254635"

        myPlate.setRegi(carReg)

        assert.equal('CY 254635', myPlate.getRegi(carReg))
    })
    it('Should return the first two characters of a registration number in UPPERCASE', function () {
        let myPlate = Registration([])
        var carReg = "cx 539-874"
        var carReg = "cx 539-874"

        myPlate.setRegi(carReg)

        assert.equal('CX 539-874', myPlate.getRegi(carReg))
    })
})
