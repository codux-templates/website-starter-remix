import { createBoard } from '@wixc3/react-board';
import { createRemixStub } from '@remix-run/testing';
import { Outlet } from '@remix-run/react';
import { Layout } from '../../../app/root';
import AboutPageComponent from '../../../app/routes/about';

const AboutPage = createRemixStub([
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
                Component: AboutPageComponent,
            },
            {
                path: '/about',
                Component: AboutPageComponent,
            },
        ],
    },
]);

export default createBoard({
    name: 'AboutPage',
    Board: () => <AboutPage />,
    environmentProps: {
        canvasWidth: 840,
        windowWidth: 1005,
    },
});
