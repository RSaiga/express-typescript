/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  // testEnvironment: "@quramy/jest-prisma/environment",
  testEnvironment: 'node',
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  testRegex: '.*\\.test\\.ts$',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: 'coverage_dir',
  coverageReporters: ['html'],
}
