const {isBankCard, randomBankCard} = require ('..')

const PRE = '2200'

test ('basic', () => {

	expect (isBankCard ('5062821234567892')).toBeUndefined ()
	expect (isBankCard ('5062 8212 3456 7892')).toBeUndefined ()
	expect (isBankCard (randomBankCard ())).toBeUndefined ()
	
	expect (() => isBankCard ('5062821734567892')).toThrow ()
	expect (() => isBankCard ('5062 821234567892')).toThrow ()
	expect (() => isBankCard ('5062_8212_3456_7892')).toThrow ()

})

test ('rnd', () => {

	const v = randomBankCard ({pre: [PRE]})

	expect (v).toHaveLength (16)
	expect (v.slice (0, 4)).toBe (PRE)
	expect (isBankCard (v)).toBeUndefined ()

})

test ('rnd', () => {

	const v = randomBankCard ({pre: [PRE], format: true})

	expect (v).toHaveLength (19)
	expect (v.slice (0, 4)).toBe (PRE)
	expect (isBankCard (v)).toBeUndefined ()

})