/*I was having trouble testing using React Testing Library/Jest from this point,
so I reverted to Cypress. I unfortunately could not find a way to pass props to
the child component (FileDisplay) from the parent component on line 18 below.
Believe this is an issue as I am pulling data from a JSON file, so it can't be 'fetched'
within the parent component when it is rendered in the test below. I've left the test here for
your reference (skipped so it does not affect other test runs).
*/

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import FileExplorer from "../../components/FileExplorer/FileExplorer";
const data = require("../../../data/file-structure.json");

describe("Sort function testing", () => {
  test.skip("Date order can be changed", async () => {
    const user = userEvent.setup();
    render(<FileExplorer {...data} />);
    await user.click(screen.getByText("Last modified"));
  });
});
