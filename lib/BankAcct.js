const Check = require ('./Check')
const ScalarProduct = require ('./ScalarProduct')

const COEF  = new Uint8Array ([7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1])
const COEF0 = new Uint8Array ([7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 0, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1])

class BankAcct extends ScalarProduct {

	constructor () {

		super (COEF, 0)

		this.modulus1 = 10

		this.bic = new Check (9)

	}

	verify (str, bic) {

		this.bic.verify (bic)

		super.verify (bic.slice (-3) + str)

	}

	random (bic, options) {

		this.bic.verify (bic)

		this.valueLength = 20

		const str = super.randomValue (options), fullStr = bic.slice (-3) + str

		this.coefficients = COEF0 
		this.valueLength = COEF0.length

		this.process (fullStr)		

		return str.slice (0, 8) + ((this.sum % 10) * 3) % 10 + str.slice (9)

	}

}

module.exports = BankAcct