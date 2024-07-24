import classNames from 'classnames';
import styles from './_index.module.scss';
import { MetaFunction } from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';
import commonStyles from '../../src/styles/common-styles.module.scss';

export const meta: MetaFunction = () => {
    return [
        { title: 'Website Starter' },
        { description: 'Website Starter - Description' },
        {
            property: 'og:title',
            content: 'Website Starter - Title',
        },
        {
            name: 'og:description',
            content: 'Website Starter - Description',
        },
        {
            name: 'og:image',
            content: 'https://my-website/og-image.png',
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: 'https://my-website/',
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <div className={styles.title}>I&apos;M A TITLE</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                    I’m a paragraph. Add your own text and edit me on properties panel on the right.
                    It’s easy. Just select me and make changes to the font on the styles panel on
                    the right. I’m a great place for you to tell a story and let your viewers know a
                    little more about you.
                </div>
            </div>
            <button className={classNames(commonStyles.primaryButton, styles.button)}>
                Learn more
            </button>
            <img
                src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dwixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles.image}
            />
        </div>
    );
}
