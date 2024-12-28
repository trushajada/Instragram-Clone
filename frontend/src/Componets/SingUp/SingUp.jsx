import { useEffect,useState } from 'react';
import React from "react";
import Logo from '../../assets/images/Logo.png';
import { Await, Link } from "react-router-dom";


const SingUp = () => {

  const [name ,setname]=useState('');
  const [username ,setusername]=useState('');
  const [password ,setpassword]=useState('');
  const [email ,setemail]=useState('');

  
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
                            name="email"
                            id="email"
                            placeholder="Email..."
                            className="border w-full p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" 
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name..."
                            className="border w-full p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" 
                            required 
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="user"
                            id="user"
                            placeholder="User Name..."
                            className="border w-full p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" 
                            required 
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
                          />
                        </div>
                        <p className="mt-4 text-gray-500 font-semibold text-center"> 
                          By Signing up, You agree to our terms, <br />
                          Privacy and policy
                        </p>
                        <button
                          type="submit"
                          className="border-2 p-2 text-white rounded-lg w-full bg-blue-600 mt-5 font-semibold hover:bg-blue-700 transition duration-300" 
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