const {isBankAcct, randomBankAcct} = require ('..')

const BIC = '044525593', PRE = '40702810'

test ('basic', () => {

	expect (isBankAcct (PRE + '801400016513', BIC)).toBeUndefined ()

	const a = randomBankAcct (BIC, {pre: [PRE]})

	for (let i = 0; i < 1000; i ++) expect (isBankAcct (a, BIC)).toBeUndefined ()

})