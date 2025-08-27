import {Suspense, lazy} from 'react';

const LazyIntro = lazy(() => import('./index'));

export const Intro = () => (
    <Suspense fallback={<p>Loading...</p>}>
        <LazyIntro/>
    </Suspense>
);
