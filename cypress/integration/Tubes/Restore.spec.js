beforeEach(() => {
    cy.refreshDatabase();
    cy.seed();
    cy.visit('/')
    cy.get('input[name=email]').type("admin@gmail.com");
    cy.get('input[name=password]').type("12345678");
    cy.get('#btn-login').click();
    // cy.get('#btnGroupDrop1').should('contain', 'admin');
});

it('Restore Data', () => {
    cy.get('#MasterData').click();
    cy.get('#liMasterData > ul > li:nth-child(5)').click();
    cy.get('.card-title > .btn').click();
    cy.wait(1000);
    cy.get('#nama_mapel').type("PPL");
    cy.get('#select2-paket_id-container').click();
    cy.get('.select2-search__field').type('Elektronika Industri').type('{enter}')
    cy.get('#select2-kelompok-container').click();
    cy.get('.select2-search__field').type('Pelajaran Keahlian').type('{enter}')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('#MasterData > p').click();
    cy.get('#DataGuru > p').click();
    cy.get('.card-title > .btn-default').click();
    cy.wait(1500);
    cy.get('#nama_guru').type("Lulu");
    cy.get('#tmp_lahir').type("Malang");
    cy.get('#tgl_lahir').type("2000-12-07");
    cy.get('#select2-jk-container').click();
    cy.get('.select2-search__field').type("Laki-laki").type("{enter}");
    cy.get('#telp').type("089600900800");
    cy.get('#nip').type("1941720102");
    cy.get('#kode').type("001");
    cy.get('#select2-mapel_id-container').click();
    cy.get('.select2-search__field').type("PPL").type("{enter}");
    cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('.odd > :nth-child(3) > .btn').click();
    cy.get('.btn-danger').click();
    cy.get('#ViewTrash').click();
    cy.get('#TrashGuru > p').click();
    cy.get('.btn-success').click();
});