# File-explorer

This project provides a basic explorer that can display files and expandable folders.

Folders can be opened and closed, and files can be sorted by date and name. Users can also search for files by name.

## Forking/cloning

The repository can be forked via [GitHub](https://github.com/msmi1433/file-explorer).

Once forked on GitHub, run the following terminal commands in your desired directory:

- `git clone <forked repository link>`
- `cd file-explorer`
- `code .` (to open the directory in VSCode)

### Dependencies

The web-app has several dependencies that can be installed by executing `npm i` in the terminal (within the project's directory).

For details regarding what these dependencies are, please refer to the package.json file.

### Tests

Testing has been conducted using Jest, React Testing Library and Cypress.

- To run the Jest/React Testing Library tests, enter command `npm t`.
- To run the Cypress tests, enter command `npm run cypress:open`.
  - When the Cypress client opens, click 'E2E Testing' and select your browser of choice to proceed.
  - Note: the app must be running for Cypress tests to work, so please ensure you have read the 'Running the app locally' section below before you attempt to open Cypress.
    - You may also need to change the 'localhost' address in the `beforeEach` call at the top of the `sorting.cy.ts` file to match the port that your machine has opened the web app on.

### Running the app locally

To run the app locally, please enter command `npm run dev` and click the 'localhost' link that appears in your terminal window.

## Tech Stack

- Node
- React
- Typescript
- Vite
- Tailwind

## Minimum requirements

- Node v20.3.1
