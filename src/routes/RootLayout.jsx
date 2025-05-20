import { Outlet } from "react-router";

import MainHeader from "../components/MainHeader";
export default function RootLayout() {
    return (
        <>
            <h3>RootLayout</h3>
            <h2>test2</h2>
            <MainHeader />
            <Outlet />
        </>
    );
}