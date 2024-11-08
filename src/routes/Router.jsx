import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import Login from "../page/user/Login/Login.jsx";
import Register from "../page/user/Register/Register.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root />,
        children:[
            {
                path:"/Login",
                element:<Login />,
            },{
                path:"/Register",
                element:<Register />,
            }
        ]
    }
])
export default router;