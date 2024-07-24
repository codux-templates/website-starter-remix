import { ReactNode } from 'react';
import { createRemixStub } from '@remix-run/testing';
import { ROUTES } from '~/router/config';

export default function ComponentWrapper(props: { children?: ReactNode }) {
    const RemixStub = createRemixStub([
        {
            Component: () => props.children,
            children: [...Object.values(ROUTES).map(({ path }) => ({ path }))],
        },
    ]);

    return <RemixStub />;
}
