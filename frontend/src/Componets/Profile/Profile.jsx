import React, { useEffect ,useState } from "react";
import homeimg from "../../assets/images/homeimg.jpg";

const Profile = () => {
    const [usepic , setusepic]=useState([])

    useEffect(()=>{
         fetch("http://localhost:5000/myposts",{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("jwt")
            }
         })   
        .then(res=>res.json())
        .then((result)=>setusepic(result))
    },[])

    return (
        <>
            <div className="profile px-3">
               
                <div className="container mx-auto">
                    <div className="profile-frame  items-center py-7 max-w-lg mx-auto mt-5 flex border-b-4">
                        <div className="profile-pic flex ">
                            <img src={homeimg} alt="img" className="w-32 h-32 rounded-full" />
                        </div>
                        <div className="profile-data ">
                            <h1 className="text-3xl text-center font-semibold">Trusha-jada</h1>
                            <div className="profile-info flex space-x-3 text-center ms-3 mt-4 justify-center">
                                <p>40 posts</p>
                                <p>40 followers</p>
                                <p>40 following</p>
                            </div>
                        </div>

                    </div>
                    <div className="profile-pic w-1/3 grid grid-cols-3 gap-4 items-center justify-center mx-auto mt-5 ">
                    {usepic.map((posts)=>{
                    return <img src={posts.photo} className="object-cover"></img>
                })}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile