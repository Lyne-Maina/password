const {assert} =require('chai');
const password = require('./passwordvalidator');

describe('Password Validation',()=>{
    it('returns true for passwords with 8 characters',()=>{
     assert.strictEqual(password("Abcd1243"), true);
})
})

describe('Password Validation',()=>{
     it('returns true for passwords with uppercase',()=>{
     assert.strictEqual(password("Abcd1234"), true);
     
    })
    })

    describe('Password Validation',()=>{
     it('returns true for passwords with lowercase',()=>{
     assert.strictEqual(password("ABcd1234"), true);
     
    })
    })

