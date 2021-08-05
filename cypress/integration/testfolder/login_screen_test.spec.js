describe('PayPal login page related test', ()=>{
    describe('Navigate to login page and verify the UI of page', ()=>{
        it('Open paypal home page and click on Login button at top', ()=>{
            cy.visit("https://www.paypal.com/uk/home")
            cy.title().should('eq', 'Send Money, Pay Online or Set Up a Merchant Account - PayPal')

            cy.get('[id="ul-btn"]').click() //Click on login button
            cy.url().should('eq', 'https://www.paypal.com/uk/signin') //Verify the URL of Login page
            cy.get('[class="paypal-logo paypal-logo-long"]').should('be.visible') //Verify that PayPal logo is present
            cy.get('[for="email"]').should('have.text', 'Email address or mobile number') //Verify that Email address field is present 
            cy.get('[id="btnNext"]').should('have.text', 'Next') // Next button is present
            cy.get('[class="loginSignUpSeparator "]').should('be.visible').should('have.text', 'or') //Login separator is present
            cy.get('[id="createAccount"]').should('be.visible').should('have.text', 'Sign Up') //Verify that Sign Up button is present
            cy.get('[class="picker country-selector"]').should('be.visible') //Verify that country selector is present
            cy.get('[class="country GB"]').should('be.visible') //Verify that by default UK is selected
        })
    })

    describe('Verify that user is able to change the country from the Login page', ()=> {
        it('Navigate to Login page and verify that GB is selected by default', ()=> {
            cy.visit("https://www.paypal.com/uk/home")
            cy.get('[id="ul-btn"]').click()
            cy.url().should('eq', 'https://www.paypal.com/uk/signin')
            cy.get('[class="country GB"]',{timeout: 5000}).should('be.visble')
        })

        it('Verify that user is able to change the country', ()=> {
            cy.get('[class="picker country-selector"]').click() //Click on country picker
            cy.get('[class="country US"]').click()

            cy.get('[class="country GB"]').should(not.be.visible)
            cy.get('[class="country US"]').should('be.visible')
        })
    })
})