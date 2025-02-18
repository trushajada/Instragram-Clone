import React,{useContext} from "react";
import Logo from "../../assets/images/Logo.png";
import { Logincontext } from "../../Context/Logincontext";

const Navbar = ({login}) => {
const {setIsModalOpen } =useContext(Logincontext)
    const loginStatus = () => {
        const token = localStorage.getItem("jwt")
        if (token || login) {
            return [
                <>
                    <li>
                        <a href="Profile" className=" font-semibold">Profile</a>
                    </li>
                    <li>
                        <a href="Createpost" className=" font-semibold">Create post</a>
                    </li>
                    <li>
                        <button className="bg-red-500 px-5 p-2 rounded-lg text-white cursor-pointer shadow-lg hover:shadow-red-700" onClick={()=>setIsModalOpen(true)}>
                            Log out
                        </button>
                    </li>
                </>
            ]
        } else {
            return [
                <>
                    <li>
                        <a href="SingUp" className="font-semibold">Sign Up</a>
                    </li>
                    <li>
                        <a href="SingIn" className="font-semibold">Sign In</a>
                    </li>
                </>
            ]
        }
    }
    return (
        <>
            <header id="insta" className="bg-gray-100 shadow-lg px-3">
                <div className="container mx-auto  flex justify-between items-center">
                    <h1 className="w-40 "><img src={Logo} alt="Logo" /></h1>
                    <nav >
                        <ul className="flex space-x-4 items-baseline " >
                            {
                                loginStatus()
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Navbar 