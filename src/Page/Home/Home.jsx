import Header from "../../Sheard/Header/Header";
import LeftSideNav from "../../Sheard/Header/LeftSideNav/LeftSideNav";
import NavBar from "../../Sheard/Header/NavBar/NavBar";
import RightSideNav from "../../Sheard/Header/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div className="font-poppins">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
        
             <div className="grid md:grid-cols-4 gap-4">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2 border">
                    Comming soon
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
             </div>
        
        </div>
    );
};

export default Home;