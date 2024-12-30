import { useEffect, useState } from 'react';
import React from "react";
import Logo from '../../assets/images/Logo.png';
import { Await, Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const SingUp = () => {
  const navigate = useNavigate()
  const [name, setname] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const postdata = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailRegex.test(email)){
      notifyA("Invalid email address");
      return;
    } 
    
    fetch("http://localhost:5000/SingUp", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        email: email,
        name: name,
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error)
        }
        else {
          notifyB(data.message);
          navigate('/SingIn');
        }
      })
      .catch((err)=>notifyA("Please try again"));
  }
  return (
    <>
      <div className="signup py-4 px-4  min-h-screen flex items-center justify-center ">
        <div className="container mx-auto max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-md border-2 border-black">
            <h1 id="logo" className="text-center mb-4">
              <img src={Logo} alt="Logo" className="w-40 h-auto mx-auto" />
            </h1>
            <p className="para mb-5 text-gray-500 font-semibold text-center">
              Sign Up to See Photos and Videos From Your Friends
            </p>
            <form>
              <div>
                <input
                  type="email"
                  placeholder="Email..."
                  className="border w-full p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  onChange={(e) => { setemail(e.target.value) }}
                  value={email}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Full Name..."
                  className="border w-full p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  onChange={(e) => { setname(e.target.value) }}
                  value={name}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="User Name..."
                  className="border w-full p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  onChange={(e) => { setusername(e.target.value) }}
                  value={username}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password..."
                  className="border w-full p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  onChange={(e) => { setpassword(e.target.value) }}
                  value={password} />
              </div>
              <p className="mt-4 text-gray-500 font-semibold text-center">
                By Signing up, You agree to our terms, <br />
                Privacy and policy
              </p>
              <button to="/SingIn"
                type="submit"
                className="border-2 p-2 text-white rounded-lg w-full bg-blue-600 mt-5 font-semibold hover:bg-blue-700 transition duration-300" onClick={postdata}
              >
                Sign up
              </button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/SingIn">
                <p>
                  Already Have An Account?{' '}
                  <span className="cursor-pointer text-blue-700 font-semibold">Sign In</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingUp