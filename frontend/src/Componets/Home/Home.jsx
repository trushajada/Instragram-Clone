import React from "react";
import homeimg from "../../assets/images/homeimg.jpg";
import post from "../../assets/images/post.jpg";
import { GrFavorite } from "react-icons/gr";
import { FiSmile } from "react-icons/fi";


const Home = () => {
    return (
        <>
            <div className="home">
                {/* card */}
                <div className="container mx-auto">
                    <div className="card  ">
                        <div className="card-header">
                            <img src={homeimg} alt="img" className="w-20 mx-auto" />
                        </div>
                        <br />
                        <div className="card-images">
                            <img src={post} alt="" className="w-40 mx-auto"/>
                        </div>
                        <div className="card-content ">
                       <span><GrFavorite  className="mx-auto"/></span> 
                        <p>1 like</p>
                        <p>Amazing is place</p>
                        </div>
                        <div className="card-comment">
                            <span><FiSmile className="mx-auto"/></span>
                            <input type="text" placeholder="Add a comment" className="border mx-auto flex"/>
                            <button className="commit border p-1 mx-auto flex w-20 "><p className="text-center"> Post</p></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Home