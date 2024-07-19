import { createBoard } from '@wixc3/react-board';
import { createRemixStub } from '@remix-run/testing';
import { Outlet } from '@remix-run/react';
import { Layout } from '../../../app/root';
import HomePage from '../../../app/routes/_index';
import AboutPage from '../../../app/routes/about';

const App = createRemixStub([
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
                Component: HomePage,
            },
            {
                path: '/about',
                Component: AboutPage,
            },
        ],
    },
]);

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 840,
        windowWidth: 1135,
    },
});
