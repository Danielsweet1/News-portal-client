import { createBrowserRouter } from "react-router-dom";
import Category from "../../Components/Category/Category";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/category/:id',
                element: <Category></Category>
            }
        ]
    }
])