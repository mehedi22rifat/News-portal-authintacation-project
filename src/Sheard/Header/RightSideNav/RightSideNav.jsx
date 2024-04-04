import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Qzone1 from "../../../assets/qZone1.png";
import Qzone2 from "../../../assets/qZone2.png";
import Qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div className="">
             <div className="p-2 mb-6">
               <h2 className="text-3xl font-medium">Login Width </h2>
                 <div className="m-auto w-full p-3">
                    <button className="mb-2 pl-4 flex items-center space-x-1 border border-black rounded-lg w-full p-3">
                        <IoLogoGoogle className="text-2xl"></IoLogoGoogle>
                        <span>Login Width Google </span>
                    </button>
                    <button className="mb-2 pl-4 flex items-center space-x-1 border border-black rounded-lg w-full p-3">
                        <FaGithub className="text-2xl"></FaGithub>
                        <span>Login Width Google </span>
                    </button>
                 </div>
             </div>


          {/* find us on */}
             <div className="p-2">
               <h2 className="text-3xl font-medium">Find Us On </h2>
                 <div className="m-auto w-full p-3">
                    <a href="" className="flex items-center space-x-1 border border-black rounded-t-lg w-full pt-3 pb-3 pr-4 pl-1">
                        <FaFacebook className="text-2xl"></FaFacebook>
                        <span>Facebook</span>
                    </a>
                    <a href="" className=" flex items-center space-x-1 border-x border-black w-full pt-3 pb-3 pr-4 pl-1">
                        <FaTwitter className="text-2xl"></FaTwitter>
                        <span>Login Width Google </span>
                    </a>
                    <a href="" className=" flex items-center space-x-1 border border-black rounded-b-lg w-full pt-3 pb-3 pr-4 pl-1">
                        <FaInstagram className="text-2xl"></FaInstagram>
                        <span>Login Width Google </span>
                    </a>
                 </div>
             </div>

             {/* q zone */}
             <div className="p-2 mb-6">
               <h2 className="text-3xl font-medium">Q-Zone </h2>
                 <div className="m-auto w-full p-3 space-y-7">
                   <img className="border rounded-md bg-slate-100 p-2" src={Qzone1} alt="" />
                   <img className="border rounded-md bg-slate-100 p-2" src={Qzone2} alt="" />
                   <img className="border rounded-md bg-slate-100 p-2" src={Qzone3} alt="" />
                  
                 </div>
             </div>


        </div>
    );
};

export default RightSideNav;