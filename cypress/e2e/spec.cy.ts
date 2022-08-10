describe("My First Test", () => {
  it("Visits the initial project page", () => {
    cy.visit("http://localhost:2337/");
    cy.origin("http://localhost:1337", () => {
      cy.visit("/?url=http://localhost:2337");
      cy.get('[formControlName="username"]').type("asdf");
      cy.get('[formControlName="password"]').type("password");
      cy.get("button").click();
    });
    cy.url().should("contain", "token");
    cy.get("#success").should("exist");
  });
});
