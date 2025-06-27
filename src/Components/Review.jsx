import React from 'react'

function Review({ nextStep, prevStep, formData }) {
  const { fullName, email, phone, country, state, city } = formData;

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-md">
        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center w-full">
            <div className="flex flex-col items-center text-center w-1/3 relative">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div className="mt-2 text-xs leading-tight">
                Personal<br />Information
              </div>
              <div className="absolute top-3.5 right-0 w-full border-t border-gray-300" style={{zIndex: -1}} />
            </div>
            <div className="flex flex-col items-center text-center w-1/3 relative">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <div className="mt-2 text-xs leading-tight">Address</div>
              <div className="absolute top-3.5 right-0 w-full border-t border-gray-300" style={{zIndex: -1}} />
            </div>
            <div className="flex flex-col items-center text-center w-1/3 relative">
              <div className="w-8 h-8 rounded-full bg-indigo-700 text-white flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <div className="mt-2 text-xs leading-tight">Review &amp; Submit</div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-6">Review &amp; Submit</h2>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between border-b pb-1">
            <span>Full Name</span>
            <span>{fullName}</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span>Email</span>
            <span>{email}</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span>Phone</span>
            <span>{phone}</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span>Country</span>
            <span>{country}</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span>State</span>
            <span>{state}</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span>City</span>
            <span>{city}</span>
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <button type="button" className="border rounded px-5 py-2" onClick={prevStep}>
            Back
          </button>
          <button type="button" className="bg-indigo-700 text-white rounded px-5 py-2" onClick={nextStep}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Review