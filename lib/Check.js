const err = (code, asis, tobe) => ([`Invalid ${code}: ${asis}, expected ${tobe}`, {code, asis, tobe}])

module.exports = class {

	constructor (totalLength, checkSumLength = 0) {

		this.valueLength    = totalLength - checkSumLength
		this.checkSumLength = checkSumLength
		this.totalLength    = totalLength

		this.modulus2 = 10; for (let i = 1; i < checkSumLength; i ++) this.modulus2 *= 10
		this.modulus1 = this.modulus2 + 1		

	}

	processDigit (pos, digit) {

		// nothing

	}
	
	process (str) {

		this.sum = 0; const {valueLength} = this; for (let i = 0; i < valueLength; i ++) {
		
			let dec = str.charCodeAt (i); if ((dec & 16) !== 16) return ['Not a digit', {code: 'char', pos: i, value: str.charAt (i)}]
				
			dec &= 15; if (dec > 9) return ['Not a digit', {code: 'char', pos: i, value: str.charAt (i)}]
			
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

		this.sum %= this.modulus1

		if (this.sum >= this.modulus2) this.adjustSum (str)

		return String (this.sum).padStart (this.checkSumLength, '0')

	}

	verify (str) {

		{

			const asis = typeof str, tobe = 'string';         if (asis !== tobe) return err ('type', asis, tobe)

		}

		{

			const asis = str.length, tobe = this.totalLength; if (asis !== tobe) return err ('length', asis, tobe)

		}

		{

			const err = this.process (str); if (err) return err

		}

		if (this.checkSumLength !== 0) {

			const tobe = this.checkSum (str), asis = str.slice (this.valueLength); if (asis !== tobe) return err ('checksum', asis, tobe)

		}
	
	}

	appendCheckSum (str) {

		this.process (str)

		return str + this.checkSum (str)

	}

	random (options = {}) {

		const v = this.randomValue (options)

		return this.appendCheckSum (v)

	}
	
}