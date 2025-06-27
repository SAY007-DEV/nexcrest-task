import React from 'react';

const Success = ({ resetForm }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mt-6">Success!</h2>
          <p className="text-gray-600 mt-2">Your information has been submitted successfully.</p>
          <div className="mt-8 flex justify-center space-x-4">
            <button type="button" className="w-full sm:w-auto bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" onClick={() => alert('OK button clicked!')}>
              OK
            </button>
            <button type="button" className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={resetForm}>
              New Entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;