import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Login from "../Login/Login";



    const routss = createBrowserRouter([
        {
            path:"/",
            element:<Root></Root>,
            children:[
               {
                path:"/",
                element:<Home></Home>
               },
               {
                path:"/login",
                element:<Login></Login>
               }
            ]
            
        }
    ])
    
    export default routss
    

