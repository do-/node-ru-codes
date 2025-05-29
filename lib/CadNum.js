const CH_COLON = ':'.charCodeAt (0)
const CH_0     = '0'.charCodeAt (0)
const CH_9     = '9'.charCodeAt (0)

module.exports = class {

	raise (s, o) {

		const err = Error (s)

		for (const k in o) err [k] = o [k]
		
		throw err
	
	}	

	verify (str) {

		const type = typeof str; if (type !== 'string') this.raise (`CadNum must be of type string`, {str, type, code: 'type'})
		
		const {length} = str; if (length < 14) this.raise (`CadNum must be at least 14 charaters long`, {str, asis: length, code: 'length'})
			
		const lastColonIndex = str.lastIndexOf (':')

		switch (lastColonIndex) {

			case -1:
				this.raise (`Invalid CadNum "${str}": colon not found`, {str, pos: lastColonIndex, code: 'format'})

			case 12:
			case 13:
				break

			default:
				this.raise (`Invalid CadNum "${str}": the last colon found at position ${lastColonIndex}`, {str, pos: lastColonIndex, code: 'format'})

		}

		for (let pos = 0; pos < length; pos ++) if (pos !== lastColonIndex) {
			
			const c = str.charCodeAt (pos)

			switch (pos) {

				case 2:
				case 5:
					if (c !== CH_COLON) this.raise (`Invalid CadNum "${str}": not a colon at position ${pos}`, {str, pos, code: 'char'})
					break

				default:
					if (c < CH_0 || c > CH_9) this.raise (`Invalid CadNum "${str}": not a digit at position ${pos}`, {str, pos, code: 'char'})

			}

		}
	
	}

	random (options = {}) {

		let {pre, length} = options

		if (!pre) pre = ''

		if (pre.length === 12 || pre.length === 13) if (pre.charCodeAt (pre.length - 1) !== CH_COLON) pre += ':'

		if (!length) length = 14 + Math.floor (5 * Math.random ())

		if (length <= pre.length) length = pre.length + 1

		const b = Buffer.alloc (length)

		for (let i = 0; i < pre.length; i ++) b [i] = pre.charCodeAt (i)

		for (let i = pre.length; i < length; i ++) b [i] = 48 + Math.floor (10 * Math.random ())

		b [2] = CH_COLON
		b [5] = CH_COLON

		if (b.lastIndexOf (CH_COLON) < 12) {

			let lastColonIndex = 12

			if (length > 14 && Math.random () > 0.5) lastColonIndex ++
			
			b [lastColonIndex] = CH_COLON

		}

		return b.toString ()

	}
	
}