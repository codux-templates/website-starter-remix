import { createBoard, Variant } from '@wixc3/react-board';
import styles from '../../../src/styles/ui-kit-core-components.module.scss';
import commonStyles from '~/styles/common-styles.module.scss';
import classNames from 'classnames';
import facebookIcon from '~/assets/svg/facebook.svg';
import twitterxIcon from '~/assets/svg/twitterx.svg';
import discordIcon from '~/assets/svg/discord.svg';
import youtubeIcon from '~/assets/svg/youtube.svg';
import mediumIcon from '~/assets/svg/medium.svg';
import githubIcon from '~/assets/svg/github.svg';
import { NavLink } from '@remix-run/react';
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
                    <div>
                        <Variant name="Primary Button">
                            <button className={classNames(commonStyles.primaryButton)}>
                                Primary
                            </button>
                        </Variant>
                        <span className={styles.buttonLabel}>$Primary</span>
                    </div>

                    <div>
                        <Variant name="Secondary Button">
                            <button className={classNames(commonStyles.secondaryButton)}>
                                Secondary
                            </button>
                        </Variant>
                        <span className={styles.buttonLabel}>$Secondary</span>
                    </div>
                </div>
                <hr className={styles.hrLight} />
                <h4 className={styles.sectionHeader}>MENU</h4>
                <Variant name="Menu">
                    <div className={classNames(styles.menu, styles.itemSpacing)}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => classNames({ [styles.active]: isActive })}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => classNames({ [styles.active]: isActive })}
                        >
                            About
                        </NavLink>
                    </div>
                </Variant>
                <hr className={styles.hrLight} />
                <h4 className={styles.sectionHeader}>ICONS</h4>
                <Variant name="Social Media Row">
                    <div className={styles.iconsContainer}>
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
                </Variant>
            </div>
        </MemoryRouter>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 284,
        windowHeight: 525,
    },
});
