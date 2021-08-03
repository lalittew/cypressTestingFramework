describe('Paypal home page test file', ()=>{
    describe('first test ', () => {
        it('open browser and verify title', () => {
            cy.visit("https://www.paypal.com/uk/home")
            cy.title().should('eq', 'Send Money, Pay Online or Set Up a Merchant Account - PayPal')
        })
    })

    describe('Second test', () => {
        it('open browser and verify title', () => {
            cy.visit("https://www.paypal.com/uk/home")
        })

        it('check title of home page', ()=>{
            cy.title().should('eq', 'Send Money, Pay Online or Set Up a Merchant Account - PayPal')
        })
    })
})