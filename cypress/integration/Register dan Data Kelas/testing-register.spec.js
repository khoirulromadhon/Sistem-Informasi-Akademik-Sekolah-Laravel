describe("akses menu register", () => {

    it("tambahkan akun baru siswa", () => {
        cy.visit('/');
        cy.get('.mb-0 > .text-center').click()
        cy.get('input[name=email]').type("ardilalukita4@gmail.com");
        cy.get('#role').select("Siswa");
        cy.wait(1000);
        cy.get('input[name=nomer]').type("001867543210");
        cy.get('input[name=password]').type("ardila08");
        cy.get('input[name=password_confirmation]').type("ardila08");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', '/');
        cy.get('.text-center').click();
    });

    it("tambahkan akun baru guru", () => {
        cy.visit('/');
        cy.get('.mb-0 > .text-center').click()
        cy.get('input[name=email]').type("ardilalukita4@gmail.com");
        cy.get('#role').select("Guru");
        cy.wait(1000);
        cy.get('input[name=nomer]').type("00198");
        cy.get('input[name=password]').type("ardila08");
        cy.get('input[name=password_confirmation]').type("ardila08");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', '/');
        cy.get('.text-center').click();
    });
});