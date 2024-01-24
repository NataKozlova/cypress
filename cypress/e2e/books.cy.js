context("Books list page", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it("Should add book", () => {
    cy.login("test@test.com", "test");
    cy.addBook("First book");
    cy.contains("First book").should("be.visible");
  })

  it("Should add favorite book", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Second book", true);
    cy.contains("Second book").should("be.visible");
  })

  it("Should add and remove favorite book", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Third book", true);
    cy.get(".mt-3").then(($element) => {return $element[1].click();});
    cy.contains("First book").should("be.visible");
    cy.contains("Dowload book").should("be.visible");
  })

})