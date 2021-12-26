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

    it('tambahkan User admin', () => {
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(6)').click();
        cy.contains('Data User').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#email').type("admin2@gmail.com")
        cy.get('#select2-role-container').click()
        cy.get('.select2-search__field').type('Admin').type('{enter}')
        cy.get('#name').type("Admin 2")
        cy.get('#password').type("12345678")
        cy.get('#password-confirm').type("12345678")
        cy.get('.modal-footer > .btn-primary').click()
        cy.contains('Admin 2').should("be.visible")
        cy.get('.toast').should('be.visible')

    })
    it('tambahkan User Operator', () => {
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(6)').click();
        cy.contains('Data User').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#email').type("operator@gmail.com")
        cy.get('#select2-role-container').click()
        cy.get('.select2-search__field').type('Operator').type('{enter}')
        cy.get('#name').type("Operator")
        cy.get('#password').type("12345678")
        cy.get('#password-confirm').type("12345678")
        cy.get('.modal-footer > .btn-primary').click()
        cy.contains('Operator').should("be.visible")
        cy.get('.toast').should('be.visible')

    })
    it('tambahkan User Guru', () => {
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(6)').click();
        cy.contains('Data User').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#email').type("guru@gmail.com")
        cy.get('#select2-role-container').click()
        cy.get('.select2-search__field').type('Guru').type('{enter}')
        cy.get('#nomer').type("122")
        cy.get('#password').type("12345678")
        cy.get('#password-confirm').type("12345678")
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.toast').should('be.visible')

    })
    it('tambahkan User Siswa', () => {
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(6)').click();
        cy.contains('Data User').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#email').type("siswa@gmail.com")
        cy.get('#select2-role-container').click()
        cy.get('.select2-search__field').type('Siswa').type('{enter}')
        cy.get('#nomer').type("1389")
        cy.get('#password').type("12345678")
        cy.get('#password-confirm').type("12345678")
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.toast').should('be.visible')
    })
    it('tes button kembali pada tambah data user', () => {
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(6)').click();
        cy.contains('Data User').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.get('.btn-default').click();
    })
    it('Hapus data', () => {
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
        cy.get('.even > :nth-child(4) > form > .btn').click();
        cy.get('.toast').should('be.visible')
        cy.contains('Admin 2').should("be.visible")
    })
    it('Cek detail dan cari data yang ada', () => {
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(6)').click();
        cy.contains('Data User').should("be.visible")
        cy.get('.card-title > .btn').click();
        cy.wait(1000);
        cy.get('#email').type("admin2@gmail.com");
        cy.get('#select2-role-container').click();
        cy.get('.select2-search__field').type('Admin').type('{enter}');
        cy.get('#name').type("Admin 2")
        cy.get('#password').type("12345678")
        cy.get('#password-confirm').type("12345678")
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('tr > :nth-child(3) > .btn').click()
        cy.get('#example1_filter > label > .form-control').type("Admin 2")
        cy.contains('Admin 2').should("be.visible")

    })
    it('Cek detail dan cari data yang tidak ada', () => {
        cy.get('#MasterData').click();
        cy.get('#liMasterData > ul > li:nth-child(6)').click();
        cy.get('tr > :nth-child(3) > .btn').click()
        cy.get('#example1_filter > label > .form-control').type("Admin 3")
        cy.contains('No matching records found').should("be.visible")

    })

})