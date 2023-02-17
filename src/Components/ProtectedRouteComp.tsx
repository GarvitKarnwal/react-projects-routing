import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import { IUser } from './BasicRoutingComp';

type Props = {
    user?: IUser;
    children: any;
}

type State = {}

export default class ProtectedRouteComp extends Component<Props, State> {
    state = {}
    constructor(props: Props) {
        super(props);
    }
    render() {
        if (this.props.user)
            return (
                <>{this.props.children}</>
            )
        else {
            return <Navigate to={"/login"} />
        }
    }
}