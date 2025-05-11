const {assert} =require('chai');
const password = require('./passwordvalidator');

describe('Password Validation',()=>{
    it('test',()=>{
     assert.strictEqual(password("Abcd1234"), true);
     assert.strictEqual(password("Abcd123"), false);
     assert.strictEqual(password("abcd1234"), false);
     assert.strictEqual(password("ABCD1234"), false);
    });
});