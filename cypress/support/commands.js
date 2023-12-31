Cypress.Commands.add("login", (login, password) => {
    cy.contains('Log in').click();
    if (login) {
        cy.get("#mail").type(login);
    }
    if (password) {
        cy.get("#pass").type(password);
    }
    cy.contains("Submit").click();
})

Cypress.Commands.add("addBook", (title, favorite) => {
    cy.contains('Add new').click();
    if (title) {
        cy.get("#title").type(title);
    }
    if (favorite) {
        cy.get("#favorite").click();
    }
    cy.contains("Submit").click();
})

Cypress.Commands.add("removeFavorite", (title) => {
    cy.contains('Delete from favorite').click();
    if (title) {
        cy.get("#title").type(title);
    }
    if (favorite) {
        cy.get("#favorite").click();
    }
    cy.contains("Submit").click();
})