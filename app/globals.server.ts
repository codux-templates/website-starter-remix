// server.ts
import { installGlobals } from '@remix-run/node';

// Install the necessary global APIs (e.g., fetch) on the server
installGlobals();

export interface myResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Example: Using fetch in a Node.js environment
export async function fetchExample(): Promise<myResponse> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data: myResponse = await response.json();
    // console.log('Fetched data:', data);
    return data;
}
