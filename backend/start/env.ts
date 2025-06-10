// start/env.ts

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(['local'] as const),

  // 👇 ここを追記！
  DB_CONNECTION: Env.schema.string(),

  MYSQL_HOST: Env.schema.string({ format: 'host' }),
  MYSQL_PORT: Env.schema.number(),
  MYSQL_USER: Env.schema.string(),
  MYSQL_PASSWORD: Env.schema.string.optional(),
  MYSQL_DB_NAME: Env.schema.string(),
})
