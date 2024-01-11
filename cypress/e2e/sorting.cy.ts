beforeEach(() => {
  cy.visit("http://localhost:5173/");
});

describe("Sort by date", () => {
  it("First click sorts dates in descending order", () => {
    cy.contains("Last modified").click();
    cy.get("[id=file-name]").should((files) =>
      expect(files[0]).to.contain.text("Misc")
    );
  });
  it("Second click sorts dates in ascending order", () => {
    cy.contains("Last modified").click();
    cy.contains("Last modified").click();
    cy.get("[id=file-name]").should((files) =>
      expect(files[0]).to.contain.text("Cost centres")
    );
  });
});

describe("Sort by name", () => {
  it("First click sorts names in ascending order", () => {
    cy.contains("Name").click();
    cy.get("[id=file-name]").should((files) =>
      expect(files[0]).to.contain.text("Cost centres")
    );
  });
  it("Second click sorts names in decending order", () => {
    cy.contains("Name").click();
    cy.contains("Name").click();
    cy.get("[id=file-name]").should((files) =>
      expect(files[0]).to.contain.text("Public Holiday policy")
    );
  });
});

describe("Search by name", () => {
  it("Can filter files by name", () => {
    cy.get("input").type("Misc");
    cy.contains("Misc");
    cy.contains("Expenses").should("not.exist");
  });
  it("Restores full list when search term deleted", () => {
    cy.get("input").type("Misc");
    cy.get("input").clear();
    cy.get("[id=file-name]").should((files) =>
      expect(files.length).to.equal(5)
    );
  });
});
