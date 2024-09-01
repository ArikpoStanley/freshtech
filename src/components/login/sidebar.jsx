import React, {useState} from 'react';
import { Home, DollarSign, Wifi, Tv, Zap, ChevronDown, Headset, NotepadText, RefreshCcw } from 'lucide-react';
import S from "../../assets/Group.png"

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');

    return (
      <>
      
        <div className="w-1/4 pl-8 pt-8 bg-gradient-to-b from-[#4169E1] via-gray-500 to-[#000080] text-white flex flex-col">
        <div className='bg-gray-300 mix-blend-overlay rounded-tl-[40px] p-8 h-full flex flex-col'>
        <div className='flex flex-row align-text-bottom items-baseline'>
            <img src={S} className="w-10 h-10 mr-2" alt='logo image'/>
        <h1 className="text-3xl font-bold mb-8 flex align-text-bottom text-end text-[#000080]"> subsum</h1>
        </div>
        <nav className=' h-fit text-blue-800'>
        <ul className="space-y-4 font-bold text-xl">
          <li>
            <button className="flex items-center space-x-2 bg-[#4169E1] w-full p-4 rounded justify-between ">
            <div className='flex gap-5'>
            <Home size={30} />
            <span className='text-white'>Dashboard</span> 
              </div>
              <ChevronDown></ChevronDown>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2  w-full p-4 rounded justify-between ">
            <div className='flex gap-5'>
            <DollarSign size={30} />
            <span>Buy Airtime</span>
              </div>
              <ChevronDown></ChevronDown>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2  w-full p-4 rounded justify-between ">
            <div className='flex gap-5'>
            <Wifi size={30} />
            <span>Buy Data</span>
              </div>
              <ChevronDown></ChevronDown>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2  w-full p-4 rounded justify-between ">
            <div className='flex gap-5'>
            <Tv size={30} />
              <span>TV Subscription</span>
              </div>
              <ChevronDown></ChevronDown>
            </button>
          </li>
          <li>
            <button className="flex text-left space-x-2  w-full p-4 rounded justify-between ">
              <div className='flex gap-5'>
              <Zap size={30} />
              <span>Pay Electric Bill</span>
              </div>
              <ChevronDown></ChevronDown>
            </button>
          </li>

          <li>
            <button className="flex items-center space-x-2  w-full p-4 rounded justify-between ">
            <div className='flex gap-5'>
            <NotepadText size={30} />
              <span>Transaction History</span>
              </div>
              <ChevronDown></ChevronDown>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2  w-full p-4 rounded justify-between ">
            <div className='flex gap-5'>
            <Headset size={30} />
              <span>Help & Support</span>
              </div>
              <ChevronDown></ChevronDown>
            </button>
          </li>
        </ul>
        </nav>
       
        </div>
        <p className="mt-auto text-2xl absolute bottom-12 ml-10 left-10 text-center font-bold text-white z-[100]">The BEST place to</p>
        <p className="mt-auto text-2xl absolute bottom-4 ml-10 left-10 text-center font-bold text-white ">subscribe / buy</p>
      </div>
      </>
    
    );
  };
  

export default Sidebar;