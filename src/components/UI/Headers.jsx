import {NavLink} from "react-router-dom";

export const Headers = () => {
    return(
        <header>
            <div className = "container">
                <div className = "grid navbar-grid">
                    <div className = "Logo">
                        <NavLink to = "/">
                            <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to ="/" className={({isActive})=>`${isActive ? "on-active" : "not-active"}`
                                }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to ="/about"  className={({isActive})=>`${isActive ? "on-active" : "not-active"}`
                                }>About</NavLink>
                            </li>
                            <li>
                                <NavLink to ="/country"  className={({isActive})=>`${isActive ? "on-active" : "not-active"}`
                                }>Country</NavLink>
                            </li>
                            <li>
                                <NavLink to ="/contact"  className={({isActive})=>`${isActive ? "on-active" : "not-active"}`
                                }>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}