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
            </p>
        </nav>
    );
};