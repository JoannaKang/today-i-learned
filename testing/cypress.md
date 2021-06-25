1. Open cypress
```
yarn cypress
```

2. Base template
```
describe('Suite of tests on the Broadband journey', () => {
  before(() => {
    cy.setSessionCookies()
    cy.visit('')
  })

  beforeEach(() => {
    // Alias : 반복해서 체크해야하는 요소들은 여기서 미리 정의해둔 후 다른데서 가져다 쓸 수 있도록 함 
    cy.get('#post-code-form button')
      .as('checkAvailability')
    
    cy.intercept('**/addresses*', { fixture: 'addresses.json' })
    .as('addresses')
  })

  it('should display check availability elements', () => {
    cy.get('#post-code-form label')
      .first()
      .contains('House name or number') // 타겟팅한 엘리먼트에 string이 포함되어있는지를 테스팅

    cy.get('#post-code-form label')
      .last()
      .contains('Postcode') // GET 항목에 어떤 엘리멘트들이 타겟팅되었는지가 표시됨

    cy.get('@checkAvailability')
      .contains('Check availability')
  })

  it('should should error if submits without entering data', () => {
    cy.get('@checkAvailability')
      .should('not.have.attr', 'aria-disabled')

    cy.get('@checkAvailability')
      .click()
      .should('have.attr', 'aria-disabled', 'true')
    
    cy.get('#post-code-form')
      .contains('Please add your postcode')

    cy.get('#post-code-form input')
      .last()
      .type('RG141AA')

    cy.get('@checkAvailability')
      .should('not.have.attr', 'aria-disabled')

    cy.get('#post-code-form')
      .should('not.contain', 'Please add your postcode')
  })


  it('should display addresses if returned successfully from API', () => {
    cy.get('@checkAvailability')
        .click()

    cy.wait('@addresses')

    cy.fixture('addresses.json').then(({ addresses }) => {
        cy.get('#select option')
            .should('have.length', addresses.length + 1)

        cy.get('#select')
            .select('1')
            .should('have.value', '1')
    })

    cy.get(CHANGE_POSTCODE)
        .click()
})

  it('should display correctly if NO addresses are returned successfully from API', () => {
    cy.intercept('**/addresses*', (req) => {
      req.on('response', (res) => {
          res.body.addresses = []
      })
    })

    cy.get('@checkAvailability')
      .click()

    cy.wait('@addresses')

    cy.get('#select option')
      .should('have.length', 1)

    cy.get(CHANGE_POSTCODE)
      .click()
  })

  it('should handle error gracefully if API fails', () => {
    cy.intercept('**/addresses*', {
      statusCode: 404,
      body: '404 Not Found!',
      headers: {
        'x-not-found': 'true',
      },
    }).as('failureAddresses')

    cy.get('@checkAvailability')
      .click()

    cy.wait('@failureAddresses')

    cy.get(ERROR_NOTIFICATION)
      .should('contain', 'Sorry, something went wrong')
      .and('contain', 'We could not complete that request. Please try again')
  })
})
```

3. Unit test example
* form label이 정확한지?
* button cta가 정확한지?
-> unique code (=css id) 로 타겟팅이 가능

