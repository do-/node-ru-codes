const Check = require ('./Check')

class Horner extends Check {

	constructor (totalLength) {

		super (totalLength, 1)

	}

	processDigit (pos, digit) {
		
		this.sum *= 10

		this.sum += digit

	}
		
}

const horner = length => class OGRN_15 extends Horner {constructor () {super (length)}}

module.exports = {
	OGRN_13: horner (13),
	OGRN_15: horner (15),
}