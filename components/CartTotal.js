import { css } from '@emotion/react';

// isItemInCart is a Boolean
const cartTotalStyles = (isItemInCart) => css`
  padding: 5px;
  transition: all 0.5s ease-in-out;
  height: 20px;
  ${!isItemInCart &&
  css`
    height: 0;
    padding: 0;
    overflow: hidden;
  `};
`;

export default function CartTotal(props) {
  const isItemInCart = !props.cart?.length ? true : false;

  return (
    <div css={cartTotalStyles(isItemInCart)}>
      <span>bop</span> <button>yes</button>
      plap
    </div>
  );
}
