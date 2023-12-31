const COEF_SNILS    = new Uint8Array ([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0])
const COEF_INN_10   = new Uint8Array ([2, 4, 10, 3, 5, 9, 4, 6, 8, 0])
const COEF_KPP      = new Uint8Array ([0, 0, 0, 0, 0, 0, 0, 0, 0])
const COEF_INN_12_1 = new Uint8Array ([7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0])
const COEF_INN_12_2 = new Uint8Array ([3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0])
const COEF_OGRN_13  = [
	100000000000, 
	10000000000, 
	1000000000, 
	100000000, 
	10000000, 
	1000000, 
	100000, 
	10000, 
	1000, 
	100, 
	10, 
	1, 
	0
]

const COEF_OGRN_15  = [
	10000000000000, 
	1000000000000, 
	100000000000, 
	10000000000, 
	1000000000, 
	100000000, 
	10000000, 
	1000000, 
	100000, 
	10000, 
	1000, 
	100, 
	10, 
	1, 
	0
]

const die = (s, o) => {

	const err = Error (s)
	
	for (const k in o) err [k] = o [k]
	
	throw err

}

const digit = (str, pos) => str.charCodeAt (pos) & 15

const scalarProduct = (coef, str) => {

	if (typeof str !== 'string') die ('Arg 1 must be string', {code: 'type', type: typeof str})
	
	const {length} = coef; if (length !== str.length) die ('Invalid length', {code: 'length', tobe: length, asis: str.length})

	const buf = Buffer.from (str)
	
	let s = 0; for (let i = 0; i < length; i ++) {
	
		let dec = buf [i]; if ((dec & 16) !== 16) die ('Not a digit', {code: 'char', pos: i, value: str.charAt (i)})
			
		dec &= 15; if (dec > 9) die ('Not a digit', {code: 'char', pos: i, value: str.charAt (i)})
		
		const k = coef [i]; if (k === 0) continue
		
		s += k * dec
		
	}
	
	return s

}

module.exports = {

	digit,
	scalarProduct,

	isSNILS: str => {
	
		const tobe = scalarProduct (COEF_SNILS, str) % 101 % 100, asis = 10 * digit (str, 9) + digit (str, 10)
		
		if (tobe !== asis) die ('Wrong checksum', {code: 'checksum', tobe, asis})
		
	},
	
	isINN10: str => {
	
		const tobe = scalarProduct (COEF_INN_10, str) % 11 % 10, asis = digit (str, 9)
		
		if (tobe !== asis) die ('Wrong checksum', {code: 'checksum', tobe, asis})
		
	},

	isINN12: str => {
	
		{
	
			const tobe = scalarProduct (COEF_INN_12_1, str) % 11 % 10, asis = digit (str, 10)

			if (tobe !== asis) die ('Wrong checksum', {code: 'checksum', tobe, asis, phase: 1})
		
		}

		{
	
			const tobe = scalarProduct (COEF_INN_12_2, str) % 11 % 10, asis = digit (str, 11)

			if (tobe !== asis) die ('Wrong checksum', {code: 'checksum', tobe, asis, phase: 2})
		
		}
		
	},

	isOGRN13: str => {
	
		const tobe = scalarProduct (COEF_OGRN_13, str) % 11 % 10, asis = digit (str, 12)
		
		if (tobe !== asis) die ('Wrong checksum', {code: 'checksum', tobe, asis})
		
	},

	isOGRN15: str => {
	
		const tobe = scalarProduct (COEF_OGRN_15, str) % 11 % 10, asis = digit (str, 14)
		
		if (tobe !== asis) die ('Wrong checksum', {code: 'checksum', tobe, asis})
		
	},

	isKPP: str => {
	
		scalarProduct (COEF_KPP, str)
		
	},

}