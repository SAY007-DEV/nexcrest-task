import React from 'react'

function Address() {
  return (
    <>
{/* Step 2 */}
<div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full">
  <nav className="flex items-center justify-between mb-8">
    <div className="flex items-center space-x-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-semibold">
          1
        </div>
        <span className="text-center text-sm mt-1">Personal<br />Information</span>
      </div>
      <div className="flex-1 h-[1px] bg-gray-300" />
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-[#3f3fbf] text-white flex items-center justify-center font-semibold">
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
  <h2 className="text-2xl font-bold text-[#0a101f] mb-6">Address</h2>
  <form>
    <label className="block mb-2 font-semibold text-sm" htmlFor="country2">Country</label>
    <select id="country2" className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3f3fbf]">
      <option value disabled selected />
    </select>
    <label className="block mb-2 font-semibold text-sm" htmlFor="state2">State</label>
    <input id="state2" type="text" className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-gray-600 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#3f3fbf]" autoComplete="off" />
    <label className="block mb-2 font-semibold text-sm" htmlFor="city2">City</label>
    <input id="city2" type="text" className="w-full mb-6 px-3 py-2 border border-gray-300 rounded-md text-gray-600 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#3f3fbf]" autoComplete="off" />
    <div className="flex justify-end space-x-4">
      <button type="button" className="border border-gray-300 rounded-md px-5 py-2 hover:bg-gray-100 transition">
        Back
      </button>
      <button type="button" className="bg-[#3f3fbf] text-white px-5 py-2 rounded-md hover:bg-[#2e2e9e] transition">
        Next
      </button>
    </div>
  </form>
</div>

  

    </>
  )
}

export default Address