import { createBoard } from '@wixc3/react-board';
import styles from './ui-kit-foundation.board.module.scss';
import editIcon from '~/assets/svg/edit.svg';
import classNames from 'classnames';

export default createBoard({
    name: 'UI Kit - Foundation',
    Board: () => (
        <div className={styles.container}>
            <div className={styles.uiKitHeader}>
                <span className={styles.uikit}>UI Kit</span>
                <span className={styles.foundation}>| Foundation</span>
            </div>
            <hr className={styles.hrSolid} />
            <h3 className={styles.sectionTitle}>
                Typography
                <img src={editIcon} alt="edit" className={styles.editIcon} />
            </h3>

            <h4 className={styles.sectionHeader}>Heading</h4>
            <div className={styles.typographyExample}>
                <h1 className={classNames(styles.titleFont, styles.typographySpacing)}>
                    Headind 1
                </h1>
                <div className={styles.variantWrapper}>
                    <p className={styles.variantName}>
                        $title-font:{' '}
                        <span className={styles.fontDetails}>DM Sans (300) / 4rem / 1.4rem </span>
                    </p>
                </div>
            </div>
            <div className={styles.typographyExample}>
                <h2 className={classNames(styles.smallTitleFont, styles.typographySpacing)}>
                    Heading 6
                </h2>
                <div className={styles.variantWrapper}>
                    <p className={styles.variantName}>
                        $small-title-font:{' '}
                        <span className={styles.fontDetails}>DM Sans (400) / 1rem / 1.4rem </span>
                    </p>
                </div>
            </div>
            <hr className={styles.hrLight} />
            <h4 className={styles.sectionHeader}>Paragraph</h4>
            <div className={styles.typographyExample}>
                <p className={classNames(styles.paragraphFont, styles.typographySpacing)}>
                    We ignite opportunity by setting the world in motion. 0123456789
                </p>
                <div className={styles.variantWrapper}>
                    <p className={styles.variantName}>
                        $paragraph-Font:{' '}
                        <span className={styles.fontDetails}>DM Sans (300) / 1.3rem / 1.3rem </span>
                    </p>
                </div>
            </div>
            <div className={styles.typographyExample}>
                <p className={classNames(styles.smallParagraphFont, styles.typographySpacing)}>
                    We ignite opportunity by setting the world in motion. 0123456789
                </p>
                <div className={styles.variantWrapper}>
                    <p className={styles.variantName}>
                        $small-paragrapg-font:{' '}
                        <span className={styles.fontDetails}>DM Sans (200) / 1rem / 1.3rem </span>
                    </p>
                </div>
            </div>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        windowWidth: 278,
        windowHeight: 554,
    },
});
