beforeEach(() => {
  cy.visit("http://localhost:5173/");
});

describe("Sort by date", () => {
  it("First click sorts by descending order", () => {
    cy.contains("Last modified").click();
    cy.get("[id=file-name]").should((files) =>
      expect(files[0]).to.contain.text("Misc")
    );
  });
  it("Second click sorts by ascending order", () => {
    cy.contains("Last modified").click();
    cy.contains("Last modified").click();
    cy.get("[id=file-name]").should((files) =>
      expect(files[0]).to.contain.text("Cost centres")
    );
  });
});
