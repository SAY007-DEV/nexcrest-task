import React from 'react';

const Success = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
        <p className="text-gray-700">Your information has been submitted successfully.</p>
      </div>
    </div>
  );
};

export default Success;