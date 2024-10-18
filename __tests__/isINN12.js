const {isINN12, randomINN12} = require ('..')

test ('basic', () => {
	
	expect (() => isINN12 ('423543534553')).toThrow ()
	expect (() => isINN12 ('635277570473')).toThrow ()
	
	expect (isINN12 ('635277570478')).toBeUndefined ()

	for (let i = 0; i < 1000; i ++) {

		const value = randomINN12 ({pre: ['77', '78']})

		expect (value).toMatch (/^7[78]/)

		expect (isINN12 (value)).toBeUndefined ()

	}

})
