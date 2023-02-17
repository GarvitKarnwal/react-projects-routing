import React, { ReactNode } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import DefaultComp from "./DefaultComp";
import Home, { NewComp } from "./Home";
import Login from "./Login";
import Products from "./Products";
import ProtectedRouteComp from "./ProtectedRouteComp";
import SharedLayout from "./SharedLayout";
import SingleProduct from "./SingleProduct";
import Users from "./Users";
export interface IUser {
    userName: string;
}
interface IState {
    user?: IUser;
}
export default class BasicRoutingComp extends React.Component<any, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            user: undefined
        }
        this.setUser = this.setUser.bind(this)
    }
    setUser(username: string) {
        this.setState({ user: { userName: username } })
    }
    render(): ReactNode {
        return (
            <>
                <div>
                    <BrowserRouter>
                        <div>
                            <Routes>
                                <Route path="/login" element={<Login setUser={this.setUser} />}></Route>
                                <Route path="/" element={<ProtectedRouteComp user={this.state.user}> <SharedLayout /></ProtectedRouteComp>} >
                                    <Route index element={<Home />} />
                                    <Route path="about" element={<About></About>}></Route>
                                    <Route path="users" element={<Users />}></Route>
                                    <Route path="products" element={<Products />} />
                                    <Route path="products/:prodId" element={<SingleProduct />} />
                                    <Route path="*" element={<Home />}></Route>
                                </Route>
                                <Route path="*" element={<DefaultComp></DefaultComp>}></Route>
                            </Routes>
                        </div>
                    </BrowserRouter>
                </div>
            </>
        );
    }
}


