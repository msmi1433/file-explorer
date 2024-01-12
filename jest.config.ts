export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.cjs",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|png)$": "<rootDir>/src/test/__ mocks __/fileMock.js",
    ".+.svg?.+$": "<rootDir>/src/assets/computer-folder-open-icon.svg",
  },
};
