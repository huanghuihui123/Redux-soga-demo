import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

type mixProps = DispatchProp & RouteComponentProps

interface Props extends mixProps {
    counter: number
}

export class Home extends React.Component<Props> {

    // constructor(props: Props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <h2>Home page</h2>
                <p>counter: {this.props.counter}</p>
                <button onClick={this.handleIncrementClick}>increment</button>
                <button onClick={this.handleDecrementClick}>decrement</button>
            </div>
        )
    }

    handleIncrementClick = () => {

    }

    handleDecrementClick = () => {

    }
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return { counter: state.counter }// 必须返回一个对象
}

export default connect(mapStateToProps)(Home)