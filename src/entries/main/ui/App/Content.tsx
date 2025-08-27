import {useContext, Suspense} from 'react';
import {useStore} from '@t8/react-store';
import {useRoute} from '@t8/react-router';
import {AppContext} from '../AppContext';
import {About} from '../About/lazy';
import {Intro} from '../Intro/lazy';
import {Nav} from '../Nav';
import {Footer} from '../Footer';
import './index.css';

export const Content = () => {
    let [state] = useStore(useContext(AppContext));
    let {withRoute} = useRoute();

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width"/>
                <title>{state.title}</title>
                <link rel="stylesheet" href="/-/main/index.css"/>
                <link type="image/x-icon" rel="icon" href="/favicon.svg"/>
            </head>
            <body>
                <div className="layout">
                    <Nav/>
                    {withRoute('/', (
                        <Suspense fallback={<p>Loading...</p>}>
                            <Intro/>
                        </Suspense>
                    ))}
                    {withRoute('/about', (
                        <Suspense fallback={<p>Loading...</p>}>
                            <About/>
                        </Suspense>
                    ))}
                    <Footer/>
                </div>
            </body>
        </html>
    );
};
