const ScalarProduct = require ('./ScalarProduct')
const CH_HYPHEN = '-'.charCodeAt (0)
const CH_SPACE  = ' '.charCodeAt (0)

const COEF = new Uint8Array ([9, 8, 7, 6, 5, 4, 3, 2, 1])

module.exports = class extends ScalarProduct {

	constructor () {

		super (COEF, 2)

	}

	verify (str) {

		if (str.length !== 14) return super.verify (str)
				
		for (const [pos, code] of [[3, CH_HYPHEN], [7, CH_HYPHEN], [11, CH_SPACE]])
			if (str.charCodeAt (pos) !== code)
				this.raise ('Wrong format', {code: 'format', pos})

		super.verify (str.slice (0, 3) + str.slice (4, 7) + str.slice (8, 11) + str.slice (12))

	}

	random (options = {}) {

		const result = super.random ()

		return !options.format ? result : result.slice (0, 3) + '-' + result.slice (3, 6) + '-' + result.slice (6, 9) + ' ' + result.slice (9)

	}
	
}