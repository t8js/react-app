import {Suspense, lazy} from 'react';

const LazyAbout = lazy(() => import('./index'));

export const About = () => (
    <Suspense fallback={<p>Loading...</p>}>
        <LazyAbout/>
    </Suspense>
);
