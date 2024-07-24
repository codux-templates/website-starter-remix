import { createBoard } from '@wixc3/react-board';
import ErrorPage from '../../../app/routes/error';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';

export default createBoard({
    name: 'Page - Error 404',
    Board: () => (
        <PageWrapper initialPath="/error?title=Page Not Found">
            <ErrorPage />
        </PageWrapper>
    ),
});
