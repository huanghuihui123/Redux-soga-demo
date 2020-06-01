import { Action } from 'redux'
import * as TYPE from '../../actions/actionTypes'

export const counter = (state = 0, action: Action) => {
    switch (action.type) {
        case TYPE.INCREMENT:
            return state + 1;
        case TYPE.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

