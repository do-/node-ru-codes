const {isSNILS} = require ('..')

test ('basic', () => {

	expect (() => isSNILS ('11111111111')).toThrow ()
	expect (() => isSNILS ('586 595-917 80')).toThrow ()
	expect (() => isSNILS ('586-595 917 80')).toThrow ()
	expect (() => isSNILS ('586-595-917-80')).toThrow ()
	
	expect (isSNILS ('58659591780')).toBeUndefined ()
	expect (isSNILS ('586-595-917 80')).toBeUndefined ()
	
})
