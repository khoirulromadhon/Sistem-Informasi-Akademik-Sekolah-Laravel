
beforeEach(() => {
    cy.refreshDatabase();
    cy.seed();
    cy.visit('/')
    cy.get('input[name=email]').type("admin@gmail.com");
    cy.url().should('include', 'http://127.0.0.1:8000/');
    cy.get('input[name=password]').type("12345678");
    cy.get('#btn-login').click();
    // cy.get('#btnGroupDrop1').should('contain', 'admin');
})


it('Input Data Guru', () => {
    cy.get('#MasterData').click();
    cy.get('#liMasterData > ul > li:nth-child(5)').click();
    cy.get('.card-title > .btn').click();
    cy.url().should('include', '/mapel');
    cy.wait(1000);
    cy.get('#nama_mapel').type("PPL");
    cy.get('#select2-paket_id-container').click();
    cy.get('.select2-search__field').type('Elektronika Industri').type('{enter}')
    cy.get('#select2-kelompok-container').click();
    cy.get('.select2-search__field').type('Pelajaran Keahlian').type('{enter}')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('#MasterData > p').click();
    cy.get('#DataGuru > p').click();
    cy.url().should('include', '/guru');
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
    cy.get('#foto').attachFile('7T8InVt-joey-jordison-wallpaper.jpg');
    cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
})

it('Edit Data Guru', () => {
    cy.get('#MasterData').click();
    cy.get('#liMasterData > ul > li:nth-child(5)').click();
    cy.get('.card-title > .btn').click();
    cy.url().should('include', '/mapel');
    cy.wait(1000);
    cy.get('#nama_mapel').type("PPL");
    cy.get('#select2-paket_id-container').click();
    cy.get('.select2-search__field').type('Elektronika Industri').type('{enter}')
    cy.get('#select2-kelompok-container').click();
    cy.get('.select2-search__field').type('Pelajaran Keahlian').type('{enter}')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('#MasterData').click();
    cy.get('#DataGuru > p').click();
    cy.url().should('include', '/guru');
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
    cy.get('.select2-search__field').type("PPL").type("{enter}");;
    cy.get('#foto').attachFile('7T8InVt-joey-jordison-wallpaper.jpg');
    cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('#MasterData > p').click();
    cy.get('#DataGuru > p').click();
    cy.get('.odd > :nth-child(3) > .btn').click();
    cy.get('.btn-success').click();
    cy.get('#nama_guru').type(" Irawan");
    cy.get('#tmp_lahir').type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}");
    cy.get('#tmp_lahir').type("Madiun");
    cy.get('.btn-primary').click();
})

it('Details Guru', () => {
    cy.get('#MasterData').click();
    cy.get('#liMasterData > ul > li:nth-child(5)').click();
    cy.get('.card-title > .btn').click();
    cy.url().should('include', '/mapel');
    cy.wait(1000);
    cy.get('#nama_mapel').type("PPL");
    cy.get('#select2-paket_id-container').click();
    cy.get('.select2-search__field').type('Elektronika Industri').type('{enter}')
    cy.get('#select2-kelompok-container').click();
    cy.get('.select2-search__field').type('Pelajaran Keahlian').type('{enter}')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('#MasterData > p').click();
    cy.get('#DataGuru > p').click();
    cy.url().should('include', '/guru');
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
    cy.get('.select2-search__field').type("PPL").type("{enter}");;
    cy.get('#foto').attachFile('7T8InVt-joey-jordison-wallpaper.jpg');
    cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('#MasterData > p').click();
    cy.get('#DataGuru > p').click();
    cy.get('.odd > :nth-child(3) > .btn').click();
    cy.get('.btn-info').click();
})

it('Delete Data', () => {
    cy.get('#MasterData').click();
    cy.get('#liMasterData > ul > li:nth-child(5)').click();
    cy.get('.card-title > .btn').click();
    cy.url().should('include', '/mapel');
    cy.wait(1500);
    cy.get('#nama_mapel').type("PPL");
    cy.get('#select2-paket_id-container').click();
    cy.get('.select2-search__field').type('Elektronika Industri').type('{enter}')
    cy.get('#select2-kelompok-container').click();
    cy.get('.select2-search__field').type('Pelajaran Keahlian').type('{enter}')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('#MasterData > p').click();
    cy.get('#DataGuru > p').click();
    cy.url().should('include', '/guru');
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
    cy.get('.select2-search__field').type("PPL").type("{enter}");;
    cy.get('#foto').attachFile('7T8InVt-joey-jordison-wallpaper.jpg');
    cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('.odd > :nth-child(3) > .btn').click();
    cy.get('.btn-danger').click();
})

it('Export Excell', () => {
    cy.get('#MasterData').click();
    cy.get('#liMasterData > ul > li:nth-child(5)').click();
    cy.get('.card-title > .btn').click();
    cy.url().should('include', '/mapel');
    cy.wait(1000);
    cy.get('#nama_mapel').type("PPL");
    cy.get('#select2-paket_id-container').click();
    cy.get('.select2-search__field').type('Elektronika Industri').type('{enter}')
    cy.get('#select2-kelompok-container').click();
    cy.get('.select2-search__field').type('Pelajaran Keahlian').type('{enter}')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('#MasterData > p').click();
    cy.get('#DataGuru > p').click();
    cy.url().should('include', '/guru');
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
    cy.get('.select2-search__field').type("PPL").type("{enter}");;
    cy.get('#foto').attachFile('7T8InVt-joey-jordison-wallpaper.jpg');
    cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('.btn-success').click();
})

it('Import Data Excell', () => {
    cy.get('#MasterData > p').click();
    cy.get('#DataGuru > p').click();
    cy.url().should('include', '/guru');
    cy.get('.card-title > .btn-primary').click();
    cy.get('.modal-body > .form-group > input').attachFile('guru.xlsx');
    cy.get('form > .modal-content > .modal-footer > .btn-primary').click();
})

it('Drop Semua Data', () => {
    cy.get('#MasterData').click();
    cy.get('#liMasterData > ul > li:nth-child(5)').click();
    cy.get('.card-title > .btn').click();
    cy.url().should('include', '/mapel');
    cy.wait(1000);
    cy.get('#nama_mapel').type("PPL");
    cy.get('#select2-paket_id-container').click();
    cy.get('.select2-search__field').type('Elektronika Industri').type('{enter}')
    cy.get('#select2-kelompok-container').click();
    cy.get('.select2-search__field').type('Pelajaran Keahlian').type('{enter}')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('#MasterData > p').click();
    cy.get('#DataGuru > p').click();
    cy.url().should('include', '/guru');
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
    cy.get('.select2-search__field').type("PPL").type("{enter}");;
    cy.get('#foto').attachFile('7T8InVt-joey-jordison-wallpaper.jpg');
    cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('.card-title > .btn-danger').click();
    cy.get('.modal-footer > .btn-danger').click();
})