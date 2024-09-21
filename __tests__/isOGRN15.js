const {isOGRN15, randomOGRN15} = require ('..')

test ('basic', () => {

	expect (() => isOGRN15 ('304500116000154')).toThrow ()
	
	expect (isOGRN15 ('304500116000157')).toBeUndefined ()
	for (let i = 0; i < 1000; i ++) expect (isOGRN15 (randomOGRN15 ())).toBeUndefined ()

})
