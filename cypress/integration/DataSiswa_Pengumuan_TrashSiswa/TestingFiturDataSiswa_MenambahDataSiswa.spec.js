describe("Testing Fitur Data siswa", () => {
    it("Menambah data siswa Evan Dimas", () => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(1000);
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.contains("Master Data").click();
        cy.contains("Data Siswa").click();
        cy.contains("Tambah Data Siswa").click();
        cy.wait(1000);
        cy.get('#no_induk').type("1941720250");
        cy.get('#nama_siswa').type("Evan Dimas");
        cy.get('#select2-jk-container').click()
        cy.get('.select2-search__field').type('Laki-Laki').type('{enter}')
        cy.get('#tmp_lahir').type("Surabaya");
        cy.get('#nis').type("3520081303950001");
        cy.get('#telp').type("081717657890");
        cy.get('#select2-kelas_id-container').click()
        cy.get('.select2-search__field').type('12 RPL A').type('{enter}')
        cy.get('#foto')
        .attachFile('evan_dimas.jpg');
        cy.get('input[type="date"]').type('1995-03-13');
        cy.get('.modal-footer > .btn-primary > .nav-icon').click();
        cy.get('input[type="search"]').type('12 RPL A')
        cy.get('.odd > :nth-child(3) > .btn').click();
    });

    it('Import Data Siswa melalui Excel dengan nama Doni Haryono ', () => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(1000);
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.visit('/');
        cy.contains("Master Data").click();
        cy.contains("Data Siswa").click();
        cy.contains("IMPORT EXCEL").click();
        cy.get('.modal-body > .form-group > input').attachFile('IMPORT_SISWA_UAS_PPL_TEST.xlsx');
        cy.get('form > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('input[type="search"]').type('12 RPL A')
        cy.get('.odd > :nth-child(3) > .btn').click();
    });

    it('Ekspor Data ', () => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(1000);
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.contains("Master Data").click();
        cy.contains("Data Siswa").click();
        cy.get('.btn-success').click();
    });
});