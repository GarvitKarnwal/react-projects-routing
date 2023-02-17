import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (<>
        <div>
            <div><h3>Dashboard page content</h3></div>
            <div>Nested route content will be visible below:</div>
            <div><h4> <Outlet></Outlet></h4></div>
        </div>
    </>)
}


