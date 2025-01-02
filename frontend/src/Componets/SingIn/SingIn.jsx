import React from "react";
import { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const SingIn = () => {
  const navigate = useNavigate()
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const postdata = async () => {
    if (!emailRegex.test(email)) {
      notifyA("Invalid email address");
      return;
    }
  
  try {
      const res = await fetch("http://localhost:5000/SingIn", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (data.error) {
        notifyA(data.error);
      } else {
        notifyB(data.message);
        navigate('/');
      }
    } catch (error) {
      console.error("Fetch error:", error);
      notifyA("Please try again later");
    }
  };

  return (
    <>
      <div className="signup py-4 px-4  min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-md">
          <div className="fromin p-8 rounded-lg shadow-md">
            <h1 id="logo" className="text-center mb-4">
              <img src={Logo} alt="Logo" className="w-40 h-auto mx-auto" />
            </h1>
            <form onSubmit={(e) => { e.preventDefault(); postdata(); }}>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email..."
                  className="border w-full p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password..."
                  className="border w-full p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>
              <button
                type="submit"
                className="border-2 p-2 text-white rounded-lg w-full bg-blue-600 mt-5 font-semibold hover:bg-blue-700 transition duration-300"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/Singup">
                <p>
                  Don't Have An Account?
                  <span className="cursor-pointer text-blue-700 font-semibold">Sign Up</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingIn