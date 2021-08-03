describe('first test to open pay pal website and check title of page', () => {
    it('open browser and verify title', () => {
        cy.visit("https://www.paypal.com/uk/home")
        cy.title().should('eq', 'Send Money, Pay Online or Set Up a Merchant Account - PayPal')
    })
})