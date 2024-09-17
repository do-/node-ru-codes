module.exports = class {

	constructor (totalLength, checkSumLength = 0) {

		this.valueLength    = totalLength - checkSumLength
		this.checkSumLength = checkSumLength
		this.totalLength    = totalLength

	}

	raise (s, o) {

		const err = Error (s)

		for (const k in o) err [k] = o [k]
		
		throw err
	
	}

	processDigit (pos, digit) {

		// nothing

	}
	
	process (str, checkAllDigits) {

		if (typeof str !== 'string') this.raise ('Arg 1 must be string', {code: 'type', type: typeof str})

		const length = checkAllDigits ? this.totalLength : this.valueLength

		if (length !== str.length) this.raise ('Invalid length', {code: 'length', tobe: length, asis: str.length})
	
		for (let i = 0; i < length; i ++) {
		
			let dec = str.charCodeAt (i); if ((dec & 16) !== 16) this.raise ('Not a digit', {code: 'char', pos: i, value: str.charAt (i)})
				
			dec &= 15; if (dec > 9) this.raise ('Not a digit', {code: 'char', pos: i, value: str.charAt (i)})
			
			if (i < this.valueLength) this.processDigit (i, dec)
				
		}

	}

	randomValue () {

		const {valueLength} = this, b = Buffer.alloc (this.valueLength)
	
		for (let i = 0; i < valueLength; i ++) b [i] = 48 + Math.floor (10 * Math.random ())
	
		return b.toString ()
	
	}	

	checkSum (str, checkAllDigits = false) {

		this.sum = 0

		this.process (str, checkAllDigits)

		const {sum} = this; delete this.sum

		return String (this.checkSumLength === 1 ? sum % 11 % 10 : sum % 101 % 100)

			.padStart (this.checkSumLength, '0')

	}

	verify (str) {

		const tobe = this.checkSum (str, true), asis = str.slice (this.valueLength)

		if (tobe === asis) return

		this.raise ('Wrong checksum', {code: 'checksum', tobe, asis})
	
	}

	appendCheckSum (str) {

		return str + this.checkSum (str)

	}

	random () {

		const v = this.randomValue ()

		return this.appendCheckSum (v)

	}
	
}