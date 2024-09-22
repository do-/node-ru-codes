const Check = require ('./Check')

module.exports = class extends Check {

	constructor (totalLength) {

		super (totalLength, 1)

		this.modulus1 = 10

	}

	process (str) {

		this.isToDouble = (this.totalLength & 1) === 0

		super.process (str)

		this.sum = 10 - (this.sum % 10)

	}
	
	processDigit (pos, digit) {

		if (this.isToDouble) digit <<= 1

		if (digit > 9) digit -= 9

		this.sum += digit

		this.isToDouble = !this.isToDouble
	}
		
}