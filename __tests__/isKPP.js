const {isKPP, randomKPP} = require ('..')

test ('basic', () => {
	
	expect (() => isKPP (771401001)).toThrow ()
	expect (() => isKPP ('7714010011')).toThrow ()
	expect (() => isKPP ('7714010O1')).toThrow ()
	expect (() => isKPP ('7714010?1')).toThrow ()
	
	expect (isKPP ('771401001')).toBeUndefined ()
		
	expect (isKPP (randomKPP ())).toBeUndefined ()
	expect (randomKPP ({pre: ['77', '50']})).toMatch (/^(50|77)/)

})
