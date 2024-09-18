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
	
	process (str) {

		const {valueLength} = this; for (let i = 0; i < valueLength; i ++) {
		
			let dec = str.charCodeAt (i); if ((dec & 16) !== 16) this.raise ('Not a digit', {code: 'char', pos: i, value: str.charAt (i)})
				
			dec &= 15; if (dec > 9) this.raise ('Not a digit', {code: 'char', pos: i, value: str.charAt (i)})
			
			this.processDigit (i, dec)
				
		}

	}

	randomValue () {

		const {valueLength} = this, b = Buffer.alloc (this.valueLength)
	
		for (let i = 0; i < valueLength; i ++) b [i] = 48 + Math.floor (10 * Math.random ())
	
		return b.toString ()
	
	}	

	checkSum (str) {

		this.sum = 0

		this.process (str)

		const {sum} = this; delete this.sum

		return String (this.checkSumLength === 1 ? sum % 11 % 10 : sum % 101 % 100)

			.padStart (this.checkSumLength, '0')

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

	random () {

		const v = this.randomValue ()

		return this.appendCheckSum (v)

	}
	
}