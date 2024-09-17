const ScalarProduct = require ('./ScalarProduct')

const COEF = new Uint8Array ([3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8])

const inn = skip => class extends ScalarProduct {constructor () {super (COEF.slice (skip))}}

module.exports = {

	INN_10   : inn (2),
	INN_12_1 : inn (1),
	INN_12_2 : inn (0),
	
}