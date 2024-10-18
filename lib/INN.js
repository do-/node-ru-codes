const ScalarProduct = require ('./ScalarProduct')

const PRE = []; for (let i = 1; i < 90; i ++) PRE.push (String (i).padStart (2, '0'))

const COEF = new Uint8Array ([3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8])

const inn = skip => class extends ScalarProduct {
	
	constructor () {
		
		super (COEF.slice (skip))
	
	}

	randomValue (options) {

		if (!options.pre) options.pre = PRE

		return super.randomValue (options)
		
	}

}

module.exports = {

	INN_10   : inn (2),
	INN_12_1 : inn (1),
	INN_12_2 : inn (0),
	
}