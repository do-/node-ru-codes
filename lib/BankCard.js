const Luhn = require ('./Luhn')
const CH_SPACE  = ' '.charCodeAt (0)

module.exports = class extends Luhn {

	constructor () {

		super (16)

	}

	verify (str) {

		if (str.length !== 19) return super.verify (str)

		for (const pos of [4, 9, 14])
			if (str.charCodeAt (pos) !== CH_SPACE)
				return ['Wrong format', {code: 'format', pos}]

		return super.verify (str.slice (0, 4) + str.slice (5, 9) + str.slice (10, 14) + str.slice (15))

	}

	random (options = {}) {

		const result = super.random (options)

		return !options.format ? result : result.slice (0, 4) + ' ' + result.slice (4, 8) + ' ' + result.slice (8, 12) + ' ' + result.slice (12)

	}
	
}