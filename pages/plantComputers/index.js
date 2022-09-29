import Head from 'next/head';
import Link from 'next/link';
import { plantComputers } from '../../database/plantComputers';

export default function PlantComputers(props) {
  return (
    <>
      <Head>
        <title>Plant Computers</title>
        <meta name="description" content="Plant computers" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
        </style>
      </Head>

      {props.plantComputers.map((item) => {
        return (
          <div key={`item-div-${item.id}`}>
            <h2>
              <Link href={`/plantcomputers/${item.id}`}>
                <a>{item.name}</a>
              </Link>
            </h2>
            <div>
              {item.icon} ⭐️ {item.stars}
            </div>
          </div>
        );
      })}
    </>
  );
}

export function getServerSideProps(context) {
  console.log(context.req.cookies.stars);

  // get the cookies from the request object and parse it if is not undefined
  const parsedCookies = context.req.cookies.stars
    ? JSON.parse(context.req.cookies.stars)
    : [];

  // loop over the database and add a new property called stars with either the value in the cookies or 0
  const fruits = fruitsDatabase.map((fruit) => {
    return {
      ...fruit,
      stars:
        parsedCookies.find(
          (cookieFruitObject) => fruit.id === cookieFruitObject.id,
        )?.stars || 0,
    };
  });

  return {
    props: {
      fruits: fruits,
    },
  };
}
