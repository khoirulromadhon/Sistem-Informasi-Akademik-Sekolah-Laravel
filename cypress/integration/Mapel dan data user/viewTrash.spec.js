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


    it('Delete trash mapel', () => {
        //hapus data mapel
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
        // masuk ke fitur trash
        cy.get('#ViewTrash').click();
        cy.get('#TrashMapel').click();
        cy.contains('Trash Mapel').should("be.visible")
        cy.get('.btn-danger').click();
        cy.get('.toast-message').should('be.visible')
        cy.contains('No data available in table').should("be.visible")

    })
    it('Restore trash mapel', () => {
        //hapus data mapel
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(5)').click();
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#nama_mapel').type("Bahasa Indonesia");
        cy.get('#select2-paket_id-container').click();
        cy.get('.select2-search__field').type('Otomasi Industri').type('{enter}')
        cy.get('#select2-kelompok-container').click();
        cy.get('.select2-search__field').type('Pelajaran Khusus').type('{enter}')
        cy.get('.modal-footer > .btn-primary').click();
        cy.get('.btn-danger').click();
        // masuk ke fitur trash
        cy.get('#ViewTrash').click();
        cy.get('#TrashMapel').click();
        cy.contains('Trash Mapel').should("be.visible")
        cy.get('.btn-success').click();
        cy.get('.toast-message').should('be.visible')
        cy.contains('No data available in table').should("be.visible")

        //cek data yang kembali
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(5)').click();
        cy.contains('Bahasa Indonesia').should("be.visible")
    })
    it('delete trash user data', () => {
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(6)').click();
        cy.contains('Data User').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#email').type("admin2@gmail.com");
        cy.get('#select2-role-container').click();
        cy.get('.select2-search__field').type('Admin').type('{enter}');
        cy.get('#name').type("Admin 2");
        cy.get('#password').type("12345678");
        cy.get('#password-confirm').type("12345678");
        cy.get('.modal-footer > .btn-primary').click();
        cy.get('tr > :nth-child(3) > .btn').click();
        cy.get('#example1 > tbody > tr.odd > td:nth-child(4) > form > button').click();
        cy.url().should('include', "/")

        //login ulang
        cy.get('input[name=email]').type("admin2@gmail.com");
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.contains('Admin 2').should("be.visible")

        // masuk fitur trash
        cy.get('#ViewTrash').click();
        cy.get('#TrashUser').click();
        cy.contains('Trash User').should('be.visible')
        cy.get('.btn-danger').click();
        cy.get('.toast-message').should('be.visible')
        cy.contains('No data available in table').should("be.visible")
    })

    it('Restore trash user data', () => {
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(6)').click();
        cy.contains('Data User').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#email').type("admin2@gmail.com");
        cy.get('#select2-role-container').click();
        cy.get('.select2-search__field').type('Admin').type('{enter}');
        cy.get('#name').type("Admin 2");
        cy.get('#password').type("12345678");
        cy.get('#password-confirm').type("12345678");
        cy.get('.modal-footer > .btn-primary').click();
        cy.get('tr > :nth-child(3) > .btn').click();
        cy.get('#example1 > tbody > tr.odd > td:nth-child(4) > form > button').click();
        cy.url().should('include', "/")

        //login ulang
        cy.get('input[name=email]').type("admin2@gmail.com");
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.contains('Admin 2').should("be.visible")

        // masuk fitur trash
        cy.get('#ViewTrash').click();
        cy.get('#TrashUser').click();
        cy.contains('Trash User').should('be.visible')
        cy.get('.btn-success').click();
        cy.get('.toast-message').should('be.visible');
        cy.contains('No data available in table').should("be.visible")
    })
})