import { createCookieSessionStorage } from '@remix-run/node';

export const { getSession: getCookieSession, commitSession: commitCookieSession } =
    createCookieSessionStorage({
        cookie: {
            name: 'cookie-sessions',
            secrets: ['another-secret'],
            path: '/sessions/cookie-session',
        },
    });
