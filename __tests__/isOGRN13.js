const {isOGRN13, randomOGRN13} = require ('..')

test ('basic', () => {
	
	expect (() => isOGRN13 ('5060049620796')).toThrow ()
	expect (() => isOGRN13 ('6160094236029')).toThrow ()
	expect (() => isOGRN13 ('1027700280938')).toThrow ()
	
	expect (isOGRN13 ('1027700280937')).toBeUndefined ()
	for (let i = 0; i < 1000; i ++) expect (isOGRN13 (randomOGRN13 ())).toBeUndefined ()

})
