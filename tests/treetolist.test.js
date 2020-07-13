const requiredExample = require('../cypress/fixtures/example')
const requiredRetorno = require('../cypress/fixtures/retorno.json')
const ttl=require('../treetolist');

test('Teste Mock', () => {
    const x = ttl(requiredExample,requiredExample[0],{
        key_id:'ID_TOGGLE',
        key_parent:'ID_TOGGLEPAI'
    })
    expect(JSON.stringify(x)).toBe(JSON.stringify(requiredRetorno));

});
