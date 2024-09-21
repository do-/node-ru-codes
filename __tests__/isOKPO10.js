const {isOKPO10, randomOKPO10} = require ('..')

test ('basic', () => {

	expect (() => isOKPO8 ('1194265277')).toThrow ()
	expect (() => isOKPO8 ('194265277')).toThrow ()

	expect (isOKPO10 ('0194265277')).toBeUndefined ()

	expect (isOKPO10 (randomOKPO10 ())).toBeUndefined ()

})
