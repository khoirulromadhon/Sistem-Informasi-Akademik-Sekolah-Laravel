describe("Melakukan Testing Pada Data Jadwal", () => {
    it("Mencoba Login", () => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.get('#btnGroupDrop1').click();
        cy.get('[href="http://127.0.0.1:8000/profile"]').click();
        cy.get('.card-body > .btn').click();

        cy.get('#name').type('{backspace}').type('{backspace}').type('{backspace}').type('{backspace}')
        .type('{backspace}');
        cy.get('#name').type("Admin");
        cy.get('.btn-primary').click();
        cy.get(':nth-child(1) > :nth-child(3) > .btn').click();
        cy.get('#email').type("admin@gmail.com");
        cy.get('.btn-primary').click();
        cy.get('#back').click();
        cy.get(':nth-child(2) > :nth-child(3) > .btn').click();

        cy.get('#password-old').type("12345678");
        cy.get('#password').type("12345678");
        cy.get('#password-confirm').type("12345678");
        cy.get('.btn-primary').click();
        cy.get('#back').click()

    });
});