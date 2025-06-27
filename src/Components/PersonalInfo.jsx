import React from 'react'

function PersonalInfo() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6">
    <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* Step 1 */}
  <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full">
    <nav className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-[#3f3fbf] text-white flex items-center justify-center font-semibold">
            1
          </div>
          <span className="text-center text-sm mt-1">Personal<br />Information</span>
        </div>
        <div className="flex-1 h-[1px] bg-gray-300" />
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-semibold">
            2
          </div>
          <span className="text-center text-sm mt-1">Address</span>
        </div>
        <div className="flex-1 h-[1px] bg-gray-300" />
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-semibold">
            3
          </div>
          <span className="text-center text-sm mt-1">Review &amp; Submit</span>
        </div>
      </div>
    </nav>
    <h2 className="text-2xl font-bold text-[#0a101f] mb-6">Personal Information</h2>
    <form>
      <label className="block mb-2 font-semibold text-sm" htmlFor="fullname1">Full Name</label>
      <input id="fullname1" type="text" placeholder="Full Name" className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3f3fbf]" />
      <label className="block mb-2 font-semibold text-sm" htmlFor="email1">Email</label>
      <input id="email1" type="email" placeholder="Email" className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3f3fbf]" />
      <label className="block mb-2 font-semibold text-sm" htmlFor="phone1">Phone</label>
      <input id="phone1" type="tel" placeholder="Phone" className="w-full mb-6 px-3 py-2 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3f3fbf]" />
      <div className="flex justify-end">
        <button type="button" className="bg-[#3f3fbf] text-white px-5 py-2 rounded-md hover:bg-[#2e2e9e] transition">
          Next
        </button>
      </div>
    </form>
  </div>
</div>

    
    
    </div>
  )
}

export default PersonalInfo