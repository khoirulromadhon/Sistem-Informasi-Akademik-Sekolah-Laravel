describe("Melakukan Testing Pada Data Jadwal", () => {

    beforeEach(() => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(4050)
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
    })
    it("Menambahkan Data Jadwal", () => {
        cy.contains("Master Data").click();
        cy.contains("Data Jadwal").click();
        cy.contains("Tambah Data Jadwal").click();
        cy.get('#select2-hari_id-container').click();
        cy.wait(4060)
        cy.get('.select2-search__field').type('Senin').type('{enter}')
        cy.wait(4060)
        cy.get('#select2-kelas_id-container').click()
        cy.wait(4060)
        cy.get('.select2-search__field')
        .type('10TPMA').type('{enter}')

        cy.get('#select2-guru_id-container').click()
        cy.wait(4060)
        cy.get('.select2-search__field').type('01').type('{enter}')

        cy.get('#jam_mulai').type("07.00");
        cy.get('#jam_selesai').type("08.00");

        cy.get('#select2-ruang_id-container').click();
        cy.wait(4060)
        cy.get('.select2-search__field').type('Ruang 01').type('{enter}')

        cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(4060)
    })
    it("Mengedit Data Jadwal", () => {
        cy.visit('/jadwal');
        cy.get('.odd > :nth-child(3) > .btn').click()
        cy.get('.btn-success').click()
        cy.get('#select2-hari_id-container').click()
        cy.get('.select2-search__field').type('Kamis').type('{enter}')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').click()
        cy.get('.btn-primary').click()
    })
    it("Menghapus Data Jadwal", () => {
        cy.visit('/jadwal')
        cy.get('.odd > :nth-child(3) > .btn').click()
        cy.get('.btn-danger').click()
    })

        // it("Export Excel", () => {
        //     cy.visit('/jadwal')
        //     cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > a").click();            
        // });
    it("upload Excel", () => {
        cy.visit('/jadwal')
        cy.get('.card-title > .btn-primary').click();

        cy.get('.card-title > .btn-primary')
        cy.wait(4050)
        cy.get('.modal-body > .form-group > input').attachFile('JADWALL.xlsx')
        cy.wait(4050)
        cy.get('form > .modal-content > .modal-footer > .btn-primary').click()
    })
        
    it("Drop Data", () => {
        cy.visit('/jadwal')
        cy.get('.card-title > .btn-danger').click()
        cy.get('.modal-footer > .btn-danger').click()
    })

});