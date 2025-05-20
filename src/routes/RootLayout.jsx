import { Outlet } from "react-router";

import MainHeader from "../components/MainHeader";
export default function RootLayout() {
    return (
        <>
            <h3>RootLayout</h3>
            <h2>다시 feature/test1 브랜치에서 작업</h2>
            <MainHeader />
            <Outlet />
        </>
    );
}