import Cookies from 'js-cookie';

export function getParsedCookie(key: string): CartItem[] | undefined {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}

export type CartItem = {
  id: number;
  quantity: number;
};

export function setStringifiedCookie(key: string, value: CartItem[]) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key: string) {
  Cookies.remove(key);
}
