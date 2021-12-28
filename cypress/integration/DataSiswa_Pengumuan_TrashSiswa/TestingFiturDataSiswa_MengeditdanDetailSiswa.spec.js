describe("Testing Fitur Data siswa Rivan Nur Mulki", () => {
it('Mengedit Data Siswa Rivan dan melihat Detail Siswa Rivan  ', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type("admin@gmail.com");
    cy.wait(1000);
    cy.get('input[name=password]').type("12345678");
    cy.get('#btn-login').click();
    cy.contains("Master Data").click();
    cy.contains("Data Siswa").click();
    cy.get('input[type="search"]').type('12 RPL B')
    cy.get('.odd > :nth-child(3) > .btn').click();
    cy.get('.btn-success').click();
    cy.get('#nama_siswa').type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}");
    cy.get('.btn-primary').click();
    cy.get('input[type="search"]').type('12 RPL B')
    cy.get('.odd > :nth-child(3) > .btn').click();
    cy.get('.btn-info').click();
    });
});