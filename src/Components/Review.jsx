import React from 'react'

function Review({ nextStep, prevStep, formData }) {
  const { fullName, email, phone, country, state, city } = formData;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2 sm:space-x-4 w-full">
              <div className="flex flex-col items-center opacity-50">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">1</div>
                <span className="text-xs text-center mt-1">Personal Info</span>
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="flex flex-col items-center opacity-50">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">2</div>
                <span className="text-xs text-center mt-1">Address</span>
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">3</div>
                <span className="text-xs text-center mt-1">Review</span>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Review &amp; Submit</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="font-medium">Full Name</span>
              <span className="text-gray-900">{fullName}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="font-medium">Email</span>
              <span className="text-gray-900">{email}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="font-medium">Phone</span>
              <span className="text-gray-900">{phone}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="font-medium">Country</span>
              <span className="text-gray-900">{country}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="font-medium">State</span>
              <span className="text-gray-900">{state}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="font-medium">City</span>
              <span className="text-gray-900">{city}</span>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button type="button" className="w-full sm:w-auto bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" onClick={prevStep}>
              Back
            </button>
            <button type="button" className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={nextStep}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review