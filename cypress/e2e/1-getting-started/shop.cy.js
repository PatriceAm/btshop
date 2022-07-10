describe("Shop app", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Hygiene");
  });
});
describe("Shop app", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000/shop");
    cy.contains("Today");
  });
});
