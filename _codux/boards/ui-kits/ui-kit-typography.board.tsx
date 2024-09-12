import { createBoard, Variant } from '@wixc3/react-board';
import styles from '../../../src/styles/ui-kit-typography.module.scss';
import classNames from 'classnames';

export default createBoard({
    name: 'UI Kit - Typography',
    Board: () => (
        <div className={styles.container}>
            <div>
                <span className={styles.uikit}>UI Kit</span>
                <span className={styles.foundation}> | Foundation</span>
                <hr className={styles.hrSolid} />
                <h3 className={styles.sectionTitle}>Typography</h3>
            </div>

            <h4 className={styles.sectionHeader}>Heading</h4>

            <Variant name="Title Font">
                <h1 className={styles.titleFont}>Heading 1</h1>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $title-font:
                <span className={styles.fontDetails}> DM Sans (200) / 4rem / 1.4</span>
            </p>

            <Variant name="Small Title font">
                <h2 className={classNames(styles.smallTitleFont)}>Heading 6</h2>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $small-title-font:
                <span className={styles.fontDetails}> DM Sans (400) / 1rem / 1.4</span>
            </p>

            <hr className={styles.hrLight} />
            <h4 className={styles.sectionHeader}>Paragraph</h4>
            <Variant name="Paragraph Font">
                <p className={classNames(styles.paragraphFont)}>
                    We ignite opportunity by setting the world in motion. 0123456789
                </p>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $paragraph-font:
                <span className={styles.fontDetails}> DM Sans (300) / 1.3rem / 1.3</span>
            </p>
            <Variant name="Small Paragraph Font">
                <p className={styles.paragraphSmallFont}>
                    We ignite opportunity by setting the world in motion. 0123456789
                </p>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $small-paragraph-font:
                <span className={styles.fontDetails}> DM Sans (200) / 1rem / 1.3</span>
            </p>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 282,
        windowHeight: 606,
    },
    tags: ["UI Kit"]
});
