describe("login Test", () => {
    it("Email dan Password benar", () => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
    });
});