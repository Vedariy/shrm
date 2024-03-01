import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export {Layout}