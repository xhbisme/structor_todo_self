import { START, DONE, ERROR, parseAction, wrapPromise } from '../reduxActionsSequence/reduxActionsUtils';

const CLEAR = 'CLEAR';

export function clear() {
    return {
        type: CLEAR,
        payload: {}
    };
}

export default function(state = {}, action = {
        type: 'UNKNOWN'
    }) {
    const {type, stage, payload} = parseAction(action);
    if (type === CLEAR) {
        state = Object.assign({}, state, {
            list: list.filter(alist=>!alist.completed)
        });
        return state;
    }

    return state;
}
