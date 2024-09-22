const {isBankCard} = require ('..')

test ('basic', () => {

	expect (isBankCard ('5062821234567892')).toBeUndefined ()
	expect (() => isBankCard ('5062821734567892')).toThrow ()
	

})