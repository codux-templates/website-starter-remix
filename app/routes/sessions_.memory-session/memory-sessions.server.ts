import { createMemorySessionStorage } from '@remix-run/node';

// Create memory-based session storage
export const { commitSession: commitMemorySession, getSession: getMemorySession } =
    createMemorySessionStorage({
        cookie: {
            name: 'memory-session',
            path: '/sessions/memory-session',
        },
    });
