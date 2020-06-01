import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { createCounter, createSearchSong } from '../../stores/actions/actionCreator'
import * as TYPE from '../../stores/actions/actionTypes'
import { songsItem } from '../../interface/response'
import _ from 'lodash'


type mixProps = DispatchProp & RouteComponentProps

interface Props extends mixProps {
    counter: number
    songCount: number
    songs: songsItem[]
}

interface State {
    keywords: string
}

export class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            keywords: ''
        }
    }

    render() {
        return (
            <div>
                <h2>Home page</h2>
                <p>counter: {this.props.counter}</p>
                <button onClick={this.handleIncrementClick}>increment</button>
                <button onClick={this.handleDecrementClick}>decrement</button>
                <hr />
                <hr />
                <p>search song: </p>
                <input type='text' onChange={this.handleInputChange} />
                <button onClick={this.handleSearchSong}>search</button>
            </div>
        )
    }

    handleIncrementClick = () => {
        this.props.dispatch(createCounter(TYPE.INCREMENT))
    }

    handleDecrementClick = () => {
        this.props.dispatch(createCounter(TYPE.DECREMENT))
    }

    handleInputChange = (e: React.ChangeEvent<{ value: string }>) => {
        console.log(e.target.value)
        this.setState({
            keywords: _.trim(e.target.value)
        })
    }

    handleSearchSong = () => {
        const { keywords } = this.state
        this.props.dispatch(createSearchSong({
            keywords
        }))
    }
}

// 必须返回一个对象
const mapStateToProps = (state: any) => {
    console.log(state)
    const { counter, searchSong } = state
    return {
        counter,
        songCount: searchSong.songCount,
        songs: searchSong.songs
    }
}

export default connect(mapStateToProps)(Home)