import React, { useState } from 'react'

function PersonalInfo({ nextStep, updateFormData, formData }) {
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let processedValue = value;

    if (id === 'phone') {
      processedValue = value.replace(/[^0-9]/g, '');
    }
    
    updateFormData({ [id]: processedValue });

    if (id === 'email') {
      if (!validateEmail(value)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    }
  };

  const handleNext = () => {
    if (validateEmail(formData.email)) {
      nextStep();
    } else {
      setEmailError('Invalid email format');
    }
  };

  const isNextDisabled = !formData.fullName || !formData.email || !formData.phone || !!emailError;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2 sm:space-x-4 w-full">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">1</div>
                <span className="text-xs text-center mt-1">Personal Info</span>
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="flex flex-col items-center opacity-50">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">2</div>
                <span className="text-xs text-center mt-1">Address</span>
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="flex flex-col items-center opacity-50">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">3</div>
                <span className="text-xs text-center mt-1">Review</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Personal Information</h2>
          <form>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" placeholder="John Doe" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.fullName} onChange={handleChange} />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.email} onChange={handleChange} />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="123-456-7890" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="flex justify-end mt-6">
              <button type="button" className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50" onClick={handleNext} disabled={isNextDisabled}>
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