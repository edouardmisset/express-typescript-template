import { getEnv } from './env'

describe('env.ts', () => {
  it('should throw when the env variable is not present in the .env file', async () => {
    const inexistantEnvVariable = 'AN_INEXISTANT_ENV_VARIABLE'
    expect(() => getEnv(inexistantEnvVariable)).toThrow(inexistantEnvVariable)
  })
})
