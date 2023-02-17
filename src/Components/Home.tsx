import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h2>Home Page</h2>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
}

export function NewComp() {
    return (<>NewComp Contents</>)
}