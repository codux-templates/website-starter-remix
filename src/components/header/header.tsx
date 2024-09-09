import classNames from 'classnames';
import { Link } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import commonStyles from '~/styles/common-styles.module.scss';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to="/" className={styles.logo}>
                LOGO
            </Link>
            <div className={styles.menu}>
                <Link
                    to="/"
                    className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                >
                    Home
                </Link>
                <Link
                    to="/contacts/0"
                    className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                >
                    Contacts
                </Link>
                <Link
                    to="/install-globals"
                    className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                >
                    Install-globals
                </Link>
                <Link
                    to="/upload-file"
                    className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                >
                    Upload file
                </Link>
                <Link
                    to="/cookie-page"
                    className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                >
                    Sessions
                </Link>
                <Link
                    to={ROUTES.about.to()}
                    className={classNames(commonStyles.secondaryButton, styles.menuButton)}
                >
                    About
                </Link>
            </div>
        </div>
    );
};
