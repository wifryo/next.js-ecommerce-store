import Cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';
import { crumpsDatabase } from '../../database/crumps';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function crumps(props) {
  if (props.error) {
    return (
      <div>
        <Head>
          <title>product not found</title>
          <meta name="description" content="product not found" />
        </Head>
        <h1>{props.error}</h1>
        Sorry, try the <Link href="/index">home page</Link>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Product single page</title>
        <meta name="description" content="Product single page" />
      </Head>

      <h1>{props.singleCrump.name}</h1>
      <div>{props.singleCrump.icon}</div>
      <button
        onClick={() => {
          // getting the value of the cookie stars
          const currentCookieValue = getParsedCookie('stars');

          // if there is no cookie we initialize the value with a -1
          if (!currentCookieValue) {
            setStringifiedCookie('stars', [
              { id: props.singleCrump.id, stars: -1 },
            ]);
            return;
          }

          // find the object that match the id of the page
          const foundCookie = currentCookieValue.find(
            (cookieCrumpObject) =>
              cookieCrumpObject.id === props.singleCrump.id,
          );

          // if a object is not found i add a new object
          if (!foundCookie) {
            currentCookieValue.push({ id: props.singleCrump.id, stars: -1 });
          } else {
            // if a object is found i update the stars
            foundCookie.stars--;
          }
          // set the new value of the cookie
          setStringifiedCookie('stars', currentCookieValue);
        }}
      >
        ⭐️ -
      </button>
      <button
        onClick={() => {
          // getting the value of the cookie stars
          const currentCookieValue = getParsedCookie('stars');

          // if there is no cookie we initialize the value with a 1
          if (!currentCookieValue) {
            setStringifiedCookie('stars', [
              { id: props.singleCrump.id, stars: 1 },
            ]);
            return;
          }

          // find the object that match the id of the page
          const foundCookie = currentCookieValue.find(
            (cookieCrumpObject) =>
              cookieCrumpObject.id === props.singleCrump.id,
          );

          // if a object is not found i add a new object
          if (!foundCookie) {
            currentCookieValue.push({ id: props.singleCrump.id, stars: 1 });
          } else {
            // if a object is found i update the stars
            foundCookie.stars++;
          }
          // set the new value of the cookie
          setStringifiedCookie('stars', currentCookieValue);
        }}
      >
        ⭐️ +
      </button>
    </div>
  );
}

export function getServerSideProps(context) {
  const crumpId = context.params.crumpId;

  const crumpsBlap = crumpsDatabase;

  const singleCrump = crumpsBlap.find((crump) => {
    return crump.id === crumpId;
  });

  if (typeof singleCrump === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Crump not found',
      },
    };
  }

  return { props: { singleCrump: singleCrump } };
}
