import React,{useState} from "react";
import homeimg from "../../assets/images/homeimg.jpg";

const Createpost = () => {
    
    const [body , setbody]=useState("");
    const [image , setImage]=useState("")

    // cloudnary
    const postDetail =()=>{
        console.log(body ,image);
        const data =new FormData()
        data.append("file",image)
        data.append("upload_preset","instra-clone")
        data.append("cloud_name","instra-cloud")
        fetch("https://api.cloudinary.com/v1_1/instra-cloud/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data =>console.log(data))
        .catch(err=>console.log(err)
        )
    
    }

    var loadFile = function(e) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(e.target.files[0]);
        output.onload = function() {
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
                            <button className="bg-gray-100 w-12 text-blue-400 font-semibold mb-3 me-1" onClick={()=>{postDetail()}}>Share</button>
                        </div>
                        <div className="main-div p-3 border-b-2">
                        <img  id="output" className="w-2/3 mx-auto" />
                            <input type="file" accept="image/*"  onChange={(e)=>{
                                loadFile(e);
                                setImage(e.target.files[0])
                                
                                }}/>
                        </div>
                        <div className="detail flex items-center">
                            <div className="card-header p-3">
                                <img src={homeimg} alt="" className="w-10 h-10 rounded-full"/>
                            </div>
                            <h5>Trusha-Jada</h5>
                        </div>
                        <div className="p-3">
                        <textarea value={body} onChange={(e)=>{setbody(e.target.value)}} name="" id="" placeholder="Write Caption" className="border w-full h-[100px]"></textarea>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Createpost