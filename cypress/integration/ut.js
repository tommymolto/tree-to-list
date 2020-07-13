/// JSON fixture file can be loaded directly using
// the built-in JavaScript bundler
const requiredExample = require('../fixtures/example')
const requiredRetorno = require('../fixtures/retorno.json')
const ttl=require('../../treetolist');
beforeEach(() => {
    // load example.json fixture file and store
    // in the test context object
    cy.fixture('example.json').as('example')
    cy.fixture('retorno.json').as('retorno')
})

it('cy.fixture or require', function () {

    expect(this.example, 'input fixture in the test context')
        .to.deep.equal(requiredExample)
    expect(this.retorno, 'output fixture in the test context')
        .to.deep.equal(requiredRetorno)


    const x = ttl(this.example,this.example[0],{
        key_id:'ID_TOGGLE',
        key_parent:'ID_TOGGLEPAI'
    })
    console.log('x=',x);
    console.log('this.retorno=',this.retorno);
    console.log(JSON.stringify(x) === JSON.stringify(this.retorno) );
    expect(JSON.stringify(x) ).to.be.equal(JSON.stringify(this.retorno) );
})
