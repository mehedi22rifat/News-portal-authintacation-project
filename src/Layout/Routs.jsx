import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";



    const routss = createBrowserRouter([
        {
            path:"/",
            element:<Root></Root>,
            children:[
               {
                path:"/",
                element:<Home></Home>
               }
            ]
            
        }
    ])
    
    export default routss
    

