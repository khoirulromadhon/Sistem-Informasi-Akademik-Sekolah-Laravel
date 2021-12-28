describe("Melakukan Testing Pada Trash Jadwal", () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
    })
    it("Restore Data Jadwal", () => {
        cy.get('#ViewTrash').click();
        cy.get('#TrashJadwal').click();
        cy.get('.btn-success').click();
    });
});