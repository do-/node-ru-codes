const Check = require ('./Check')

module.exports = class extends Check {

	constructor (coefficients, checkSumLength = 1) {

		super (coefficients.length + checkSumLength, checkSumLength)

		this.coefficients = coefficients

	}

	processDigit (pos, digit) {

		this.sum += digit * this.coefficients [pos]

	}
		
}