const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/__tests__/**",
    "!src/app/**",
  ],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  coverageReporters: ["text", "lcov", "html"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/src/__tests__/**/*.(test|spec).(ts|tsx)"],
};

module.exports = createJestConfig(customJestConfig);
