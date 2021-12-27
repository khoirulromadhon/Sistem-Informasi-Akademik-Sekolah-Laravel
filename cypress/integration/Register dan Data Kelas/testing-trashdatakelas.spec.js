describe("akses menu trash", () => {

    it("cek button next dan previous", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#ViewTrash').click();
        cy.get('#TrashKelas').click();
        cy.contains('Trash Kelas').should("be.visible");
        cy.contains("a", "Next").click({force: true});
        cy.contains("a", "Previous").click({force: true});
    });

    it("fitur search", () => { 
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#ViewTrash').click();
        cy.get('#TrashKelas').click();
        cy.contains('Trash Kelas').should("be.visible");
        cy.get("input[type='search']").type('Rekayasa Perangkat Lunak');
    });


    it("akses button RESTORE", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#ViewTrash').click();
        cy.get('#TrashKelas').click();
        cy.contains('Trash Kelas').should("be.visible");

        var trash1 = {
            "nama_kelas": "RPL-12A",
            "ket": "Bisnis kontruksi dan Properti",
            "nama_guru": "Juan Wahyu"
        }    
        
        cy.contains("a", "Restore").click();
        cy.get('.toast').should('be.visible');

        cy.get('#MasterData').click();
        cy.get('#DataKelas').click();
        cy.contains('Data Kelas').should("be.visible");
    });

    it("akses button hapus", () => {
        cy.visit('login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(5000)
        cy.get('input[name=password]').type("12345678");
        cy.get('button[name=submit]').click();
        cy.url().should('contain', 'home');
        cy.get('#ViewTrash').click();
        cy.get('#TrashKelas').click();
        cy.contains('Trash Kelas').should("be.visible");
        var trash1 = {
            "nama_kelas": "BIP-10B",
            "ket": "Desain Permodelan dan Informasi Bangunan",
            "nama_guru": "Sultan Mahmud"
        }
        cy.contains("Hapus").click({force: true});
        cy.get('.toast').should('be.visible');
    });

});