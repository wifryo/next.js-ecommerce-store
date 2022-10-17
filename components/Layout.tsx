import Head from 'next/head';
import { CartItem } from '../utils/cookies';
import Footer from './Footer';
import Header from './Header';

type Props = {
  cart?: CartItem;
};

type ChildrenProps = {
  children: JSX.Element;
};

export default function Layout(props: Props & ChildrenProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header cart={props.cart} />

      <main>{props.children}</main>

      <Footer />
    </>
  );
}
