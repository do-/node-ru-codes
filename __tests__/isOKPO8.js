const {isOKPO8, randomOKPO8} = require ('..')

test ('basic', () => {

	expect (() => isOKPO8 ('1111111111')).toThrow ()

	expect (isOKPO8 ('47296611')).toBeUndefined ()

	expect (isOKPO8 ('60419873')).toBeUndefined ()

	expect (isOKPO8 (randomOKPO8 ())).toBeUndefined ()

})
