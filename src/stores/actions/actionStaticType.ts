import * as actionCreator from './actionCreator'

export type ActionTypes = { [K in keyof typeof actionCreator]: ReturnType<typeof actionCreator[K]> }