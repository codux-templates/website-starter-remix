import { Link, useSearchParams } from '@remix-run/react';
import styles from './error.module.scss';
import { ROUTES } from '~/router/config';
import commonStyles from '../../src/styles/common-styles.module.scss';

const defaultErrorMessage = 'Ooops, something went wrong';

export default function ErrorPage() {
    const [searchParams] = useSearchParams();

    const errorTitle = searchParams.get('title') ?? defaultErrorMessage;
    const errorMessage = searchParams.get('message');

    return (
        <div className={styles.root}>
            <h1>{errorTitle}</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <Link className={commonStyles.secondaryButton} to={ROUTES.home.to()}>
                Navigate to Home Page
            </Link>
        </div>
    );
}
