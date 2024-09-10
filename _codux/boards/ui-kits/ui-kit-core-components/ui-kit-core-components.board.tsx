import { createBoard } from '@wixc3/react-board';
import styles from './ui-kit-core-components.board.module.scss';
import commonStyles from '~/styles/common-styles.module.scss';
import classNames from 'classnames';
import facebookIcon from '~/assets/svg/facebook.svg';
import twitterxIcon from '~/assets/svg/twitterx.svg';
import discordIcon from '~/assets/svg/discord.svg';
import youtubeIcon from '~/assets/svg/youtube.svg';
import mediumIcon from '~/assets/svg/medium.svg';
import githubIcon from '~/assets/svg/github.svg';
import { Link } from '@remix-run/react';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'UI Kit - Core Components',
    Board: () => (
        <MemoryRouter>
            <div className={styles.container}>
                <div>
                    <span className={styles.uikit}>UI Kit</span>
                    <span className={styles.coreComponents}> | Core Components</span>
                    <hr className={styles.hrSolid} />
                    <h3 className={styles.sectionTitle}>Buttons</h3>
                </div>
                
                <h4 className={styles.sectionHeader}>THEMED</h4>

                <div className={classNames(styles.buttonsContainer, styles.itemSpacing)}>
                    <div className={styles.buttonWrapper}>
                        <button className={classNames(commonStyles.primaryButton)}>Primary</button>
                        <span className={styles.buttonLabel}>$Primary</span>
                    </div>

                    <div className={classNames(styles.buttonWrapper)}>
                        <button className={classNames(commonStyles.secondaryButton)}>
                            Secondary
                        </button>
                        <span className={styles.buttonLabel}>$Secondary</span>
                    </div>
                </div>
                <hr className={styles.hrLight} />
                <h4 className={styles.sectionHeader}>MENU</h4>
                <div className={classNames(styles.menuContainer, styles.itemSpacing)}>
                    <Link to="" className={classNames(commonStyles.secondaryButton)}>
                        Home
                    </Link>
                    <Link to="" className={classNames(commonStyles.secondaryButton)}>
                        About
                    </Link>
                </div>
                <hr className={styles.hrLight} />
                <h4 className={styles.sectionHeader}>ICONS</h4>
                <div className={styles.buttonsContainer}>
                    <a href="/">
                        <img className={styles.icon} src={twitterxIcon} alt="twitter" />
                    </a>
                    <a href="/">
                        <img className={styles.icon} src={facebookIcon} alt="facebook" />
                    </a>
                    <a href="/">
                        <img className={styles.icon} src={discordIcon} alt="discord" />
                    </a>
                    <a href="/">
                        <img className={styles.icon} src={youtubeIcon} alt="youtube" />
                    </a>
                    <a href="/">
                        <img className={styles.icon} src={mediumIcon} alt="medium" />
                    </a>
                    <a href="/">
                        <img className={styles.icon} src={githubIcon} alt="github" />
                    </a>
                </div>
            </div>
        </MemoryRouter>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 291,
    },
});
