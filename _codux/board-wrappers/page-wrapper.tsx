import { type PropsWithChildren } from 'react';
import { createRemixStub } from '@remix-run/testing';
import App from 'app/root';
import { ROUTES } from '~/router/config';

// @remix-run/testing doesn't export this type
type StubRouteObject = Parameters<typeof createRemixStub>[0][0];
type RouteParams = Omit<StubRouteObject, 'Component' | 'children' | 'path'>;

interface PageWrapperProps extends PropsWithChildren {
    initialPath?: string;
    rootRouteParams?: RouteParams;
    pageRouteParams?: RouteParams;
}

export function PageWrapper(props: PageWrapperProps) {
    const { pageRouteParams = {}, rootRouteParams = {}, initialPath = '/' } = props;

    const RemixStub = createRemixStub([
        {
            ...rootRouteParams,
            Component: () => <App />,
            id: 'root',
            children: [
                ...Object.values(ROUTES).map(({ path }) => ({
                    ...pageRouteParams,
                    path,
                    Component: () => props.children,
                })),
            ],
        },
    ]);

    return <RemixStub initialEntries={[initialPath]} />;
}
