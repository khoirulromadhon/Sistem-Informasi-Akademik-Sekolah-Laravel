describe("Testing Fitur Trush siswa", () => {
    it("Menghapus data permanen siswa Evan Dimas", () => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(1000);
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.contains("Master Data").click();
        cy.contains("Data Siswa").click();
        cy.get('input[type="search"]').type('12 RPL A')
        cy.get('.odd > :nth-child(3) > .btn').click();
        cy.get(':nth-child(2) > :nth-child(5) > form > .btn-danger').click();
        cy.contains("View Trash").click();
        cy.contains("Trash Siswa").click();
        cy.wait(1000);
        cy.get('.btn-danger').click();
    });

    it("Menghapus data siswa Doni Haryono dan di Restore", () => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(1000);
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.contains("Master Data").click();
        cy.contains("Data Siswa").click();
        cy.get('input[type="search"]').type('12 RPL A')
        cy.get('.odd > :nth-child(3) > .btn').click();
        cy.get(':nth-child(1) > :nth-child(5) > form > .btn-danger').click();
        cy.contains("View Trash").click();
        cy.contains("Trash Siswa").click();
        cy.get('.btn-success').click();
        cy.contains("Master Data").click();
        cy.contains("Data Siswa").click();
        cy.get('input[type="search"]').type('12 RPL A')
        cy.get('.odd > :nth-child(3) > .btn').click();
    });
});