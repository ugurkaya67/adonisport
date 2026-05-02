import app from '@adonisjs/core/services/app'
import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  /**
   * Default connection used for all queries.
   */
  connection: env.get('DB_CONNECTION'),

  connections: {
    /**
     * SQLite connection (default).
     */

    sqlite: {
      client: 'better-sqlite3',

      connection: {
        filename: app.tmpPath('db.sqlite3'),
      },

      useNullAsDefault: true,

      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },

    // pg: {
    //   client: 'pg',
    //   connection: {
    //     host: env.get('PG_HOST'),
    //     port: Number(env.get('PG_PORT')),
    //     user: env.get('PG_USER'),
    //     password: env.get('PG_PASSWORD'),
    //     database: env.get('PG_DB_NAME'),
    //   },
    //   migrations: {
    //     naturalSort: true,
    //     paths: ['database/migrations'],
    //   },
    // debug: app.inDev,
    // },
  },
})

export default dbConfig
