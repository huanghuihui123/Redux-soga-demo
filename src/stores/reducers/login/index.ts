import { Action } from 'redux'
import * as TYPE from '../../actions/actionTypes'

interface LoginState {
    loginSuccess?: boolean
    error?: string
    token?: string
    name?: string
}

interface LoginAction extends Action {
    payload: {
        token: string
        name: string
        error: string
    }
}

const initState: LoginState = { error: '', loginSuccess: false, token: '', name: 'youke' }

export const login = (state = initState, action: LoginAction): LoginState => {
    switch (action.type) {
        case TYPE.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case TYPE.LOGIN_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                token: action.payload.token,
                loginSuccess: true
            }
        default:
            return state
    }
}
