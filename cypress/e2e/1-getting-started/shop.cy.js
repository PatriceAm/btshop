describe("Main pages can be opened", function () {
  it("Home page can be opened", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Hygiene");
  });
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000/shop");
    cy.contains("Today");
    cy.contains("ZEWA");
    cy.contains("TEMPO");
  });
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000/basket");
    cy.contains("Your basket content");
    cy.contains("Total to pay:");
  });
});

describe("Navigation is working", function () {
  it("navigation click test", function () {
    cy.visit("http://localhost:3000");
    cy.contains("SHOP").click();
    cy.contains("ZEWA");
    cy.contains("TEMPO");
    cy.visit("http://localhost:3000");
    cy.contains("BASKET").click();
    cy.contains("Your basket content");
    cy.contains("Total to pay:");
  });
});

describe("Shopping", function () {
  it("navigation click test", function () {
    cy.visit("http://localhost:3000");
    cy.contains("SHOP").click();
    cy.contains("ZEWA Toilet Paper").click();
    cy.contains("+").click();
    cy.contains("+").click();
    cy.contains("+").click();
    cy.contains("+").click();
    cy.contains("+").click();
    cy.contains("+").click();
    cy.contains("+").click();
    cy.contains("Add to cart").click();
    cy.contains("Back to selection").click();
    cy.contains("TEMPO Face Mask").click();
    cy.contains("+").click();
    cy.contains("+").click();
    cy.contains("Add to cart").click();
    cy.contains("To the Basket").click();
    cy.contains("Your basket content:").click();
    cy.contains("7 ZEWA Toilet Paper");
    cy.contains("£4.55");
    cy.contains("£0.65");
    cy.contains("2 TEMPO Face Mask");
    cy.contains("£5.00");
    cy.contains("£1.00");
    cy.contains("Total to pay:");
    cy.contains("£7.90");
  });
});
