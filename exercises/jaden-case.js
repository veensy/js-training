'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str){
	let reg = (' ')
	let mot = ''
	for (let i = 0; i < str.length; i++) {
    if (i == 0) {
        mot = mot + str.charAt(i).toUpperCase()

    } else if (str[i - 1] == reg) {
        mot = mot + str.charAt(i).toUpperCase()
    } else {
        mot = mot + str.charAt(i).toLowerCase()

    }
}
	return mot
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str dez'), 'Str Dez')
assert.strictEqual(jadenCase('qSdq sdqsD'), 'Qsdq Sdqsd')
assert.strictEqual(jadenCase('Str Str'), 'Str Str')

// End of tests */
