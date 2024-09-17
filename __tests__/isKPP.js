const {isKPP, randomKPP} = require ('..')

test ('basic', () => {
	
	expect (() => isKPP ('7714010011')).toThrow ()
	
	expect (isKPP ('771401001')).toBeUndefined ()

	expect (isKPP (randomKPP ())).toBeUndefined ()

})
