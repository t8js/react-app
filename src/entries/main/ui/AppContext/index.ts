import {createContext} from 'react';
import type {Store} from '@t8/react-store';
import type {AppState} from '../../types/AppState';

export const AppContext = createContext(null as unknown as Store<AppState>);
