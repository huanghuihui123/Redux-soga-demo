import React from 'react'
import { connect } from 'react-redux'
import { MixProps } from '../../interface/common'
import { createLogin } from '../../stores/actions/actionCreator'



interface Props extends MixProps {
    name: string
}

export class Login extends React.Component<Props> {

    // constructor(props: Props) {
    //     super(props)
    // }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <h2>Login page</h2>
                <p>name: {this.props.name}</p>
                <button onClick={this.handleLoginClick}>登录</button>
            </div>
        )
    }

    handleLoginClick = () => {
        console.log(111111111111)
        this.props.dispatch(createLogin({
            account: 'admin',
            password: '123456'
        }, this.handleLoginSuccess))
        // this.props.dispatch({
        //     type: 'LOGIN_SUCCESS ',
        //     payload: {
        //         token: 'token',
        //         name: 'admin'
        //     }
        // })
    }

    handleLoginSuccess = (isFirstLogin: string) => {
        console.log(isFirstLogin)
    }
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return { name: state.login.name }// 必须返回一个对象
}

export default connect(mapStateToProps)(Login)