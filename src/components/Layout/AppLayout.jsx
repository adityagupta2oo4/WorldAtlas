import { Outlet } from "react-router-dom";
import { Footer } from "../UI/Footer"
import { Headers } from "../UI/Headers"

export const AppLayout = () => {

    return(
        <>
            <Headers />
            <Outlet /> // this will be replaced by children dynamically see in App.jsx
            <Footer />
        </>
    );
}