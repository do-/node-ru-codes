const {isOGRN15, randomOGRN15} = require ('..')

test ('basic', () => {

	expect (() => isOGRN15 ('304500116000154')).toThrow ()
	
	expect (isOGRN15 ('304500116000157')).toBeUndefined ()
	expect (isOGRN15 (randomOGRN15 ())).toBeUndefined ()

})
