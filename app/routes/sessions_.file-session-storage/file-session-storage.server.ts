import { createFileSessionStorage } from '@remix-run/node';

// Create file-based session storage
export const { getSession, commitSession } = createFileSessionStorage({
    dir: './sessions/file-session-storage',
    cookie: { name: 'sessionId', path: '/sessions/file-session-storage' },
});
