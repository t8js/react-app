import {Store} from '@t8/react-store';
import type {SerializableAppState} from '../types/SerializableAppState';

export function toAppState(state: SerializableAppState) {
    return new Store(state);
}
