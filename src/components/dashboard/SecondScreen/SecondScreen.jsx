import React from 'react'
import {ChevronLeft, UserRound, Bell, ClipboardCopy, ChevronDown} from 'lucide-react'
import DashboardSidebar from '../dashboard-sidebar'
import etisalat from "../../../assets/Networks.png"
const SecondScreen = () => {
  return (
    <>
    <DashboardSidebar />
    <div className="flex w-full flex-col p-5">
      {/* Header */}
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

      {/* Main content */}
      <main className="flex-grow p-6 ">
        {/* Progress steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">

            <div className="flex items-center flex-col">
              <div className=" flex items-center justify-centerfont-bold">Fill Info</div>
              <div className="w-32 h-2 bg-[#4169E1] rounded"></div>
            </div>
            
            <div className="flex items-center flex-col">
              <div className="ml-2 text-gray-300">Make Payment</div>
              <div className="w-32 h-2 bg-gray-300 rounded"></div>
            </div>
            
            <div className="flex items-center flex-col">
              <div className="ml-2 text-gray-300">View Receipt</div>
              <div className="w-32 h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto shadow-sm p-6 bg-[#F7F9FD] mt-9">
          <h2 className="text-xl font-semibold mb-6 text-[#4C689E] text-center">Airtime to Cash</h2>
          <form className="space-y-4 gap-20">
            <div className='flex flex-row gap-2'>

            <div className='w-1/2 text-[#6882B6]'>
              <label className="block text-sm font-medium text-[#4C689E] mb-1">Select Network</label>
              <div className="">
                <select className="w-full py-4 justify-around rounded shadow bg-white ">
                  <div><img src={etisalat} alt="etisalat" /> <option>Etisalat <ChevronDown className="h-4 w-4" /></option></div>
                </select>
                <div className="pointer-events-none ">
                  
                </div>
              </div>
            </div>

            <div className='text-[#4C689E]'>
              <label className="block text-sm font-medium text-[#4C689E] mb-1">Phone Number</label>
              <input type="tel" value="08094562627" className="mt-1 block w-full px-3 py-4 rounded bg-white border border-[#D7E1F4]rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            </div>
          
            <div>
              <label className="block text-sm font-medium text-[#4C689E] mb-1">Amount</label>
              <input type="text" value="₦5,000" className="mt-1 block w-full py-4 text-[#4C689E] px-3  bg-white border border-[#D7E1F4] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div className='mb-20'>
              <label className="block text-sm font-medium text-[#4C689E] mb-1">Airtime Share Pin</label>
              <input type="text" value="3549578433" className="mt-1 text-[#4C689E] block w-full px-3 py-4 bg-white border border-[#D7E1F4] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <button type="submit" className="w-full flex py-4 justify-center px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Proceed
            </button>
          </form>
        </div>
      </main>
    </div>
</>
  )
}

export default SecondScreen