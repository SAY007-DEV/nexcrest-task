import React, { useState, useEffect } from 'react';

function Address({ nextStep, prevStep, updateFormData, formData }) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [allStates, setAllStates] = useState([]);

  useEffect(() => {
    fetch('/data/Countries.json')
      .then(response => response.json())
      .then(data => {
        setCountries(data.countries);
        setAllStates(data.states);
      });
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    const selectedCountry = countries.find(c => c.code === countryCode);
    updateFormData({ country: selectedCountry ? selectedCountry.name : '' });
    
    const countryStates = allStates.filter(s => s.countryCode === countryCode);
    setStates(countryStates);
    updateFormData({ state: '', city: '' });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let processedValue = value;

    if (id === 'zipCode') {
      processedValue = value.replace(/[^0-9]/g, '');
    }

    updateFormData({ [id]: processedValue });
  };

  const isNextDisabled = !formData.country || !formData.state || !formData.city || !formData.zipCode;

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
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
                <span className="text-xs text-center mt-1">Address</span>
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="flex flex-col items-center opacity-50">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">3</div>
                <span className="text-xs text-center mt-1">Review</span>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Address</h2>
          <form>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="country">Country</label>
              <select id="country" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={countries.find(c => c.name === formData.country)?.code || ''}
                      onChange={handleCountryChange}>
                <option value="">Select Country</option>
                {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="state">State</label>
              <select id="state" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.state}
                      onChange={handleChange}
                      disabled={!formData.country}>
                <option value="">Select State</option>
                {states.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="city">City</label>
              <input id="city" type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.city} onChange={handleChange} disabled={!formData.state} />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="zipCode">Zip Code</label>
              <input id="zipCode" type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value={formData.zipCode} onChange={handleChange} />
            </div>
            <div className="flex justify-between mt-6">
              <button type="button" className="w-full sm:w-auto bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" onClick={prevStep}>Back</button>
              <button type="button" className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={nextStep} disabled={isNextDisabled}>Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Address;