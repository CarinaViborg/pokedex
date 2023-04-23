import "../styles.css"
import { Link, Outlet } from "react-router-dom"

export default function App() {
    return (
        <>
            <nav>
                <Link to="/">Pokédex</Link>
                <Link to="/information">Search for Pokémon</Link>
            </nav>
            <Outlet />
        </>
    )
}