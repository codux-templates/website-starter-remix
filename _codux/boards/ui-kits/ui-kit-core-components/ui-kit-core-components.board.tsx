import { createBoard } from '@wixc3/react-board';
import styles from './ui-kit-core-components.board.module.scss';
import commonStyles from '~/styles/common-styles.module.scss';
import classNames from 'classnames';
import editIcon from '~/assets/svg/edit.svg';
import facebookIcon from '~/assets/svg/facebook.svg';
import twitterxIcon from '~/assets/svg/twitterx.svg';
import discordIcon from '~/assets/svg/discord.svg';
import youtubeIcon from '~/assets/svg/youtube.svg';
import mediumIcon from '~/assets/svg/medium.svg';
import githubIcon from '~/assets/svg/github.svg';
import { Link } from '@remix-run/react';

export default createBoard({
    name: 'UI Kit - Core Components',
    Board: () => (
        <div className={styles.container}>
            <div className={styles.uiKitHeader}>
                <span className={styles.uikit}>UI Kit</span>
                <span className={styles.coreComponents}>| Core Components</span>
            </div>
            <hr className={styles.hrSolid} />
            <h3 className={styles.sectionTitle}>
                Buttons
                <img src={editIcon} alt="edit" className={styles.editIcon} />
            </h3>
            <h4 className={styles.sectionHeader}>THEMED</h4>

            <div className={styles.buttonsContainer}>
                <button className={classNames(commonStyles.primaryButton, styles.buttonSizing)}>
                    Primary
                </button>
                <button className={classNames(commonStyles.secondaryButton, styles.buttonSizing)}>
                    Secondary
                </button>
            </div>
            <div className={styles.typographyExample}></div>
            <hr className={styles.hrLight} />

            <h4 className={styles.sectionHeader}>MENU</h4>

            <hr className={styles.hrLight} />
            <hr className={styles.hrLight} />
            <h4 className={styles.sectionHeader}>ICONS</h4>
            <div className={styles.buttonsContainer}>
                <img className={styles.icon} src={twitterxIcon} alt="twitter" />
                <img className={styles.icon} src={facebookIcon} alt="facebook" />
                <img className={styles.icon} src={discordIcon} alt="discord" />
                <img className={styles.icon} src={youtubeIcon} alt="youtube" />
                <img className={styles.icon} src={mediumIcon} alt="medium" />
                <img className={styles.icon} src={githubIcon} alt="github" />
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 362,
    },
});