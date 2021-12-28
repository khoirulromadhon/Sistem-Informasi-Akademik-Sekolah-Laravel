it('Login & Logout', () => {
    cy.visit('http://127.0.0.1:8000/login');
    cy.get('#email').type("admin@gmail.com");
    cy.get('#password').type("12345678");
    cy.get('#btn-login').click();
    cy.url().should('include', 'http://127.0.0.1:8000/');
    cy.wait(5000);
    cy.get('#btnGroupDrop1').click()
    cy.contains('Log Out').click()
    cy.url().should('include', '/');
});