import { NavLink } from "react-router-dom";
import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <>
            <h1> Oops you did something wrong I guess</h1>
            <p>{error && error.data}</p>
            <NavLink to="/">
                <button>Go Home</button>
            </NavLink>
        </>
    )
}