const {isCadNum, isntCadNum, randomCadNum} = require ('..')

const RE = /^\d{2}:\d{2}:\d{6,7}:\d{1,}$/

test ('basic', () => {

	expect (() => isCadNum ()).toThrow ()

	for (const v of [
		'47:14:120300:',
		'47:14:12030:814',
		'47:14:12030011:814',
		'47-14-120300-814',
		'47!14:120300:814',
		'47:14-1203001:814',
		'47:14:12030O:814',
		'47:14:1203001:81A',
	]) {

		expect (isntCadNum (v)).toBeTruthy ()
		expect (() => isCadNum (v)).toThrow ()

	}

	for (const v of [
		'47:14:120300:814',
		'47:14:1203001:814',
	]) {
		
		expect (isntCadNum (v)).toBeFalsy ()
		expect (isCadNum (v)).toBeUndefined ()

	}

	for (const pre of [undefined, '', '47', '47:', '47:14', '47:14', '47:14:120300', '47:14:1203001', '47:14:120300:', '47:14:1203001:']) {

		for (const length of [undefined, 14, 18]) {

			for (let i = 0; i < 10; i ++) {

				const v = randomCadNum (pre || length ? {pre, length} : undefined)

				expect (v).toMatch (RE)
				if (pre && length > pre.length + 2) {
					expect (v).toMatch (pre)
					expect (v).toHaveLength (length)
				}				
				
			}

		}

	}

})
