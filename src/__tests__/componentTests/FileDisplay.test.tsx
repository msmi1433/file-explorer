import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import FileDisplay from "../../components/FileDisplay/FileDisplay";
const data = require("../../../data/file-structure.json");

describe("File/folder rendering", () => {
  test("renders all files/folders at root level", async () => {
    render(<FileDisplay userFiles={data} />);
    expect(screen.getByText("Misc")).toBeInTheDocument();
    expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
    expect(screen.getByText("Public Holiday policy")).toBeInTheDocument();
    expect(screen.getByText("Expenses")).toBeInTheDocument();
    expect(screen.getByText("Cost centres")).toBeInTheDocument();
  });
  test("folders can be clicked to reveal contents", async () => {
    const user = userEvent.setup();
    render(<FileDisplay userFiles={data} />);
    await user.click(screen.getByText("Misc"));
    expect(screen.getByText("Christmas party")).toBeInTheDocument();
    await user.click(screen.getByText("Misc"));
    expect(screen.queryByText("Christmas party")).not.toBeInTheDocument();
  });
});
