describe("Testing Fitur Pengumuman", () => {
    it("Mengubah Isi Pengumuan", () => {
        cy.visit('/login');
        cy.get('input[name=email]').type("admin@gmail.com");
        cy.wait(1000);
        cy.get('input[name=password]').type("12345678");
        cy.get('#btn-login').click();
        cy.contains("Pengumuman").click();
        cy.get('.note-editable').type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}")
        .type("Bagi Mahasiswa Baru POLINEMA, dapat mengambil Kelengkapan Mahasiswa Baru di Gedung AT, dengan membawa Form Pengambilan Kelengkapan ")
        cy.get('.btn-outline-primary').click();
        cy.get('#Dashboard > p').click();
        cy.get('#Home > p').click();
    });
});