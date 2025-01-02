import React, { useEffect, useState } from "react";
import homeimg from "../../assets/images/homeimg.jpg";
import post from "../../assets/images/post.jpg";
import { GrFavorite } from "react-icons/gr";
import { FiSmile } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null);       // Add error state

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            navigate("/SingUp"); 
            return;
        }

        const fetchPosts = async () => { 
            try {
                const res = await fetch("http://localhost:5000/allposts", {
                    headers: {
                        "Authorization": "Bearer " + token
                    },
                });

                if (!res.ok) { // Handle HTTP errors
                    const errorData = await res.json(); // Try to get error message from server
                    throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
                }

                const result = await res.json();
                setData(result);
            } catch (err) {
                console.error("Error fetching posts:", err); 
                setError(err); 
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [navigate]); 

    if (loading) {
        return <div>Loading posts...</div>; 
    }

    if (error) {
        return <div>Error: {error.message}</div>; 
    }

    return (
        <div className="home px-3">
            <div className="container mx-auto">
                {data.map((posts) => ( 
                    <div className="card border justify-center items-center py-7 max-w-lg mx-auto mt-5" key={posts._id || Math.random()}>
                        <div className="card-header flex w-36 items-center">
                            <img src={homeimg} alt="img" className="w-10 h-10 rounded-full mx-auto" />
                            <h1 className="font-semibold">Trusha-jada</h1> {}
                        </div>
                        <br />
                        <div className="card-images">
                            <img src={post} alt={posts.photo|| "Post Image"} className="mx-auto w-full max-h-[700px]" /> {}
                        </div>
                        <div className="card-content">
                            <span><GrFavorite className="w-10 text-2xl mt-5" /></span>
                            <p className=" text-md mt-4 ms-2">1 like</p> {}
                            <p className=" text-md mt-1 ms-2">{posts.description || "No description"}</p> {}
                        </div>
                        <div className="card-comment flex mt-3 border space-x-2">
                            <span><FiSmile className="text-xl mt-2 w-10" /></span>
                            <input type="text" placeholder="Add a comment" className="mx-auto flex w-full" />
                            <button className="commit p-1 mx-auto flex w-10 text-blue-400 font-semibold outline-none">
                                <p className="text-center">Post</p>
                            </button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default Home;