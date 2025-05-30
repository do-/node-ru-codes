const Check = require ('./lib/Check')
const {OGRN_13, OGRN_15} = require ('./lib/Horner')
const {INN_10, INN_12_2, INN_12_1} = require ('./lib/INN')
const SNILS = require ('./lib/SNILS')
const BankAcct = require ('./lib/BankAcct')
const BankCard = require ('./lib/BankCard')
const CadNum = require ('./lib/CadNum'), cadNum = new CadNum ()
const {OKPO_8, OKPO_10} = require ('./lib/OKPO')
class KPP extends Check {constructor () {super (9)}}

const raise = (a) => {
	if (!a) return
	const [message, o] = a
	const err = new Error (message)
	for (const k in o) err [k] = o [k]
	throw err
}

module.exports = {

	isntSNILS   : str     => new SNILS ().verify (str),
	randomSNILS : opt     => new SNILS ().random (opt),

	isntOGRN15  : str     => new OGRN_15 ().verify (str),
	randomOGRN15: opt     => new OGRN_15 ().random (opt),

	isntOGRN13  : str     => new OGRN_13 ().verify (str),
	randomOGRN13: opt     => new OGRN_13 ().random (opt),

	isntINN10   : str     => new INN_10 ().verify (str),
	randomINN10 : opt     => new INN_10 ().random (opt),
	
	isntKPP     : str     => new KPP ().verify (str),
	randomKPP   : opt     => new KPP ().randomValue (opt),

	isntOKPO8  : str      => new OKPO_8 ().verify (str),
	randomOKPO8: opt      => new OKPO_8 ().random (opt),

	isntOKPO10  : str     => new OKPO_10 ().verify (str),
	randomOKPO10: opt     => new OKPO_10 ().random (opt),

	isntINN12: str => (
		new INN_12_1 ().verify (str.slice (0, 11))
		?? new INN_12_2 ().verify (str)
	),
	randomINN12: opt => new INN_12_2 ().appendCheckSum (new INN_12_1 ().random (opt)),

	isntBankAcct   : (str, bic) => new BankAcct ().verify (str, bic),
	randomBankAcct : (bic, opt) => new BankAcct ().random (bic, opt),

	isntBankCard   : str        => new BankCard ().verify (str),
	randomBankCard : opt        => new BankCard ().random (opt),

	isntCadNum     : str        => cadNum.verify (str),
	randomCadNum   : opt        => cadNum.random (opt),

}

for (const k in module.exports) if (k.startsWith ('isnt')) {

	module.exports ['is' + k.substring (4)] = (x, y) => raise (module.exports [k] (x, y))

}