import path from 'path'

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 70,
      function: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    },
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@server(.*)$': `<rootDir>/src$1`,
    '@config(.*)$': `<rootDir>/src/config$1`,
    '@tests(.*)$': `<rootDir>/__tests__$1`,
    '@domain(.*)$': `<rootDir>/src/domain$1`,
    '@controller(.*)$': `<rootDir>/src/controller$1`,
    '@middleware(.*)$': `<rootDir>/src/middleware$1`,
  },
  reporters: [
    'default',
    [
      path.resolve(__dirname, 'node_modules', 'jest-html-reporter'),
      {
        pageTitle: 'Demo test Report',
        outputPath: 'test-report.html',
      },
    ],
  ],
  rootDir: '<rootDir>',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [`<rootDir>/__tests__/setup.ts`],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/build',
    `<rootDir>/__tests__/fixtures`,
    `<rootDir>/__tests__/setup.ts`,
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: ['((/__tests__/.*)|(\\.|/)(test|spec))\\.tsx?$'],
}
