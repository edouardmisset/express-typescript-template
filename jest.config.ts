import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import type { Config } from 'jest'
import path from 'path'
const rootDirectory = path.resolve(__dirname)

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@server(.*)$': `${rootDirectory}/src$1`,
    '@config(.*)$': `${rootDirectory}/src/config$1`,
    '@tests(.*)$': `${rootDirectory}/__tests__$1`,
    '@domain(.*)$': `${rootDirectory}/src/domain$1`,
    '@controller(.*)$': `${rootDirectory}/src/controller$1`,
    '@middleware(.*)$': `${rootDirectory}/src/middleware$1`,
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
  rootDir: rootDirectory,
  roots: [rootDirectory],
  setupFilesAfterEnv: [`${rootDirectory}/__tests__/setup.ts`],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/build',
    `${rootDirectory}/__tests__/fixtures`,
    `${rootDirectory}/__tests__/setup.ts`,
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: ['((/__tests__/.*)|(\\.|/)(test|spec))\\.tsx?$'],
}

export default config
