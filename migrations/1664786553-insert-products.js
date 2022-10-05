const products = [
  {
    name: 'T-700-PLOP',
    description:
      'the CRUNDSP T-7800-PLOP - the model used by Crembus Bactria in the hit spuerfest tragedy “Crumbutts”. Reliable, low power usage, and capable of 60,000 cranchers.',
    price: '5000',
  },
  {
    first_name: 'T-2200-GLARP',
    description:
      'the CRUNDSP T-2200-P-GLARP - a workdolphin assistant, with additional photosynthesis enhancements. capable of 50,000 - 100,000 cranchers, dependent on local atmospheric conditions.',
    price: '7000',
  },
  {
    name: 'CRUNDSP H-66-HARAMBULAY',
    description: `the CRUNDSP H-66-HARAMBULAY - the last member of an otherwise-discontinued line, its popularity among the creb workers of plee has led to the harambulay’s revival in modern times.`,
    price: '2500',
  },
  {
    name: 'CRUNDSP CHANDROMAT-5000',
    description: `the CRUNDSP CHANDROMAT-5000 - based on the hyperpremium glope-66 paradigm, its cranchers capability is - quite literally - off the scale. we hope to develop the necessary measurement technology within the next cycle.`,
    price: '10000',
  },
  {
    name: 'CRUNDSP CHANDROMAT-BEEP',
    description: `the CRUNDSP CHANDROMAT-BEEP - based on the regulation issue glope-25 paradigm, this model is appropriate for standard household usage. it will run splendytaps without a problem.`,
    price: '1500',
  },
  {
    name: 'CRUNDSP WHAMMER-82',
    description: `the CRUNDSP WHAMMER-82 - an experimental model enhanced with gleeb snips, this computer is intended for developmental use only.`,
    price: '10000',
  },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO products ${sql(products, 'name', 'description', 'price')}
  `;
};

exports.down = async (sql) => {
  for (const product of products) {
    await sql`
      DELETE FROM
        products
      WHERE
        name = ${product.name} AND
        description = ${product.description} AND
        price = ${product.price}
    `;
  }
};
