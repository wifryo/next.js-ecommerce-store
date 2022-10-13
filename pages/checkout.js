import { css } from '@emotion/react';
import Head from 'next/head';

const headerStyles = css``;

const mainStyles = css`
  margin: 0px, 20px, 0px, 20px;
  min-height: calc(100vh - 395px);
  margin-right: calc(50vw - 370px);
  margin-left: calc(50vw - 370px);
`;

const formStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const halfWidthInputContainerStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const fullWidthInputStyles = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
  input {
    padding: 5px;
    margin-top: 5px;
    color: #eaebe2;

    border: 1px solid #eaebe2;
    background-color: transparent;
  }
  label {
    font-size: 12px;
    font-weight: 400;
  }
  input::placeholder {
    letter-spacing: 1px;
  }
  input:hover {
    transition: all 300ms ease;
    border: 1px solid #4c4a52;
  }
`;

const fullWidthInputAllegianceStyles = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
  input {
    padding: 5px;
    margin-top: 5px;
    font-family: 'Montserrat Alternates', sans-serif;
    border: 1px solid #eaebe2;
    background-color: transparent;
    color: #eaebe2;
  }
  label {
    font-size: 12px;
    font-weight: 400;
  }
  input:hover {
    transition: all 300ms ease;
    border: 1px solid #4c4a52;
  }
`;

const halfWidthInputStyles = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 45%;
  input {
    padding: 5px;
    margin-top: 5px;
    border: 1px solid #eaebe2;
    background-color: transparent;
    color: #eaebe2;
    font-family: 'Montserrat Alternates', sans-serif;
  }

  label {
    font-size: 12px;
    font-weight: 400;
    color: #eaebe2;
  }
  input::placeholder {
    letter-spacing: 2px;
  }
  input:hover {
    transition: all 300ms ease;
    border: 1px solid #4c4a52;
  }
`;

const paymentContainerStyles = css`
  margin-top: 50px;
`;

const confirmButtonStyles = css`
  font-family: 'Montserrat Alternates', sans-serif;
  padding: 15px 10px;
  border: 2px solid #000000;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  margin-top: 50px;
  width: 500px;
  background-color: #000000;
  color: white;
  &:hover {
    background-image: url('/crundsp-eye.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: #c9c7c7;
    color: #000000;
    font-weight: 1000;
  }
`;
const summaryBoxStyles = css`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`;
const summaryRowStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;

export default function Checkout(props) {
  return (
    <>
      <Head>
        <title>products</title>
        <meta name="description" content="products" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
        </style>
      </Head>

      <div css={mainStyles}>
        <h1 css={headerStyles}>checkout</h1>

        <div css={formStyles}>
          <div css={summaryBoxStyles}>
            <h2>order summary</h2>
            <div css={summaryRowStyles}>
              <div>subtotal</div>
              <div>{!props.cart?.length ? 0 : 'placeholder'}</div>
            </div>
            <div css={summaryRowStyles}>
              <div>postage</div>
              <div>{!props.cart?.length ? 0 : '§ 1000'}</div>
            </div>
            <div css={summaryRowStyles}>
              <div>total</div>
              <div>
                {!props.cart?.length ? 0 : '§ ' + 'placeholder' + 29.99}
              </div>
            </div>
          </div>
          <form /* onSubmit={handleSubmit} */>
            <h2>where to, tho?</h2>
            <div css={halfWidthInputContainerStyles}>
              <div css={halfWidthInputStyles}>
                <label htmlFor="first-name">forename</label>
                <input
                  id="first-name"
                  data-test-id="checkout-first-name"
                  required
                />
              </div>
              <div css={halfWidthInputStyles}>
                <label htmlFor="last-name">surname</label>
                <input
                  id="last-name"
                  data-test-id="checkout-last-name"
                  required
                />
              </div>
            </div>
            <div css={fullWidthInputStyles}>
              <label htmlFor="email">email</label>
              <input id="email" data-test-id="checkout-email" required />
            </div>
            <div css={fullWidthInputStyles}>
              <label htmlFor="address">address</label>
              <input id="address" data-test-id="checkout-address" required />
            </div>
            <div css={halfWidthInputContainerStyles}>
              <div css={halfWidthInputStyles}>
                <label htmlFor="city">conurbation</label>
                <input id="city" data-test-id="checkout-city" required />
              </div>
              <div css={halfWidthInputStyles}>
                <label htmlFor="postal-code">postcode</label>
                <input
                  id="postal-code"
                  data-test-id="checkout-postal-code"
                  required
                />
              </div>
            </div>
            <div css={halfWidthInputContainerStyles}>
              <div css={halfWidthInputStyles}>
                <label htmlFor="country">nation / habitation ID</label>
                <input id="country" data-test-id="checkout-country" required />
              </div>
              <div css={halfWidthInputStyles}>
                <label htmlFor="planet">planet</label>
                <input id="planet" data-test-id="checkout-planet" required />
              </div>
            </div>

            <div css={paymentContainerStyles}>
              <h2>there's always a cost</h2>
              <div css={fullWidthInputStyles}>
                <label htmlFor="credit-card-number">card number</label>
                <input
                  id="credit-card-number"
                  data-test-id="checkout-credit-card"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </div>
              <div css={halfWidthInputContainerStyles}>
                <div css={halfWidthInputStyles}>
                  <label htmlFor="expiration-date">eggspiration date 🥚</label>
                  <input
                    id="expiration-date"
                    data-test-id="checkout-expiration-date"
                    placeholder="MM / YY"
                    required
                  />
                </div>
                <div css={halfWidthInputStyles}>
                  <label htmlFor="security-code">security cod 🐟</label>
                  <input
                    id="security-code"
                    data-test-id="checkout-security-code"
                    placeholder="CVC"
                    required
                  />
                </div>
              </div>
              <div css={fullWidthInputAllegianceStyles}>
                <label htmlFor="pledge-of-allegiance">
                  pledge of allegiance to crebnor, cosmic regent
                </label>
                <input
                  id="pledge-of-allegiance"
                  data-test-id="pledge-of-allegiance"
                  placeholder="I hereby pledge/reiterate my undying loyalty..."
                  required
                />
              </div>
            </div>

            <button
              data-test-id="checkout-confirm-order"
              css={confirmButtonStyles}
            >
              confirmulate
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
