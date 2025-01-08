import React, { useEffect, useState } from "react";
import homeimg from "../../assets/images/homeimg.jpg";
import post from "../../assets/images/post.jpg";
import { GrFavorite } from "react-icons/gr";
import { FiSmile } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { toast } from 'react-toastify';

// const notifyA = (msg) => toast.error(msg);
const notifyB = (msg) => toast.success(msg);
const Home = () => {
    const navigate = useNavigate()
    const [data, setdata] = useState([])
    const [comment, setcomment] = useState('')
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            navigate("./signup");
        }

        // Fetching all posts
          fetch("http://localhost:5000/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setdata(result);
      })
      .catch((err) => console.log(err));
  }, []);

  const makeComment = (text, id) => {
    fetch("http://localhost:5000/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        text: text,
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id == result._id) {
            return result;
          } else {
            return posts;
          }
        });
        setdata(newData);
        setcomment("");
        notifyB("Comment posted");
        console.log(result);
      });
  };
  

    return (
        <>
           <div className="home px-3">
      {data.map(post => (
        <div key={post._id} className="container mx-auto mt-5"> 
          <div className="card border py-7 max-w-lg mx-auto bg-white rounded-md shadow-md"> 
            <div className="card-header flex items-center px-4">
              <img src={homeimg} alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
              <h1 className="font-semibold">{post.postedBy?.name || "Unknown"}</h1>
            </div>
            <div className="card-images mt-4">
              <img src={post.photo} alt="Post Image" className="mx-auto w-full max-h-[700px] object-cover" />
            </div>
            <div className="card-content px-4 py-2"> 
              <div className="flex items-center mt-2"> 
                  <GrFavorite className="text-xl mr-2 text-gray-600" /> 
                  <p className="text-md">{post.likes?.length || 0} likes</p> 
              </div>
              <p className="text-md mt-2">{post.body}</p>
            </div>
            <div className="card-comment flex mt-3 border-t border-gray-200 pt-3 px-4 bg-white"> 
              <FiSmile className="text-xl mt-1 w-6 text-gray-500 mr-2" /> 
              <input
                type="text"
                placeholder="Add a comment"
                className="flex-grow border rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded ml-2 focus:outline-none focus:ring focus:ring-blue-300"
                onClick={() => {
                  makeComment(comment, post._id);
                  setcomment(''); 
                }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </>
    )
}
export default Home


