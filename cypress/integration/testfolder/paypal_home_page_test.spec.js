describe('Paypal home page test file', ()=>{
    describe('Verify the UI of Home page', () =>{
        it('open browser and verify title', () =>{
            cy.visit("https://www.paypal.com/uk/home")
            cy.title().should('eq', 'Send Money, Pay Online or Set Up a Merchant Account - PayPal')
        })

        it('verify that login and sign up button are present on Home Page', ()=>{
            cy.get('#ul-btn').should('be.visible') // Login button
            cy.get('#signup-button').should('be.visible') // Sign Up button
        })

        it('verify that PayPal logo is present at top of page', ()=>{
            cy.get('[data-pa-click="Header-Logo-PayPal Logo"]').invoke('text').should('eq', 'PayPal')
        })

        it('verify that the proper text and Sign Up Now button is present', ()=>{
            cy.get('[class="pypl-heading device-hero__headline h2"]').should('have.text','You could get a £5 reward') //Text 1
            cy.get('[class="device-hero__paragraph"]').should('have.text', 'Simply sign up and add a payment method, and you could get a £5 reward applied at checkout when you spend £10 or more. Reward expires 30/09/21. Terms apply.')
            cy.get('#CtaId').should('be.visible')  // SignUpNow button 
        })

        it('verify the links present at top of page', ()=>{
            cy.get('[data-pa-click="HeaderMainMenu-Link-Personal"]').invoke('text').should('eq', 'Personal')
            cy.get('[data-pa-click="HeaderMainMenu-Link-Business"]').invoke('text').should('eq', 'Business')
            cy.get('[data-pa-click="HeaderMainMenu-Link-Developer"]').invoke('text').should('eq', 'Developer')
            cy.get('[data-pa-click="HeaderMainMenu-Link-Help"]').invoke('text').should('eq', 'Help')       
        })
    })
})