import { sql } from './connect';

export type Products = {
  id: number;
  name: string;
  description: string;
  price: number;
};

// Get all products
export async function getProducts() {
  const products = await sql<Products[]>`
    SELECT * FROM products;
  `;
  return products;
}

// Get a single product by id
export async function getProductById(id: number) {
  const [product] = await sql<Products[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
}
