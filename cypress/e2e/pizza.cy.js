

describe('My First Test', () => {
    it('finds the content "type"', () => {
        cy.visit("http://localhost:3000");
        cy.contains("Tikla").click();
        cy.contains("Merhaba.Cypress!");
    })
})