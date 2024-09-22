const ScalarProduct = require ('./ScalarProduct')
const CH_ZERO = '0'.charCodeAt (0)

const COEF = new Uint8Array ([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9])

class OKPO extends ScalarProduct {

	constructor (valueLength) {

		super (COEF.slice (0, valueLength))

		this.scalarProduct2 = new ScalarProduct (COEF.slice (2, valueLength + 2))

	}

	verify (str) {

		super.verify (str.padStart (this.totalLength, '0'))

	}

	adjustSum (str) {

		const {scalarProduct2} = this

		scalarProduct2.process (str)

		this.sum = scalarProduct2.sum % this.modulus1 % this.modulus2

	}

	random (options) {

		while (true) {

			const v = super.random (options)

			if (v.charCodeAt (0) !== CH_ZERO) return v

			if (v.charCodeAt (1) !== CH_ZERO) return v.slice (1)

			this.sum = 0

		}

	}

}

const okpo = valueLength => class extends OKPO {constructor () {super (valueLength)}}

module.exports = {

	OKPO_8  : okpo (7),
	OKPO_10 : okpo (9),
	
}