const Check = require ('./lib/Check')
const {OGRN_13, OGRN_15} = require ('./lib/Horner')
const {INN_10, INN_12_2, INN_12_1} = require ('./lib/INN')
const SNILS = require ('./lib/SNILS')
const BankAcct = require ('./lib/BankAcct')
const {OKPO_8, OKPO_10} = require ('./lib/OKPO')
class KPP extends Check {constructor () {super (9)}}

module.exports = {

	isSNILS     : str     => new SNILS ().verify (str),
	randomSNILS : opt     => new SNILS ().random (opt),

	isOGRN15    : str     => new OGRN_15 ().verify (str),
	randomOGRN15: opt     => new OGRN_15 ().random (opt),

	isOGRN13    : str     => new OGRN_13 ().verify (str),
	randomOGRN13: opt     => new OGRN_13 ().random (opt),

	isINN10     : str     => new INN_10 ().verify (str),
	randomINN10 : opt     => new INN_10 ().random (opt),
	
	isKPP       : str     => new KPP ().verify (str),
	randomKPP   : opt     => new KPP ().randomValue (opt),

	isOKPO8    : str      => new OKPO_8 ().verify (str),
	randomOKPO8: opt      => new OKPO_8 ().random (opt),

	isOKPO10    : str     => new OKPO_10 ().verify (str),
	randomOKPO10: opt     => new OKPO_10 ().random (opt),

	isINN12: str => {
		new INN_12_1 ().verify (str.slice (0, 11))
		new INN_12_2 ().verify (str)
	},
	randomINN12: () => new INN_12_2 ().appendCheckSum (new INN_12_1 ().random ()),

	isBankAcct : (str, bic)    => new BankAcct ().verify (str, bic),
	randomBankAcct: (bic, opt) => new BankAcct ().random (bic, opt),

}