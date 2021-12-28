/// <reference types="cypress" />
describe('Fitur Master Mapel', () => {
    beforeEach(() => {
        cy.refreshDatabase();
        cy.seed();
        cy.visit('/')
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.contains('Admin').should("be.visible")
    })
    it('tambah mapel', () => {

        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(5)').click();
        cy.contains('Data Mapel').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#nama_mapel').type("Bahasa Indonesia");
        cy.get('#select2-paket_id-container').click();
        cy.get('.select2-search__field').type('Otomasi Industri').type('{enter}')
        cy.get('#select2-kelompok-container').click();
        cy.get('.select2-search__field').type('Pelajaran Khusus').type('{enter}')
        cy.get('.modal-footer > .btn-primary').click();
        cy.get('.toast').should('be.visible')
    })
    it('Edit Data mapel', () => {

        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(5)').click();
        cy.contains('Data Mapel').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#nama_mapel').type("Bahasa Indonesia");
        cy.get('#select2-paket_id-container').click();
        cy.get('.select2-search__field').type('Otomasi Industri').type('{enter}')
        cy.get('#select2-kelompok-container').click();
        cy.get('.select2-search__field').type('Pelajaran Khusus').type('{enter}')
        cy.get('.modal-footer > .btn-primary').click();
        cy.get('.btn-success').click();
        cy.get('#select2-paket_id-container').click();
        cy.get('.select2-search__field').type('Bisnis kontruksi dan properti').type('{enter}');
        cy.get('.btn-primary').click();
        cy.get('.toast').should('be.visible')
    })

    it('mengecek tombol kembali', () => {

        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(5)').click();
        cy.contains('Data Mapel').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.get('.btn-default').click();
    })
    it('Hapus Data mapel', () => {

        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(5)').click();
        cy.contains('Data Mapel').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#nama_mapel').type("Bahasa Indonesia");
        cy.get('#select2-paket_id-container').click();
        cy.get('.select2-search__field').type('Otomasi Industri').type('{enter}')
        cy.get('#select2-kelompok-container').click();
        cy.get('.select2-search__field').type('Pelajaran Khusus').type('{enter}')
        cy.get('.modal-footer > .btn-primary').click();
        cy.get('.btn-danger').click();
        cy.get('.toast').should('be.visible')
        cy.contains('No data available in table').should("be.visible")
    })

})