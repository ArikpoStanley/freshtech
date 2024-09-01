import React, { useState } from 'react';
import { Camera, Copy, Bell, UserRound, } from 'lucide-react';
import image29 from "../../../assets/frame.png"
import DashboardSidebar from '../dashboard-sidebar';
const FifthScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
  };
  return (
    <>
    <DashboardSidebar />
    <div className="p-6 w-full ">
    <div className='justify-between flex flex-row align'>
    <div>
        <p className='flex text-[#4C689E] font-semibold'>Airtime to Cash</p>
    </div>
    <div className='flex gap-2 ml-1 font-semibold text-[#4C689E] items-center'>
        <p>Upgrade to merchant</p>
        <Bell size={30} color={'#4169E1'} className='p-2 rounded-full border border-[#4169E1]'/>
        <UserRound size={30} color={'#4169E1'} className='p-2 rounded-full border border-[#4169E1]'/>
    </div>
    </div>

      <div className="flex space-x-6 mt-20 items-center mx-auto w-4/5">
        <div className="flex flex-col gap-2 w-1/2 ">
        <div className="p-6 border rounded-xl  border-gray-200 ">
            <div className="flex justify-center mb-4">
              <div className=" flex items-center justify-center">
                    <img src={image29} className='w-32 h-32' />
              </div>
            </div>
            <div className='flex justify-center gap-2 '>
            <Camera className="w-5 h-6 text-[#4169E1] " />
            <p className=" text-center text-[16px] font-[600] text-blue-500  ">Upload Image</p>
            </div>
            
          </div>

          <div className="p-2 rounded-xl border ">
            <div className="space-y-6 p-4 text-[#4C689E] ">
              <p className='flex justify-between font-bold'><span className="font-semibold">Name:</span> Lawal Wahab Babatunde</p>
              <p className='flex justify-between font-bold'><span className="font-semibold">Email:</span> wabdotmail@gmail.com</p>
              <p className='flex justify-between font-bold'><span className="font-semibold">Phone Number:</span> 0906 856 2949</p>
              <p className='flex justify-between font-bold'><span className="font-semibold">Account Status:</span> <span className="text-green-500">Active</span></p>
              <div className="flex items-center gap-16">
                <span className="font-semibold">Referral link:</span>
                <span className="ml-1 truncate">www.subsum.com/tre/wd...</span>
                <button className="ml-2 text-blue-500">
                  <Copy size={16} /> Copy
                </button>
              </div>
              <button className="font-bold text-blue-500 ">Edit Details</button>
            </div>
          </div>
        </div>

        <div className='gap-2 flex flex-col w-1/2'>
        <div className='flex rounded-[25px] p-2 border gap-2 font-bold '>
            <button className='rounded-[25px] bg-gray-100 px-6 py-3 w-full'>Change Password</button>
            <button className='border rounded-[25px] px-6 py-3 w-full text-gray-300 '>Change PIN</button>
        </div>
        <div className="flex bg-white border rounded-[15px]  p-6">
          <form onSubmit={handleSubmit} className="space-y-8 w-full">
            <div className='text-left'>
              <label className="block text-sm font-bold text-[#4C689E]">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1  w-full border border-gray-300 rounded-md shadow-sm p-4"
                placeholder="Enter Current Password"
              />
            </div>
            <div className='text-left'>
              <label className=" text-sm font-bold text-[#4C689E]">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full border py-3 border-gray-300 rounded-md shadow-sm p-4"
                placeholder="Enter New Password"
              />
            </div>
            <div className='text-left'>
              <label className="block text-sm py-3 font-bold text-[#4C689E]">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-4"
                placeholder="Enter New Password"
              />
            </div>
            <button type="submit" className="w-full mt-9 font-bold bg-[#94a7e0] py-4 text-white  px-4 rounded-md hover:bg-blue-600 hover:text-white">
              Submit
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
    </>

  );
}; 


export default FifthScreen