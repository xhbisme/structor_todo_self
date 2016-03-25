import { START, DONE, ERROR, parseAction, wrapPromise } from '../reduxActionsSequence/reduxActionsUtils';

const DEL_A_LI = 'DEL_A_LI';
const CHECK_A_LI = 'CHECK_A_LI';
const DB_CLICK = 'DB_CLICK';
const BLUR_LI = 'BLUR_LI';
const CH_TXT = 'CH_TXT';

export function delALi(item) {
    return {
        type: DEL_A_LI,
        payload: item
    };
}
export function checkALi(item) {
    return {
        type: CHECK_A_LI,
        payload: item
    };
}
export function dblClick(item){
    return {
        type: DB_CLICK,
        payload: item
    }
}
export function blurLi(item){
    return{
        type: BLUR_LI,
        payload: item
    }
}
export function chTxt (item,value){
    return{
        type:CH_TXT,
        payload:item,
        val:value
    }
}
export default function(state = {}, action = {
        type: 'UNKNOWN'
    }) {
    const {type, stage, payload} = parseAction(action);
    if (type === DEL_A_LI) {
        let {list}=state;
        let index=list.indexOf(payload);
        
        state = Object.assign({}, state, {
            list: [
                ...list.slice(0,index),
                ...list.slice(index+1)
            ]
        });
        return state;
    }
    if (type === CHECK_A_LI) {
        let {list}=state;
        let index=list.indexOf(payload);
        state = Object.assign({}, state, {
            list: [
                ...list.slice(0,index),
                Object.assign({},list[index],{
                    completed:!list[index].completed
                }),
                ...list.slice(index+1)
            ]
        });
        return state;
    }
    if (type === DB_CLICK) {
        let {list}=state;
        let index=list.indexOf(payload);
        state = Object.assign({}, state, {
            list: [
                ...list.slice(0,index),
                Object.assign({},list[index],{
                    edit:true
                }),
                ...list.slice(index+1)
            ]
        });
        return state;
    }
    if (type === BLUR_LI) {
        let {list}=state;
        let index=list.indexOf(payload);
        state = Object.assign({}, state, {
            list: [
                ...list.slice(0,index),
                Object.assign({},list[index],{
                    edit:false
                }),
                ...list.slice(index+1)
            ]
        });
        return state;
    }

    if (type === CH_TXT) {
        
        let {list}=state;
        let index=list.indexOf(payload);
        state = Object.assign({}, state, {
            list: [
                ...list.slice(0,index),
                Object.assign({},list[index],{
                    text:action.val
                }),
                ...list.slice(index+1)
            ]
        });
        return state;
    }

    return state;
}
