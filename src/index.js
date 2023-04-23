import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./Routes/Root"
import { RouterProvider, createHashRouter } from "react-router-dom"
import Pokemon from "./Routes/Pokemon"
import Information from "./Routes/Information"

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Pokemon/>,
            },
            {
                path: "/information",
                element: <Information/>,
            },
        ],
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)