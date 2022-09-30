import Cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';
import { miscellanysDatabase } from '../../database/miscellanys';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function miscellanys(props) {
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

      <h1>{props.singleMiscellany.name}</h1>
      <div>{props.singleMiscellany.icon}</div>
      <button
        onClick={() => {
          // getting the value of the cookie stars
          const currentCookieValue = getParsedCookie('stars');

          // if there is no cookie we initialize the value with a -1
          if (!currentCookieValue) {
            setStringifiedCookie('stars', [
              { id: props.singleMiscellany.id, stars: -1 },
            ]);
            return;
          }

          // find the object that match the id of the page
          const foundCookie = currentCookieValue.find(
            (cookieMiscellanyObject) =>
              cookieMiscellanyObject.id === props.singleMiscellany.id,
          );

          // if a object is not found i add a new object
          if (!foundCookie) {
            currentCookieValue.push({
              id: props.singleMiscellany.id,
              stars: -1,
            });
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
              { id: props.singleMiscellany.id, stars: 1 },
            ]);
            return;
          }

          // find the object that match the id of the page
          const foundCookie = currentCookieValue.find(
            (cookieMiscellanyObject) =>
              cookieMiscellanyObject.id === props.singleMiscellany.id,
          );

          // if a object is not found i add a new object
          if (!foundCookie) {
            currentCookieValue.push({
              id: props.singleMiscellany.id,
              stars: 1,
            });
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
  const miscellanyId = context.params.miscellanyId;

  const miscellanysBlap = miscellanysDatabase;

  const singleMiscellany = miscellanysBlap.find((miscellany) => {
    return miscellany.id === miscellanyId;
  });

  if (typeof singleMiscellany === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Miscellany not found',
      },
    };
  }

  return { props: { singleMiscellany: singleMiscellany } };
}
