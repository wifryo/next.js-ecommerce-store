import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const headerStyles = css`
  background-color: #15141d;
  margin: 0px, 20px, 0px, 20px;
  padding-bottom: 50px;
`;

const imageContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const imageStyles = css`
  color: #eaebe2;
  opacity: 0.1;
`;

const topLineContainerStyles = css`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`;

const logoStyles = css`
  color: #eaebe2;
  font-style: italic;
  padding: 10px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 800;
  font-style: italic;
  font-size: 30px;
  a {
    text-decoration: none;
  }
  a:visited {
    color: #eaebe2;
  }
`;

const navStyles = css`
  font-family: 'Montserrat Alternates', sans-serif;
  align-self: center;
  margin: 0px;
  padding: 10px;

  a {
    color: #eaebe2;
    text-decoration: none;
    font-size: 12px;
  }
  > a + a {
    margin-left: 13px;
  }
`;

const cartStyles = css`
  color: #eaebe2;
  text-decoration: none;
  font-size: 12px;
  margin-left: 13px;
  cursor: pointer;
`;

export default function Header(props) {
  const cartTotal = () => {
    return props.cart?.reduce((counter, item) => counter + item.cart, 0);
  };

  return (
    <header css={headerStyles}>
      <div css={topLineContainerStyles}>
        <div css={logoStyles}>
          <Link href="/">CRUNDSP</Link>
        </div>
        <nav css={navStyles}>
          <Link href="/products">
            <a data-test-id="products-link">products</a>
          </Link>
          <Link href="/about">about</Link>
          <Link href="/team">team</Link>
          <Link href="/contact">contact</Link>
          <Link data-test-id="cart-link" href="/cart">
            <a data-test-id="cart-link">
              <span css={cartStyles}> cart</span>
              <span css={cartStyles} data-test-id="cart-count">
                {' '}
                [{props.cart ? cartTotal() : 0}]
              </span>
            </a>
          </Link>
        </nav>
      </div>
      <div css={imageContainer}>
        <Image
          css={imageStyles}
          src="/crundsp-eye.svg"
          alt="picture of stylised eye"
          width="300"
          height="200"
        />
      </div>
    </header>
  );
}
