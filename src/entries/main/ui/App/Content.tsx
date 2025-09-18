import {Suspense} from 'react';
import {useRoute} from '@t8/react-router';
import {titleMap} from '../../const/titleMap';
import {About} from '../About/lazy';
import {Intro} from '../Intro/lazy';
import {Section} from '../Section/lazy';
import {Nav} from '../Nav';
import {Footer} from '../Footer';
import './index.css';

export const Content = () => {
    let {route, withRoute} = useRoute();

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width"/>
                <title>{titleMap[route.pathname]}</title>
                <link rel="stylesheet" href="/-/main/index.css"/>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            </head>
            <body>
                <div className="layout">
                    <header>
                        <h1>React App</h1>
                        <Nav/>
                    </header>
                    {withRoute('/', (
                        <Suspense fallback={<p>Loading...</p>}>
                            <Intro/>
                            <Footer/>
                        </Suspense>
                    ))}
                    {withRoute('/about', (
                        <Suspense fallback={<p>Loading...</p>}>
                            <About/>
                            <Footer/>
                        </Suspense>
                    ))}
                    {withRoute(/^\/sections\/(?<id>\d+)\/?$/, ({params}) => (
                        <Suspense fallback={<p>Loading...</p>}>
                            <Section id={Number(params.id)}/>
                            <Footer/>
                        </Suspense>
                    ))}
                </div>
            </body>
        </html>
    );
};
