const Check = require ('./lib/Check')
const {OGRN_13, OGRN_15} = require ('./lib/Horner')
const {INN_10, INN_12_2, INN_12_1} = require ('./lib/INN')
const SNILS = require ('./lib/SNILS')
class KPP extends Check {constructor () {super (9)}}

module.exports = {

	isSNILS     : str     => new SNILS ().verify (str),
	randomSNILS : options => new SNILS ().random (options),

	isOGRN15    : str     => new OGRN_15 ().verify (str),
	randomOGRN15: ()      => new OGRN_15 ().random (),

	isOGRN13    : str     => new OGRN_13 ().verify (str),
	randomOGRN13: ()      => new OGRN_13 ().random (),			

	isINN10     : str     => new INN_10 ().verify (str),
	randomINN10 : ()      => new INN_10 ().random (),
	
	isKPP       : str     => new KPP ().process (str),
	randomKPP   : ()      => new KPP ().randomValue (),

	isINN12: str => {
		new INN_12_1 ().verify (str.slice (0, 11))
		new INN_12_2 ().verify (str)
	},
	randomINN12: () => new INN_12_2 ().appendCheckSum (new INN_12_1 ().random ())

}