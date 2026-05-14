const nextJest = require("next/jest");

// Garante que o endpoint do formulário esteja disponível nos testes
// antes que qualquer módulo seja importado e a constante seja avaliada.
process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/test";

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
