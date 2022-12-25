export function getEnv(variable: string): string {
  const value = process.env[variable]
  if (typeof value === 'undefined') {
    throw new Error(`It seems like the variable "${variable}" is not set in the environment.
    Did you forget to execute "cp .env.dev .env" and adjust variables in the .env file to match your own environment ?`)
  }
  return value
}

export const inProdEnv = getEnv('NODE_ENV') === 'production'
export const inDevEnv = getEnv('NODE_ENV') === 'development'
export const inTestEnv = getEnv('NODE_ENV') === 'test'

export const APP_NAME = getEnv('APP_NAME')

// URL
export const DOMAIN = getEnv('DOMAIN')
export const PORT = getEnv('PORT')
