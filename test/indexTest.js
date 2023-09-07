const sumar = require('../index');
const assert = require('assert');



describe("probar la suma de 2 numeros", ()=>{
    //afirmar que 5+5 es 10
    it("cinco mas cinco es 10", ()=>{
        assert.equal(10, sumar(5,5));
    });
    //afirmamos que 5 + 5 no son 55
    it("cinco mas cinco no es 55", ()=>{
        assert.notEqual(55, sumar(5,5))
   
     })
});
