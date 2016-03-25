import { START, DONE, ERROR, parseAction, wrapPromise } from '../reduxActionsSequence/reduxActionsUtils';

const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export function clearCompleted() {
    return {
        type: CLEAR_COMPLETED,
        payload: {}
    };
}

export default function(state = {}, action = {
        type: 'UNKNOWN'
    }) {
    const {type, stage, payload} = parseAction(action);
    if (type === CLEAR_COMPLETED) {
        let {list}=state;
        state = Object.assign({}, state, {
            list: list.filter(alist=> alist.completed===false)
        });
        return state;
    }

    return state;
}
