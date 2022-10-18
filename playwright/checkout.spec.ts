import { expect, test } from '@playwright/test';

test('checkout flow test', async ({ page }) => {
  // go to single product page
  await page.goto('http://localhost:3000/products/1');

  // set count to 2 and add product to cart
  await page.locator('button', { hasText: '+' }).click({ clickCount: 1 });
  await page
    .locator('button', { hasText: 'ADD TO CART' })
    .click({ clickCount: 1 });

  // go to cart page
  await page.click('text=CART');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // expect chosen product to be in cart, with quantity 2
  await expect(page.locator('[data-test-id="cart-product-1"]')).toBeVisible;
  await expect(
    page.locator('[data-test-id="cart-product-quantity-1"]'),
  ).toHaveText('2');

  // go to cart page
  await page.click('text=CART');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // go to checkout page
  await page
    .locator('button', { hasText: 'checkout' })
    .click({ clickCount: 1 });
  await expect(page).toHaveURL('http://localhost:3000/checkout');

  // fill out the form
  await page.locator('[data-test-id="checkout-first-name"]').fill('Grub');
  await page.locator('[data-test-id="checkout-last-name"]').fill('Plubley');
  await page
    .locator('[data-test-id="checkout-email"]')
    .fill('blibbers@gmail.com');
  await page.locator('[data-test-id="checkout-address"]').fill('Egg Lane 44');
  await page.locator('[data-test-id="checkout-city"]').fill('Bogburgh');
  await page.locator('[data-test-id="checkout-postal-code"]').fill('2');
  await page.locator('[data-test-id="checkout-country"]').fill('Pruneland');
  await page
    .locator('[data-test-id="checkout-credit-card"]')
    .fill('1234567812345622');
  await page.locator('[data-test-id="checkout-expiration-date"]').fill('13/85');
  await page.locator('[data-test-id="checkout-security-code"]').fill('321');

  // confirm order & go to 'thank you' page
  await page
    .locator('button', { hasText: 'confirmulate' })
    .click({ clickCount: 1 });
  await expect(page).toHaveURL('http://localhost:3000/hey-thanks');
});
