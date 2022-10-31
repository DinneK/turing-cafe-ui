describe("Mid Mod Cafe", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      ok: true,
      fixture: "reservations",
    });
    cy.visit("http://localhost:3000");
  });

  it("should display the home page and reservations", () => {
    cy.get("h1").contains("Turing Cafe Reservations").get("form");
    cy.get(".singleResy").get("h3").contains("Christie");
  });
});
