import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

type Props = {}

export default function SharedLayout({ }: Props) {
    return (<>
        <div><NavBar></NavBar></div>
        <div><Outlet></Outlet></div>
    </>
    )
}