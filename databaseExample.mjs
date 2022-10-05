import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

console.log(
  await sql`
    SELECT * FROM next_js_ecommerce_store;
  `,
);

// This is only for the example, in your code you will want
// a persistent connection to the database
await sql.end();
