import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { animals } from '../../database/animals';

const animalStyles = css`
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 20px;

  h2 {
    margin-top: 0;
  }

  & + & {
    margin-top: 25px;
  }
`;

export default function Animals(props) {
  return (
    <>
      <Head>
        <title>All of the animals</title>
        <meta name="description" content="List page of all animals" />
      </Head>

      <h1>Animals</h1>

      {props.animals.map((animal) => {
        return (
          <div key={`animal-${animal.id}`} css={animalStyles}>
            <h2>
              <Link href={`/animals/${animal.id}`}>{animal.name}</Link>
            </h2>

            <Link href={`/animals/${animal.id}`}>
              <a>
                <Image
                  src={`/${animal.id}-${animal.name.toLowerCase()}.jpeg`}
                  alt=""
                  width="150"
                  height="150"
                />
              </a>
            </Link>

            <div>Type: {animal.type}</div>
            <div>Accessory: {animal.accessory}</div>
          </div>
        );
      })}
    </>
  );
}

// Anything inside of this function will
// ONLY be run on the server (in Node.js)
//
// This means you can access things like `fs`
//
// Note: this function can only be exported
// from files within pages/
export function getServerSideProps() {
  return {
    // Anything that you write in this props object
    // will become the props that are passed to
    // the `Animals` page component above
    props: {
      // First prop, containing all animals
      animals: animals,
      // Second prop, example
      abc: 123,
    },
  };
}
