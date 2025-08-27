import {static as expressStatic} from 'express';
import {setup, unhandledError, unhandledRoute} from '@t8/webapp';
import {entries} from './entries';

let app = setup();

app.use(expressStatic('public'));

app.use(
    entries,
    unhandledRoute(),
    unhandledError(),
);
