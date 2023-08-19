const {scalarProduct} = require ('..')

test ('basic', () => {
	
	expect (() => scalarProduct ([1, 2], 12)).toThrow ()
	expect (() => scalarProduct ([1, 2], '123')).toThrow ()
	expect (() => scalarProduct ([1, 2], 'i2')).toThrow ()
	expect (() => scalarProduct ([1, 2], '1?')).toThrow ()
	
	expect (scalarProduct ([1, 2], '12')).toBe (5)

})
