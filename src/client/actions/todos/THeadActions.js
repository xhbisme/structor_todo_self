import { START, DONE, ERROR, parseAction, wrapPromise } from '../reduxActionsSequence/reduxActionsUtils';

const ON_KEY_DOWN = 'ON_KEY_DOWN';
const CHECK_ALL = 'CHECK_ALL';

export function onKeyDown(val) {
    return {
        type: ON_KEY_DOWN,
        payload: val
    };
}
export function checkAll(bool) {
    return {
        type: CHECK_ALL,
        payload: bool
    };
}

export default function(state = {}, action = {
        type: 'UNKNOWN'
    }) {
    const {type, stage, payload} = parseAction(action);
    if (type === ON_KEY_DOWN) {
        let {list}=state;
        state = Object.assign({}, state, {
            list:[
                ...list,
                {
                    text:payload,
                    completed:false,
                    edit:false
                }
            ]
        });
        return state;
    }
    if (type === CHECK_ALL) {
        let { list } = state;
        state = Object.assign({}, state, {
            list:list.map(alist=>{
                return Object.assign({},alist,{
                    completed:payload
                })
            })
        });
        return state;
    }
    return state;
}
