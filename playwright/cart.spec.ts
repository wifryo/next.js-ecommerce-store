import { expect, test } from '@playwright/test';

test('add to cart, change quantity, remove product test', async ({ page }) => {
  // go to single product page
  await page.goto('http://localhost:3000/products/1');

  // set count to 3 & add product to cart
  await page.locator('button', { hasText: '+' }).click({ clickCount: 2 });
  await page
    .locator('button', { hasText: 'ADD TO CART' })
    .click({ clickCount: 1 });

  // go to cart page
  await page.click('text=CART');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // expect chosen product to be in cart, with quantity 3
  await expect(page.locator('[data-test-id="cart-product-1"]')).toBeVisible;
  await expect(
    page.locator('[data-test-id="cart-product-quantity-1"]'),
  ).toHaveText('3');

  // remove product, expect 'Your cart is empty!'
  await page.locator('button', { hasText: 'X' }).click({ clickCount: 1 });
  await expect(
    page.locator('Empty cart alert! Load up on items or get out of my sight'),
  ).toBeVisible;
  await expect(page.locator('[data-test-id="cart-product-1"]')).not.toBeVisible;
});
