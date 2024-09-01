import React, { useState } from 'react';
import { Home, DollarSign, Wifi, Tv, Zap, RefreshCcw, ChevronDown, Headset, NotepadText, LogOut } from 'lucide-react';
import S from "../../assets/Group.png"
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    const getButtonClass = (itemName) => {
        let baseClass = 'flex items-center w-full my-4 p-4 rounded-2xl transition-colors duration-200';
        if (activeItem === itemName) {
            return `${baseClass} bg-[#4169E1] text-white`;
        } else {
            return `${baseClass} text-blue-800 hover:bg-gray-200`;
        }
    };

    return (
        <div className='bg-gray-100 p-8 h-full flex flex-col w-1/4'>
            <div className='flex flex-row align-text-bottom items-baseline'>
                <img src={S} className="w-10 h-10 mr-2" alt='logo image'/>
                <h1 className="text-3xl font-bold mb-8 flex align-text-bottom text-end text-[#000080]"> subsum</h1>
            </div>
            <nav className='h-fit'>
                <ul className="font-bold text-xl flex flex-col justify-between space-y-24">
                    <div>
                        <li>
                            <Link to="/dashboard/first" onClick={() => handleItemClick('Dashboard')} >
                                <button className={getButtonClass('Dashboard')}>
                                    <div className='flex gap-5'>
                                        <Home size={25} />
                                        <span>Dashboard</span>
                                    </div>
                                    <ChevronDown />
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/fifth" onClick={() => handleItemClick('Buy Airtime')}>
                                <button className={getButtonClass('Buy Airtime')}>
                                    <div className='flex gap-5'>
                                        <DollarSign size={25} />
                                        <span>Buy Airtime</span>
                                    </div>
                                    <ChevronDown />
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/buy-data" onClick={() => handleItemClick('Buy Data')}>
                                <button className={getButtonClass('Buy Data')}>
                                    <div className='flex gap-5'>
                                        <Wifi size={25} />
                                        <span>Buy Data</span>
                                    </div>
                                    <ChevronDown />
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/tv-subscription" onClick={() => handleItemClick('TV Subscription')}>
                                <button className={getButtonClass('TV Subscription')}>
                                    <div className='flex gap-5'>
                                        <Tv size={25} />
                                        <span>TV Subscription</span>
                                    </div>
                                    <ChevronDown />
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pay-electric" onClick={() => handleItemClick('Pay Electric Bill')}>
                                <button className={getButtonClass('Pay Electric Bill')}>
                                    <div className='flex gap-5'>
                                        <Zap size={25} />
                                        <span>Pay Electric Bill</span>
                                    </div>
                                    <ChevronDown />
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/second" onClick={() => handleItemClick('Airtime to Cash')}>
                                <button className={getButtonClass('Airtime to Cash')}>
                                    <div className='flex gap-5'>
                                        <RefreshCcw size={25} />
                                        <span>Airtime to Cash</span>
                                    </div>
                                    <ChevronDown />
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/fourth" onClick={() => handleItemClick('Transaction History')}>
                                <button className={getButtonClass('Transaction History')}>
                                    <div className='flex gap-5'>
                                        <NotepadText size={25} />
                                        <span>Transaction History</span>
                                    </div>
                                    <ChevronDown />
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/third" onClick={() => handleItemClick('Help & Support')}>
                                <button className={getButtonClass('Help & Support')}>
                                    <div className='flex gap-5'>
                                        <Headset size={25} />
                                        <span>Help & Support</span>
                                    </div>
                                    <ChevronDown />
                                </button>
                            </Link>
                        </li>
                    </div>

                    <li className=''>
                        <Link to="/logout" onClick={() => handleItemClick('Log out')}>
                            <button className={getButtonClass('Log out')}>
                                <div className='flex gap-5'>
                                    <LogOut size={25} />
                                    <span>Log out</span>
                                </div>
                                <ChevronDown />
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardSidebar;