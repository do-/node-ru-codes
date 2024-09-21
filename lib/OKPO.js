const ScalarProduct = require ('./ScalarProduct')

const COEF = new Uint8Array ([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9])

class OKPO extends ScalarProduct {

	constructor (valueLength) {

		super (COEF.slice (0, valueLength))

		this.scalarProduct2 = new ScalarProduct (COEF.slice (2, valueLength + 2))

	}

	adjustSum (sum) {

		const {scalarProduct2} = this

		scalarProduct2.process (sum)

		this.sum = scalarProduct2.sum % this.modulus1

	}

}

const okpo = valueLength => class extends OKPO {constructor () {super (valueLength)}}

module.exports = {

	OKPO_8  : okpo (7),
	OKPO_10 : okpo (9),
	
}