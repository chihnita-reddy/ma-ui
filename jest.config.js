module.exports = {
  preset: 'jest-preset-angular',
  roots: [
    '<rootDir>/src/',
    '<rootDir>/__mocks__/'
  ],
  setupFiles: ['<rootDir>/src/setup-jest-env.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/app/$1',
    '^~auth/(.*)$': '<rootDir>/src/app/auth/$1',
    '^~core/(.*)$': '<rootDir>/src/app/core/$1',
    '^~shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^~main/(.*)$': '<rootDir>/src/app/main/$1',
    '^~environment$': '<rootDir>/src/environments/environment'
  },
  testPathIgnorePatterns: ['<rootDir>/src/test.ts'],
  transformIgnorePatterns: ['node_modules/(?!ngx-cookie-service)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/src/tsconfig.spec.json'
    },
  },
  // TODO: Un-comment when ready to implement the RP Recommended Standard for pipelines
  // coverageThreshold: {
  //   global: {
  //     statements: 48
  //   }
  // }
};
