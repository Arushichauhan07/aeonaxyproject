import React from 'react';
import Line from './Line';

const Body = () => {
  return (
    <div className='grid grid-cols-4 py-4'>
        <div className='px-1 w-64 md:w-auto md:pl-24 flex flex-column'>
            <ul className='px-10 ml-6'>
                    <li className='my-2 cursor-pointer font-[400] hover:font-[700]'>Shared event types</li>
                    <li className='my-2 cursor-pointer font-[400] hover:font-[700]' >Single sign-on</li>
                    <li className='my-2 cursor-pointer font-[400] hover:font-[700]'>Work flow</li>
                    <li className='my-2 cursor-pointer font-[400] hover:font-[700]'>Data deletion</li>
            </ul>
            
</div>
        <div className='w-auto col-span-2'>
            <div className='mx-6 my-1'>
                <h1 className='font-[700]'>
                    Delete Information from your organization
                </h1>
                <p className='py-2 font-2xl'>
                    When anyone in your organization schedules an event with an invitee, information about the event and everyone
                    part of it is saved in Calendly. If you need to delete this information from Calendly and its venders for compliance
                    reasons, you can do so without contacting support.
                </p>
               
                    <div className='my-4 md:h-16 lg:h-10 bg-cover bg-red-200'>
                    <h1 className='px-2 py-2 font-[500] md:font-[700]'>
                    Once you delete information you won't be able to recover it.
                    </h1>
                    </div>
                
                
                <p className='py-2 pb-2'>
                    Invitee data will be deleted <span className='font-[700]'>7 days</span> from the date you make the request.
                </p>
            </div>
            <Line/>
            <div className='mx-6 my-1'>
                <h2 className='font-[500]'>
                    Delete Information for specific invitees
                </h2>
                <label for="message" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Enter an invitee's email to delete all there personally
                identifiable information from an organization and integrations. During the data depletion process, Calendly removes the deleted invitee
                from their spot on group events and cancels both pending and upcoming events with them.</label>
                <textarea id="message" rows="4" className="block mb-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" placeholder=""></textarea>
                <button type='button' className='bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-full'>
                  Delete
                </button>
            </div>
            <Line/>
            <div className='mx-6 my-1'>
                <h2 className='font-[500]'>
                    Delete Information within a period of time
                </h2>
                <p className='py-2'>Choose a date to delete all information from scheduled events within a period of time.
                </p>
                <div className='flex space-x-4'>
                    <div>
                        <input type="text" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select a date range" required />
                    </div>
                    <button type='button' className='bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-full'>
                    Delete
                    </button>
                </div>
            </div>
            <Line/>
            <div className='mx-6 my-1'>
                <h2 className='font-[500] mb-4'>
                    Data deletion history
                </h2>
                <div class="grid items-center md:grid-cols-3 rounded-md border-spacing-1 border border-slate-200">
                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" className="inline-flex items-center px-4 py-2 mb-1 me-3 text-sm font-medium text-center text-black " type="button">Requested Date
                <svg class="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
                
                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="inline-flex items-center px-4 py-2 mb-1 me-3 text-sm font-medium text-center text-black" type="button">Requested by
                <span className='flex-col'>
                <svg class="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                <svg class="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </span>
                </button>
               
                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="inline-flex items-center px-4 py-2 mb-1 me-3 text-sm font-medium text-center text-black" type="button">Status
                <span className='flex-col'>
                <svg class="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                <svg class="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </span>
                </button>
            </div>
            <Line/>
            <div className='mb-8'>
                <h2 className='font-[500] mb-4'>
                    Data your account
                </h2>
                <p>
                    You can delete your account in your <a className='text-primaryColor' href='#'>account settings</a><span>.</span>
                </p>
            </div>
            </div>
            
        </div> 
        <div>
            <div>
                <button type='button' className='py-2 px-3 pb-3 ml-16 shadow-2xl shadow-gray-800 text-slate-400 -rotate-90 translate-y-64 translate-x-64 items-center border border-none rounded-md'>
                Feedback
                </button>
            </div>
            <div className='my-64'>
                <button type="button" class="mt-56 relative inline-flex items-center p-4 font-light text-base text-center text-white bg-gray-800 rounded-lg hover:bg-gray-600">
                Getting Started
                    <span class="sr-only">Notifications</span>
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -end-2 dark:border-gray-900">3</div>
                </button>
            </div>
        </div>

</div>
  )
}

export default Body;
