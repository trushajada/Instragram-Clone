import React, { useState, useEffect } from "react";
import homeimg from "../../assets/images/homeimg.jpg";
import { data, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const Createpost = () => {

  const [body, setbody] = useState("");
  const [image, setImage] = useState("")
  const [url, seturl] = useState("")
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  const navigate = useNavigate()
  useEffect(() => {
    if (url) {

      fetch("http://localhost:5000/Createpost", {
        method: "post",
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          body,
          pic: url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            notifyA(data.error)
          } else {
            notifyB("successfully posted")
            navigate("/")
          }
        })
        .catch(err => console.log(err))
    }
  }, [url])


  // posting image to cloudinary
  const postDetails = () => {

    console.log(body, image)
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "instragram-clone")
    data.append("cloud_name", "instra-clone")

    fetch("https://api.cloudinary.com/v1_1/instra-clone/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => seturl(data.url))
      .catch(err => console.log(err))

  }

  var loadFile = function (e) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src)
    }
  };
  return (
    <>
      <div className="createpost px-3">
        <div className="container mx-auto">
          <div className="post border justify-center items-center py-4  max-w-lg mx-auto mt-5">
            <div className="post-header flex border-b-2 ">
              <h3 className="text-center font-semibold text-xl mx-auto mb-3">Create New Post</h3>
              <button className="bg-gray-100 w-12 text-blue-400 font-semibold mb-3 me-1" onClick={() => { postDetails() }}>Share</button>
            </div>
            <div className="main-div p-3 border-b-2">
              <img id="output" className="w-2/3 mx-auto" />
              <input type="file" accept="image/*" onChange={(e) => {
                loadFile(e);
                setImage(e.target.files[0])
              }} />
            </div>
            <div className="detail flex items-center">
              <div className="card-header p-3">
                <img src={homeimg} alt="" className="w-10 h-10 rounded-full" />
              </div>
              <h5>Trusha-Jada</h5>
            </div>
            <div className="p-3">
              <textarea name="" id="" placeholder="Write Caption" className="border w-full h-[100px]" onChange={(e) => { setbody(e.target.value) }}></textarea>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Createpost