import React from 'react'
import {ChevronLeft, UserRound, Bell, ClipboardCopy, ChevronDown, MessageCircleMore} from 'lucide-react'
import DashboardSidebar from '../dashboard-sidebar'
import { MessagesSquare, MessageSquare, Phone, Star, AlertCircle, ArrowRight} from 'lucide-react';

const SupportCard = ({ icon, title, action, color }) => {
  return (
    <div className="bg-white rounded-[20px] p-4 shadow-sm flex items-start space-x-4 border-[#4169E1] border text-[#4169E1]">
      {icon}
      <div className="flex-grow">
        <h2 className="font-bold text-[#4169E1] mb-1 ">{title}</h2>
        <a href="#" className={`text-sm text-[#4169E1] font-semibold flex items-center`}>
          {action}
          <ArrowRight size={17} className='ml-1'/>
        </a>
      </div>
    </div>
  );
};

const ThirdScreen = () => {
  return (
    <>
    <DashboardSidebar />
    <div className="flex w-full flex-col p-5">
      {/* Header */}
    <div className='justify-between flex flex-row align'>
    <div>
        <p className='flex text-[#4C689E] font-bold'>Help and Support</p>
    </div>
    <div className='flex gap-2 ml-1 font-semibold text-[#4C689E] items-center'>
        <p>Upgrade to merchant</p>
        <Bell size={30} color={'#4169E1'} className='p-2 rounded-full border border-[#4169E1]'/>
        <UserRound size={30} color={'#4169E1'} className='p-2 rounded-full border border-[#4169E1]'/>
    </div>
    </div>

    <div className=" min-h-screen">
      <main className="p-6 w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Frequently Asked Questions */}
          <SupportCard
            icon={<div className="bg-red-400 p-3 rounded-xl"><MessageSquare className="w-6 h-6 text-white" /></div>}
            title="Frequently Asked Questions"
            action="See FAQ"
            color="text-red-400"
          />

          {/* Live Chat */}
          <SupportCard
            icon={<div className="bg-yellow-400 p-3 rounded-xl"><MessagesSquare className="w-6 h-6 text-white" /></div>}
            title="Live Chat"
            action="Chat Now"
            color="text-yellow-400"
          />

          {/* Whatsapp */}
          <SupportCard
            icon={<div className="bg-green-500 p-3 rounded-xl">
              <MessageCircleMore className='text-white'/>
            </div>}
            title="Whatsapp"
            action="Drop a Message"
            color="text-green-500"
          />

          {/* Phone Call */}
          <SupportCard
            icon={<div className="bg-blue-500 p-3 rounded-xl"><Phone className="w-6 h-6 text-white" /></div>}
            title="Phone Call"
            action="Call Us"
            color="text-blue-500"
          />

          {/* Report Our Support */}
          <SupportCard
            icon={<div className="bg-red-400 p-3 rounded-xl"><AlertCircle className="w-6 h-6 text-white" /></div>}
            title="Report Our Support"
            action="Not Satisfied?"
            color="text-red-400"
          />

          {/* Review Our App */}
          <SupportCard
            icon={<div className="bg-green-500 p-3 rounded-xl"><Star className="w-6 h-6 text-white" /></div>}
            title="Review Our App"
            action="Coming Soon"
            color="text-green-500"
          />
        </div>
      </main>
    </div>

    </div>
</>
  )
}

export default ThirdScreen