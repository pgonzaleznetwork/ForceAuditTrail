module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'node',
    testMatch: [
      "**/__tests__/**/*.test.js",
      "**/__tests__/**/*.spec.js"
    ],
    testPathIgnorePatterns: [
      "/node_modules/",
      "/__tests__/mockData" // Ignore the __mocks__ directory
    ]
  };
  