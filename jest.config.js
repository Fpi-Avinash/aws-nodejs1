module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src", "pages"],
  coveragePathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^pages(.*)$": "<rootDir>/pages$1",
    "^fonts(.*)$": "<rootDir>/public/fonts$1",
    "^images(.*)$": "<rootDir>/public/images$1",
    "^icons(.*)$": "<rootDir>/public/icons$1",
    "^theme(.*)$": "<rootDir>/theme$1",
    "^hooks(.*)$": "<rootDir>/src/hooks$1",
    "^mocks(.*)": "<rootDir>/src/mocks$1",
    "^.+\\.(css|less|scss|sass)$": "<rootDir>/cssTransform.js",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.svg$": "<rootDir>/fileTransform.js",
  },
};
