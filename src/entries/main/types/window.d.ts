/* eslint-disable @typescript-eslint/consistent-type-definitions */
import {SerializableAppState} from './SerializableAppState';

declare global {
    interface Window {
        _mainState: SerializableAppState;
    }
}
