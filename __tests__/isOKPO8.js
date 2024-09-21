const {isOKPO8, randomOKPO8} = require ('..')

// 7675829...?!

test ('basic', () => {

	expect (() => isOKPO8 ('1111111111')).toThrow ()

	expect (isOKPO8 ('47296611')).toBeUndefined ()

	expect (isOKPO8 ('60419873')).toBeUndefined ()

	for (let i = 0; i < 1000; i ++) {

		const v = randomOKPO8 ()

		expect (isOKPO8 (v)).toBeUndefined ()
	
	}

})
