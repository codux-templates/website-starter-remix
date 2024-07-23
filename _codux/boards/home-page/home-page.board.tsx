import { createBoard } from '@wixc3/react-board';
import { createRemixStub } from '@remix-run/testing';
import { Outlet } from '@remix-run/react';
import { Layout } from '../../../app/root';
import HomePageComponent from '../../../app/routes/_index';

const HomePage = createRemixStub([
    {
        Component: () => {
            return (
                <Layout>
                    <Outlet />
                </Layout>
            );
        },
        children: [
            {
                path: '/',
                Component: HomePageComponent,
            },
            {
                path: '/about',
                Component: HomePageComponent,
            },
        ],
    },
]);

export default createBoard({
    name: 'HomePage',
    Board: () => <HomePage />,
    environmentProps: {
        canvasWidth: 840,
        windowWidth: 1005,
    },
});
