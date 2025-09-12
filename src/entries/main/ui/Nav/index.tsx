import {A, useRoute} from '@t8/react-router';

export const Nav = () => {
    let {withRoute} = useRoute();

    return (
        <nav>
            <p>
                {withRoute('/',
                    <span>Intro</span>,
                    <A href="/">Intro</A>
                )}
                {' | '}
                {withRoute('/about',
                    <span>About</span>,
                    <A href="/about">About</A>
                )}
                {' | '}
                {withRoute('/sections/1',
                    <span>Section 1</span>,
                    <A href="/sections/1">Section 1</A>
                )}
                {' | '}
                {withRoute('/sections/2',
                    <span>Section 2</span>,
                    <A href="/sections/2">Section 2</A>
                )}
            </p>
        </nav>
    );
};
