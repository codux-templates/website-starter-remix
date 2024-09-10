import { createSessionStorage } from '@remix-run/node';

// Create custom session storage (for example, store in memory)
export const { getSession: getSessionStorage, commitSession: commitSessionStorage } =
    createSessionStorage({
        cookie: {
            name: 'session-storage',
            secrets: ['custom-secret'],
            sameSite: 'lax',
            path: '/sessions/session-storage',
            httpOnly: true,
        },
        async createData(data) {
            // Custom storage logic for creating session data
            return JSON.stringify(data);
        },
        async readData(id) {
            // Custom logic for reading session data
            return JSON.parse(id);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async updateData(id, data) {
            // Custom logic for updating session data
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async deleteData(id) {
            // Custom logic for deleting session data
        },
    });
