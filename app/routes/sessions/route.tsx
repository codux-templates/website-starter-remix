import { Link } from '@remix-run/react';
import commonStyles from '~/styles/common-styles.module.scss';
import styles from '../../../src/components/header/header.module.scss';
import classNames from 'classnames';

export default function Sessions() {
    return (
        <div>
            <h1>Sessions</h1>
            <p>Here we will show how to use sessions/cookies with Remix.</p>
            <p>Click on the link you want to check out</p>
            <ul>
                <li>
                    <Link
                        to="/sessions/file-session-storage"
                        className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                    >
                        File Session Storage
                    </Link>
                </li>
                <li>
                    <Link
                        to="/sessions/cookie-page"
                        className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                    >
                        Cookie Page - show/hide banner
                    </Link>
                </li>
                <li>
                    <Link
                        to="/sessions/cookie-session"
                        className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                    >
                        Cookie Session Page
                    </Link>
                </li>
                <li>
                    <Link
                        to="/sessions/memory-session"
                        className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                    >
                        Memory Session Page
                    </Link>
                </li>
            </ul>
        </div>
    );
}
