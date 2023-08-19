const {isINN12} = require ('..')

test ('basic', () => {
	
	expect (() => isINN12 ('423543534553')).toThrow ()
	expect (() => isINN12 ('635277570473')).toThrow ()
	
	expect (isINN12 ('635277570478')).toBeUndefined ()

})
