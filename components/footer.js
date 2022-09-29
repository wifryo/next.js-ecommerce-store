import { css } from '@emotion/react';

const footerStyles = css`
  margin-top: 20px;
  padding: 15px 20px;
  background-color: #15141d;
  display: flex;
  font-family: 'Montserrat Alternates', sans-serif;
  justify-content: center;
  color: #eaebe2;
  font-size: 10px;
`;

const logoStyles = css`
  color: #eaebe2;
  font-style: italic;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 800;
  font-style: italic;
  font-size: 10px;
  margin-right: 0.5em;
  display: inline-block;
`;

const footerSpacing = css`
  margin-right: 0.5em;
  display: inline-block;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <span css={footerSpacing}>copyright</span>
      <span css={logoStyles}>CRUNDSP</span>
      <span> 3682</span>
    </footer>
  );
}
