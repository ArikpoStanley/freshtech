import React from 'react';
import { Home, DollarSign, Wifi, Tv, Zap, Clock, HelpCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import Logo from "../../assets/Logo.png"
import Sidebar from './sidebar';

const Login = () => {
    return (
      <>
      <Sidebar />
       <div className="flex-1 p-8 bg-gray-100">
            <div className='justify-between flex flex-row'>
            <div>
                <p className='flex text-[#4C689E] font-semibold'>< ChevronLeft/>Home</p>
            </div>
            <button className="bg-blue-600 text-white px-12 font-bold py-3 rounded-2xl">
              Sign Up
            </button>
        </div>
        <div className="max-w-[45%] mx-auto flex flex-col mt-20">

          <h2 className="text-2xl font-bold mb-6 text-center text-[#4C689E]">Login</h2>
          <button className="w-full border border-[#D7E1F4] p-3 rounded-[10px] flex items-center justify-center shadow-2xl font-bold text-[#4C689E]  bg-white">
            <img src={Logo} alt="Google logo" className="mr-2 py-2 rounded" />
            Login with Google
          </button>
          <div class="flex items-center my-5">
  <hr class="flex-grow border-t border-gray-300"/>
  <span class="mx-4 text-gray-500">Or continue with</span>
  <hr class="flex-grow border-t border-gray-300"/>
</div>
          <form className='bg-white px-[42px] py-[40px] border-[#D7E1F4] border rounded-[12px]'>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#4C689E]">Email Address</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md shadow-sm py-5 border-[#D7E1F4] border " defaultValue="wabidditmail@gmail.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-[#4C689E]">Password</label>
              <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md shadow-sm py-5 border-[#D7E1F4] border " defaultValue="Gabon4351" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2"  />
                <label htmlFor="remember" className="text-sm text-[#4C689E]">Remember me</label>
              </div>
              <a href="#" className="text-sm text-red-600">Recover Password</a>
            </div>
            <button type="submit" className="w-full bg-[#4169E1] text-white p-4 rounded-[10px] font-bold">
              Log in
            </button>
          </form>
        </div>
      </div>
      </>
     
    );
  };
  

export default Login;