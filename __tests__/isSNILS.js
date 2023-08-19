const {isSNILS} = require ('..')

test ('basic', () => {

	expect (() => isSNILS ('11111111111')).toThrow ()
	
	expect (isSNILS ('58659591780')).toBeUndefined ()

})
