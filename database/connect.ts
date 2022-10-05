import { config } from 'dotenv-safe';
import postgres from 'postgres';

// This loads all environment variables from a .env file
// for all code after this line
config();

// Type needed for the connection function below
declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        // Convert all column names to camelCase
        column: {
          to: postgres.fromCamel,
          from: postgres.toCamel,
        },

        // Future version of postgres will support this
        // type of conversion setting
        // ...postgres.camel,
        undefined: null,
      },
    });
  }
  return globalThis.postgresSqlClient;
}

// Connect to PostgreSQL
export const sql = connectOneTimeToDatabase();
