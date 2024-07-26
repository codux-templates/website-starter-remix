import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';

export default function HomePage() {
    return (
        <div className={styles.root}>
            <div className={styles.title}>I&apos;M A HOME PAGE</div>
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

export const meta: MetaFunction = () => {
    return [
        { title: 'Website Starter' },
        {
            name: 'description',
            content: 'Welcome to the Website Starter',
        },
        {
            name: 'author',
            content: 'Codux',
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: 'Website Starter',
        },
        {
            property: 'og:description',
            content: 'Welcome to the Website Starter',
        },
        {
            property: 'og:image',
            content: 'https://my-website/og-image.png',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: 'Website Starter',
        },
        {
            name: 'twitter:description',
            content: 'Welcome to the Website Starter',
        },
        {
            name: 'twitter:image',
            content: 'https://my-website/twitter-image.png',
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
        {
            rel: 'canonical',
            href: 'https://website-starter.com',
        },
    ];
};
