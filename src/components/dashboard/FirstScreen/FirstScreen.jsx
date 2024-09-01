import React from 'react'
import {ChevronLeft, UserRound, Bell, ClipboardCopy} from 'lucide-react'
import DashboardSidebar from '../dashboard-sidebar'
import Logo from "../../../assets/Logo.png"
import { Copy, Edit, Share } from 'lucide-react';
import credit from "../../../assets/credit.png"
const FirstScreen = () => {
  return (
    <>
    <DashboardSidebar />
    <div className="flex-1 p-8">
    <div className='justify-between flex flex-row align'>
    <div>
        <p className='flex text-[#4C689E] font-semibold'>Welcome Lawal Wahab</p>
    </div>
    <div className='flex gap-2 ml-1 font-semibold text-[#4C689E] items-center'>
        <p>Upgrade to merchant</p>
        <Bell size={30} color={'#4169E1'} className='p-2 rounded-full border border-[#4169E1]'/>
        <UserRound size={30} color={'#4169E1'} className='p-2 rounded-full border border-[#4169E1]'/>
    </div>
</div>
<div className="flex-1 p-6">

      <div className="flex gap-6 text-[#4169E1]">
        {/* Wallet Balance Section */}
        <div className="col-span-2 space-y-4 w-2/3 ">
          <div className="bg-white rounded-lg shadow p-6 border border-[#D7E1F4] ">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Wallet Balance</p>
                <h2 className="text-3xl font-bold text-[#3C517C]">₦3000</h2>
              </div>
              <button className="px-16 py-4 text-xl font-semibold bg-blue-600 text-white rounded-md ">
                Fund Wallet
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border border-[#D7E1F4]">
            <p className="text-sm text-[#3C517C] mb-1">Referral</p>
            <p className="text-sm font-medium mb-2 text-[#3C517C]">Referral Code: <span className='text-[#3C517C] font-semibold'>18/52hq089</span></p>
            <div className="flex space-x-4 items-center text-[#4169E1]">
              <button className="flex gap-1 ">
                <Copy size={16} className="mr-1" /> Copy
              </button>
              <button className="flex gap-1">
                <Edit size={16} className="mr-1" /> Edit
              </button>
              <button className="flex gap-1">
                <Share size={16} className="mr-1" /> Share
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border border-[#D7E1F4]">
            <div className="flex flex-col">
              <div className='flex space-x-8 mb-2 text-[#3C517C]'>
              <div>
                <p className="text-sm ">Total referrals made</p>
                <p className="text-xl font-semibold text-[#3C517C]">0</p>
              </div>
              <div>
                <p className="text-sm">Current wallet Bonus</p>
                <p className="text-xl font-semibold text-[#3C517C]">₦0.00</p>
              </div>
              </div>
              <button className="py-2 flex font-semibold items-center">
                <ClipboardCopy className='mr-2'/>Cashout
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
          <img src={credit} alt="credit card" className='w-2/3'/>
     
      </div>
    </div>
</div>
</>
  )
}

export default FirstScreen