const {isOGRN15} = require ('..')

test ('basic', () => {

	expect (() => isOGRN15 ('304500116000154')).toThrow ()
	
	expect (isOGRN15 ('304500116000157')).toBeUndefined ()

})
