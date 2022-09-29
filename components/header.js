import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  background-color: #15141d;
  margin: 0px, 20px, 0px, 20px;
`;

const topLineContainerStyles = css`
  display: flex;
  justify-content: space-between;
`;

const logoStyles = css`
  font-family: 'J-LOG';
  color: #eaebe2;
  font-style: italic;
  padding: 10px;
  a {
    text-decoration: none;
  }
  a:visited {
    color: #eaebe2;
  }
`;

const navStyles = css`
  margin: 0px;
  padding: 10px;
  a {
    color: #eaebe2;
  }
  > a + a {
    margin-left: 13px;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div css={topLineContainerStyles}>
        <div css={logoStyles}>
          <Link href="/">CRUNDSP</Link>
        </div>
        <nav css={navStyles}>
          <Link href="/animals">Animals</Link>
          <Link href="/about">About</Link>
          <Link href="/fruits">Fruits</Link>
          <Link href="/team">Team Index</Link>
          <Link href="/team/list">Team List</Link>

          {/*
          Using an <a> tag is not best practice for
          most links (it will be slower) - use a
          Link component instead
          <a href="/about">About</a>
        */}
        </nav>
      </div>
    </header>
  );
}
