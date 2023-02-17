import React from 'react'
import { NavLink, Link } from 'react-router-dom'

type Props = {}

export default function NavBar({ }: Props) {
    const isActiveNavBar = (prop: { isActive: boolean }) => {
        return prop.isActive ? "nav-bar active" : "nav-bar";
    }
    return (
        <div>
            <NavLink className={isActiveNavBar} to={"/home"}>Home</NavLink>
            <NavLink className={isActiveNavBar} to={"about"}>About</NavLink>
            <NavLink className={isActiveNavBar} to={"users"}>Users</NavLink>
            <NavLink className={isActiveNavBar} to={"products"} >Products</NavLink>
        </div>
    )
}