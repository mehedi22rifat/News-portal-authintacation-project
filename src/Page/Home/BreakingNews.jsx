
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex space-x-6">
            <button className="btn btn-secondary">Braking News</button>
        
            <Marquee speed={100}>
             <Link className="mr-4 bg-orange-200 p-2 rounded" to={"/"}> I can be a React component, multiple React components, or just some text.</Link>
             <Link className="mr-4 bg-orange-200 p-2 rounded" to={"/"}> I can be a React component, multiple React components, or just some text.</Link>
             <Link className="mr-4 bg-orange-200 p-2 rounded" to={"/"}> I can be a React component, multiple React components, or just some text.</Link>
             <Link className="mr-4 bg-orange-200 p-2 rounded" to={"/"}> I can be a React component, multiple React components, or just some text.</Link>
             <Link className="mr-4 bg-orange-200 p-2 rounded" to={"/"}> I can be a React component, multiple React components, or just some text.</Link>
           
           
           </Marquee>
        </div>
    );
};

export default BreakingNews;