import { createBrowserRouter } from "react-router-dom";
import Category from "../../Components/Category/Category";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login/Login";
import Register from "../../Components/Login/Register/Register";
import News from "../../Components/News/News";
import Terms from "../../Components/Terms/Terms";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },
            {
                path: '/news/:id',
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    }
])