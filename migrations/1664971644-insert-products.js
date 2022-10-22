const products = [
  {
    name: 'T-700-PLOP',
    description:
      'the CRUNDSP T-7800-PLOP - the model used by Crembus Bactria in the hit spuerfest tragedy “Crumbutts”. Reliable, low power usage, and capable of 60,000 cranchers.',
    price: 5000,
  },
  {
    name: 'T-2200-GLARP',
    description:
      'the CRUNDSP T-2200-P-GLARP - a workdolphin assistant, with additional photosynthesis enhancements. capable of 50,000 - 100,000 cranchers, dependent on local atmospheric conditions.',
    price: 7000,
  },
  {
    name: 'CRUNDSP H-66-HARAMBULAY',
    description: `the CRUNDSP H-66-HARAMBULAY - the last member of an otherwise-discontinued line, its popularity among the creb workers of plee has led to the harambulay’s revival in modern times.`,
    price: 2500,
  },
  {
    name: 'CRUNDSP CHANDROMAT-5000',
    description: `the CRUNDSP CHANDROMAT-5000 - based on the hyperpremium glope-66 paradigm, its cranchers capability is - quite literally - off the scale. we hope to develop the necessary measurement technology within the next cycle.`,
    price: 10000,
  },
  {
    name: 'CRUNDSP CHANDROMAT-BEEP',
    description: `the CRUNDSP CHANDROMAT-BEEP - based on the regulation issue glope-25 paradigm, this model is appropriate for standard household usage. it will run splendytaps without a problem.`,
    price: 1500,
  },
  {
    name: 'CRUNDSP WHAMMER-82',
    description: `the CRUNDSP WHAMMER-82 - an experimental model enhanced with gleeb snips, this computer is intended for developmental use only.`,
    price: 10000,
  },
  {
    name: 'borgus beef coffee table fountain',
    description: `that’ll leave a mark! prove YOU’RE the “roast toasterson” of your community with the new borgus beef coffee table fountain - made with real artificial beef!`,
    price: 5000,
  },
  {
    name: 'anti-floatson neon slurp system',
    description: `“where’s whengus?” “crendemulating”

    don’t be that guy. crendemulating when the galaxy is so imperilled? put a stop to such nonsense NOW, with the CRUNDSP *anti-floatson neon slurp system. s*top those floaty bastards in their tracks!`,
    price: 7000,
  },
  {
    name: 'whazz juice',
    description: `the new CRUNDSP whazz juice: is your dinner, application session, or tinque party missing that certain something? “whazz” it up! may cause dilation of eyes, thoractic ducts, or time. Do not use if experiencing a sense of foreboding.`,
    price: 2500,
  },
  {
    name: 'eccentric squenchloader',
    description: `the eccentric squenchloader is BACK! refurbished, updated and packed with as many new features are there are species of insect left on planet earth (that’s right - 4!), you’ll remember why this is, and always will be, a classic of blurpfian engineering design.`,
    price: 10000,
  },
  {
    name: 'fairy dust bread',
    description: `the incursion of the eldritch horrors of the late 23nd century was no laughing matter - but at least it gave rise (!) to fairy dust bread. not recommended for direct descendants of veterans of the conflict.`,
    price: 1500,
  },
  {
    name: 'chair',
    description: `one of our enduring classics, the CRUNDSP chair continues to defy its critics, most bees, and two natural laws. sit in one today*!`,
    price: 10000,
  },
  {
    name: 'universe bowl',
    description: `while stocks last - edible consciousness, from CRUNDSP! have you ever wondered what the manifestation of consciousness really tastes like? sourced from minimally-ethical chundral outposts in the parj-barlop belt, these bowls of [noun] pack a real wallop.`,
    price: 100000,
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
