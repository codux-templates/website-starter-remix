import { Cookie, createCookie } from '@remix-run/node';

export const userPrefs: Cookie = createCookie('user-prefs', {
    maxAge: 604_800, // one week
    path: '/sessions/cookie-page',
});
