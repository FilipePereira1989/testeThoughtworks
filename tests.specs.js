    describe('navegando na tela', ()=>{
    it('Preenchendo formulario de viagem', () =>{
    //Acessando a pagina de teste
    cy.visit('https://marsair.thoughtworks-labs.net/filipe.pereira')
    //Preenchendo o campo "Departing" utilizando a opção "July"
    cy.get('select[id="departing"]').select('0')
    //Preenchendo o campo "Returning" ulitilizando a opção "July (Next Year)"
    cy.get('select[id="returning"]').select('2')
    //inserindo codigo promocional válido
    cy.get('input[id="promotional_code"]').type('JJ5-OPQ-320')
    //Clicando no botão de pesquisa
    cy.get('input[type="submit"]').click()
    //Validação da tela com os resultados da busca
    cy.contains('Search Results')
    })
})
