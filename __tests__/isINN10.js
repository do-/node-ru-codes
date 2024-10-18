const {isINN10, randomINN10} = require ('..')

test ('basic', () => {
	
	expect (() => isINN10 ('1111111111')).toThrow ()
	
	expect (isINN10 ('1111111117')).toBeUndefined ()
	expect (isINN10 ('6449013711')).toBeUndefined ()

	for (let i = 0; i < 1000; i ++) {

		const value = randomINN10 ()

		expect (value).not.toMatch (/^00/)
		
		expect (isINN10 (value)).toBeUndefined ()
	
	}

})
