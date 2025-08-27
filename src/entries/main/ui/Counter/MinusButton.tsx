import {useContext} from 'react';
import {useStore} from '@t8/react-store';
import {AppContext} from '../AppContext';

export const MinusButton = () => {
    let [, setState] = useStore(useContext(AppContext), false);

    let handleClick = () => {
        setState(state => ({
            ...state,
            counter: state.counter - 1,
        }));
    };

    return <button onClick={handleClick}>&ndash;</button>;
};
