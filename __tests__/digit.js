const {digit} = require ('..')

test ('basic', () => {
		
	expect (digit ('Catch 22', 7)).toBe (2)
	expect (digit ('Catch 22', 6)).toBe (2)

})
