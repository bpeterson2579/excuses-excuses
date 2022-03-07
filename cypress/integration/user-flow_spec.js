describe('User flows throughout app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/')
  })

  it('Should see the title of the app and two buttons', () => {
    cy.get('h1')
      .contains('Excuses, Excuses')

    cy.get('button').each((item, index, list) => {
      expect(list).to.have.length(2)
    })
  })

  it('Should allow users to click the generate excuses button and then take users to the form', () => {
    cy.get('#generateQuote')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/form')
  })

  it('Should allow users to fill in the form and generate excuses', () => {
    cy.visit('http://localhost:3000/form')
      .get('.excuse-input')
      .type('2')
      .get('.category-input')
      .select('family')
      .get('.submit-button')
      .click()
  })

  it('Should inform the user if there isn\'t a valid number of excuses being asked for', () => {
    cy.visit('http://localhost:3000/form')
      .get('.category-input')
      .select('family')
      .get('.submit-button')
      .click()
      .get('.error')
      .contains('You clearly don\'t need an excuse as you did not ask for any amount of them!')
  })
})