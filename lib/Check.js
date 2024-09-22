module.exports = class {

	constructor (totalLength, checkSumLength = 0) {

		this.valueLength    = totalLength - checkSumLength
		this.checkSumLength = checkSumLength
		this.totalLength    = totalLength

		this.modulus2 = 10; for (let i = 1; i < checkSumLength; i ++) this.modulus2 *= 10
		this.modulus1 = this.modulus2 + 1		

	}

	raise (s, o) {

		const err = Error (s)

		for (const k in o) err [k] = o [k]
		
		throw err
	
	}

	processDigit (pos, digit) {

		// nothing

	}
	
	process (str) {

		this.sum = 0; const {valueLength} = this; for (let i = 0; i < valueLength; i ++) {
		
			let dec = str.charCodeAt (i); if ((dec & 16) !== 16) this.raise ('Not a digit', {code: 'char', pos: i, value: str.charAt (i)})
				
			dec &= 15; if (dec > 9) this.raise ('Not a digit', {code: 'char', pos: i, value: str.charAt (i)})
			
			this.processDigit (i, dec)
				
		}

	}

	randomValue (options = {}) {

		const {pre} = options, prefix = pre ? pre [Math.floor (pre.length * Math.random ())] : ''

		const length = this.valueLength - prefix.length, b = Buffer.alloc (length)
	
		for (let i = 0; i < length; i ++) b [i] = 48 + Math.floor (10 * Math.random ())
	
		return prefix + b.toString ()
	
	}

	adjustSum () {

		this.sum = 0
	
	}

	checkSum (str) {

		this.process (str)

		this.sum %= this.modulus1

		if (this.sum >= this.modulus2) this.adjustSum (str)

		return String (this.sum).padStart (this.checkSumLength, '0')

	}

	mustBeEqual (asis, tobe, code) {

		if (tobe === asis) return

		this.raise ('Invalid ' + code, {code, tobe, asis})

	}

	verify (str) {

		this.mustBeEqual (typeof str, 'string', 'type')

		this.mustBeEqual (str.length, this.totalLength, 'length')

		const checkSum = this.checkSum (str); if (this.checkSumLength === 0) return

		this.mustBeEqual (str.slice (this.valueLength), checkSum, 'checksum')
	
	}

	appendCheckSum (str) {

		return str + this.checkSum (str)

	}

	random (options = {}) {

		const v = this.randomValue (options)

		return this.appendCheckSum (v)

	}
	
}