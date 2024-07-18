const HOME = '/';
const ABOUT = '/about';

export const ROUTES = {
    home: { route: HOME, to: () => HOME },
    about: { route: ABOUT, to: () => ABOUT },
};

export type ROUTE_KEYS = keyof typeof ROUTES;
