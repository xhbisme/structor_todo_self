import { START, DONE, ERROR, parseAction, wrapPromise } from '../reduxActionsSequence/reduxActionsUtils';

const KEY_DOWN = 'KEY_DOWN';


export function keyDown(value) {
    return {
        type: KEY_DOWN,
        payload: value
    };
}


export default function(state = {}, action = {
        type: 'UNKNOWN'
    }) {
    const {type, stage, payload} = parseAction(action);
    if (type === KEY_DOWN) {
       
        state = Object.assign({}, state, {

        });
        return state;
    }
    

    return state;
}
