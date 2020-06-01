import { DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

export type Callback = (...args: any[]) => void

export type MixProps = DispatchProp & RouteComponentProps

export interface Res<T> {
    code: number
    result: T
    msg?: string
}