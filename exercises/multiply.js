'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
function multiply(param1,param2){

let para = 0

	let result = 0
    
    if (param1 == 0 || param2 == 0){
            result = 0
    }else if(param1 > 0 && param2 < 0){
        para = -param2
        for(let i=0;i<para;i++){
            result=result+param1
        }
        result=-result
    }else if(param1 < 0 && param2 > 0){
        para = -param1
        for(let i=0;i<param2;i++){
            result=result+para
        }
        result=-result
    }else if(param1 < 0 && param2 < 0){
        param1 = -param1
        param2 = -param2
        for(let i=0;i<param2;i++){
            result=result+param1
        }       
    }  
     else{   
	for(let i=0;i<param2;i++){

		result=result+param1
    }
}
	return result
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
