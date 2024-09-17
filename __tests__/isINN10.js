const {isINN10, randomINN10} = require ('..')

test ('basic', () => {
	
	expect (() => isINN10 ('1111111111')).toThrow ()
	
	expect (isINN10 ('1111111117')).toBeUndefined ()
	expect (isINN10 ('6449013711')).toBeUndefined ()

	expect (isINN10 (randomINN10 ())).toBeUndefined ()

})
