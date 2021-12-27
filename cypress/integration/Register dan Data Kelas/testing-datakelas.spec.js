describe("akses menu data kelas", () => {


    it("batal menambahkan data kelas", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");
        cy.get('button[name=tambah]').click();
        cy.wait(1000)
        cy.get('input[name=nama_kelas]').type("EI-10B");
        cy.get('#paket_id').select("8");
        cy.get('#guru_id').select("4", {force: true});
        cy.get('button[name=kembali]').click();
    });

    it("tambahkan data kelas", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");
        cy.get('button[name=tambah]').click();
        cy.wait(1000)
        cy.get('input[name=nama_kelas]').type("EI-10B");
        cy.get('#paket_id').select("8");
        cy.get('#guru_id').select("4", {force: true});
        cy.get('button[name=create]').click();
        cy.get('.toast').should('be.visible')
    });
  
    it("tambahkan data kelas", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");
        cy.get('button[name=tambah]').click();
        cy.wait(1000)
        cy.get('input[name=nama_kelas]').type("BIP-10B");
        cy.get('#paket_id').select("1");
        cy.get('#guru_id').select("2", {force: true});
        cy.get('button[name=create]').click();
        cy.get('.toast').should('be.visible')
    });

    it("fitur search", () => { 
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");
        cy.wait(2000);
        cy.get("input[type='search']").type('Amirullah');
    });


    it("cek button next dan previous", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");
        cy.contains("a", "Next").click({force: true});
        cy.contains("a", "Previous").click({force: true});
    });

    it("akses button hapus", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");

        var class1 = {
            "nama_kelas": "BIP-10B",
            "nama_guru": "Sultan Mahmud"
        }

        cy.contains("Hapus").click({force: true});
        cy.get('.toast').should('be.visible');

        cy.get('#ViewTrash').click();
        cy.get('#TrashKelas').click();
        cy.contains('Trash Kelas').should("be.visible");
    });

    it("akses button hapus", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");

        var class1 = {
            "nama_kelas": "RPL-12B",
            "nama_guru": "Bambang Fajar"
        }

        cy.contains("Hapus").click({force: true});
        cy.get('.toast').should('be.visible');

        cy.get('#ViewTrash').click();
        cy.get('#TrashKelas').click();
        cy.contains('Trash Kelas').should("be.visible");
    });

    it("akses button view siswa", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");
        cy.get('button[name=siswa]').click({multiple:true});
        cy.get('.bd-example-modal-lg > .modal-dialog > .modal-content > .modal-body > .modal-footer > .btn-default').click({force:true});
        cy.wait(1000)
        cy.get('button[name=siswa]').click({multiple:true});
        cy.contains("a", "Download PDF").click({force:true});
       });

    it("akses button view jadwal", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.wait(2000);
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");
        cy.get('button[name=jadwal]').click({multiple: true});
        cy.get('.bd-example-modal-xl > .modal-dialog > .modal-content > .modal-body > .modal-footer > .btn-default').click({force:true});
        cy.wait(1000)
        cy.get('button[name=jadwal]').click({multiple:true});
        cy.contains("a", "Download File").click({force:true});
    });

    it("akses button edit", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");
        cy.get('button[name=edit]').click({ multiple: true });
        cy.get('#guru_id').select("3", {force: true});
        cy.get('button[name=kembali]').click({force: true});
        cy.get('button[name=edit]').click({ force: true });
        cy.get('#guru_id').select("3", {force: true});
        cy.get('button[name=create]').click({force: true});
        cy.get('.toast').should('be.visible')

    });
});
