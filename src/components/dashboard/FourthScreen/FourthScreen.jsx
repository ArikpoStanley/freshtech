import React, { useState } from 'react'
import {ChevronLeft, UserRound, Bell, ClipboardCopy, ChevronDown} from 'lucide-react'
import DashboardSidebar from '../dashboard-sidebar'
import { MessageSquare, Phone, Star, AlertCircle, ArrowRight, ListFilter} from 'lucide-react';

const transactions = [
  { id: 1, type: 'Mtn Airtime VTU', amount: 'N100.00', status: 'Initiated', method: 'Transfer', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 2, type: 'Airtel DATA VTU', amount: 'N500.00', status: 'Successful', method: 'Wallet', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 3, type: 'Startimes', amount: 'N500.00', status: 'Failed', method: 'Card Payment', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 4, type: 'DSTV', amount: 'N500.00', status: 'Initiated', method: 'Transfer', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 5, type: 'Airtel Airtime VTU', amount: 'N2000.00', status: 'Successful', method: 'Wallet', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 6, type: 'Airtel Airtime VTU', amount: 'N500.00', status: 'Failed', method: 'Card Payment', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 7, type: 'Airtel Airtime VTU', amount: 'N2000.00', status: 'Initiated', method: 'Transfer', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 8, type: 'Airtel Airtime VTU', amount: 'N2000.00', status: 'Successful', method: 'Wallet', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 9, type: 'Airtel Airtime VTU', amount: 'N2000.00', status: 'Initiated', method: 'Transfer', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 10, type: 'Airtel Airtime VTU', amount: 'N2000.00', status: 'Initiated', method: 'Transfer', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 11, type: 'Airtel Airtime VTU', amount: 'N2000.00', status: 'Successful', method: 'Wallet', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 12, type: 'Airtel Airtime VTU', amount: 'N2000.00', status: 'Initiated', method: 'Transfer', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 13, type: 'Airtel Airtime VTU', amount: 'N2000.00', status: 'Successful', method: 'Wallet', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
  { id: 14, type: 'Airtel Airtime VTU', amount: 'N2000.00', status: 'Initiated', method: 'Transfer', transactionId: 'T0A5621860935358938T90813', date: '8th January, 2024, 05:20 PM' },
];

const FourthScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
    <DashboardSidebar />
    <div className="flex w-full flex-col p-5 overflow-y-hidden">
      {/* Header */}
    <div className='justify-between flex flex-row align'>
    <div>
        <p className='flex text-[#4C689E] font-semibold'>Transaction History</p>
    </div>
    <div className='flex gap-2 ml-1 font-semibold text-[#4C689E] items-center'>
        <p>Upgrade to merchant</p>
        <Bell size={30} color={'#4169E1'} className='p-2 rounded-full border border-[#4169E1]'/>
        <UserRound size={30} color={'#4169E1'} className='p-2 rounded-full border border-[#4169E1]'/>
    </div>
    </div>

    <div className=" min-h-screen text-[#4C689E]">
    <div className=" min-h-screen p-6">
      <div className="bg-white rounded-lg border">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
          <button 
        onClick={toggleDropdown}
        className="border rounded-xl py-2 text-sm flex items-center bg-gray-100 w-[200px]"
      >
        <ListFilter size={20} className='mx-2' />
        Filter 
      </button>
          </div>
          
          <div className="overflow-x-auto text-[#4C689E] font-bold">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm border-b">
                  <th className="py-2 pr-4">Service</th>
                  <th className="py-2 pr-4">Amount</th>
                  <th className="py-2 pr-4">Total Amount</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2 pr-4">Payment Method</th>
                  <th className="py-2 pr-4">Transaction ID</th>
                  <th className="py-2 pr-4">Date</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b last:border-b-0">
                    <td className="py-3 pr-4 text-sm">{transaction.type}</td>
                    <td className="py-3 pr-4 text-sm">{transaction.amount}</td>
                    <td className="py-3 pr-4 text-sm">{transaction.amount}</td>
                    <td className="py-3 pr-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        transaction.status === 'Successful' ? ' text-green-600' :
                        transaction.status === 'Failed' ? 'text-red-700 ' :
                        ' text-yellow-500'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-sm">{transaction.method}</td>
                    <td className="py-3 pr-4 text-xs text-[#4C689E]">{transaction.transactionId}</td>
                    <td className="py-3 pr-4 text-xs text-[#4C689E]">{transaction.date}</td>
                    <td className="py-3">
                      <button className="text-blue-600 bg-gray-200 px-2 py-1 rounded-xl font-bold text-sm">Open</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>
</>
  )
}

export default FourthScreen