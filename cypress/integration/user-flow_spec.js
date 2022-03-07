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

  it('Should inform the user if there isn\'t a valid number of excuses being asked for', () => {
    cy.visit('http://localhost:3000/form')
      .get('.category-input')
      .select('family')
      .get('.submit-button')
      .click()
      .get('.error')
      .contains('You clearly don\'t need an excuse as you did not ask for any amount of them!')
  })

  it('Should allow users to fill in the form and generate excuses', () => {
    cy.visit('http://localhost:3000/form')
      .get('.excuse-input')
      .type('{backspace}')
      .type('2')
      .get('.category-input')
      .select('family')
      .get('.submit-button')
      .click()
      .get('.excuse-card')
      .contains('1')
      .get('.excuse-card')
      .contains('★')
      .get('.excuse-card')
      .contains('🗑')
  })

  it('Should allow users to delete excuses they don\'t like', () => {
    cy.visit('http://localhost:3000/excuses/2-family')
      .get('.remove-button').each((item, index, list) => {
        expect(list).to.have.length(2)
      })
      .get('.remove-button').first()
      .click()

    cy.get('.remove-button').each((item, index, list) => {
      expect(list).to.have.length(1)
    })
  })

  it('Should allow users to favorite excuses they like', () => {
    cy.visit('http://localhost:3000/excuses/2-family')
      .get('.fav-button').first()
      .contains('★')
      .click()
      .get('.go-home')
      .click()
      .get('.go-home')
      .click()
      .get('#viewFavorites')
      .click()
      .get('.fav-category')
      .contains('Category:')
  })

  it('Should show users an error message if they visit invalid urls', () => {
    cy.visit('http://localhost:3000/reasons')
      .get('.error')
      .contains('Something has gone wrong, press button to return home')
  })
})