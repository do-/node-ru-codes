const {isSNILS, randomSNILS} = require ('..')

test ('basic', () => {

	expect (() => isSNILS ('11111111111')).toThrow ()
	expect (() => isSNILS ('586 595-917 80')).toThrow ()
	expect (() => isSNILS ('586-595 917 80')).toThrow ()
	expect (() => isSNILS ('586-595-917-80')).toThrow ()
	
	expect (isSNILS ('58659591780')).toBeUndefined ()
	expect (isSNILS ('586-595-917 80')).toBeUndefined ()

	for (let i = 0; i < 1000; i ++) {
		const snils = randomSNILS () 
		expect (snils).toHaveLength (11)
		expect (isSNILS (snils)).toBeUndefined ()
	}

	for (let i = 0; i < 1000; i ++) {
		const snils = randomSNILS ({format: true}) 
		expect (snils).toHaveLength (14)
		expect (isSNILS (snils)).toBeUndefined ()
	}

})
