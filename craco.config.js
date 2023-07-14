const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  jest: {
    babel: {
      addPresets: true,
      addPlugins: true,
    },
    configure: {
      testPathIgnorePatterns: ['node_modules'],
      collectCoverage: true,
      collectCoverageFrom: [
        '<rootDir>/**/*.{js,jsx,ts,tsx}',
        '!src/hooks/*.{js,jsx,ts,tsx}',
        '!src/context/*.{js,jsx,ts,tsx}',
        '!src/routers/*.{js,jsx,ts,tsx}',
        '!src/utils/*.{js,jsx,ts,tsx}',
        '!src/App.{js,jsx,ts,tsx}',
        '!src/index.{js,jsx,ts,tsx}',
        '!src/reportWebVitals.{js,jsx,ts,tsx}',
        '!src/__test__/**/*.{js,jsx,ts,tsx}',
      ],
      coverageDirectory: '<rootDir>/coverage',
      moduleFileExtensions: ['js', 'jsx', 'json'],
      transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '^.+\\.(js|jsx|mjs)$': 'babel-jest',
      },
      moduleDirectories: ['node_modules', 'src'],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@test/(.*)$': '<rootDir>/test/$1',
      },
      testEnvironment: 'jsdom',
      coverageThreshold: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
      testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
    },
  },
};
