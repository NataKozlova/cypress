context("Authorization books page", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it("Should open the main page", () => {
    cy.contains("Books list")
  })

  it("Should successfully login", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  })
  
  it("Should not login with empty password", () => {
    cy.login("test@test.com");
    cy.get("#pass").then($el => $el[0].checkValidity()).should("be.false")
  })

})