import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useNavigate,
    useRouteError,
} from '@remix-run/react';
import { useEffect } from 'react';
import { SiteWrapper } from '~/components/site-wrapper/site-wrapper';
import { ROUTES } from '~/router/config';
import '~/styles/index.scss';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <SiteWrapper>
            <Outlet />
        </SiteWrapper>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();

    const isRouteError = isRouteErrorResponse(error);

    useEffect(() => {
        if (isRouteError) {
            let title: string = `${error.status} - ${error.statusText}`;
            let message: string | undefined = error.data?.message ?? undefined;

            if (error.status === 404) {
                title = 'Page Not Found';
                message = `Looks like this page doesn't exist. Make sure that link is correct.`;
            }

            // hack to handle https://github.com/remix-run/remix/issues/1136
            window.location.href = ROUTES.error.to(title, message);
        }
    }, [isRouteError, error]);

    if (isRouteError) {
        // we are navigating to the error page in the effect above
        return null;
    }

    return (
        <section
            style={{
                color: 'red',
                fontSize: 18,
                textAlign: 'center',
            }}
        >
            {String(error)}
        </section>
    );
}
