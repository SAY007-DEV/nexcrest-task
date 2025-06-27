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
    updateFormData({ [id]: value });
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6">
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
          <label className="block mb-2 font-semibold text-sm" htmlFor="country">Country</label>
          <select id="country" className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md" 
                  value={countries.find(c => c.name === formData.country)?.code || ''} 
                  onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
          </select>
          
          <label className="block mb-2 font-semibold text-sm" htmlFor="state">State</label>
          <select id="state" className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md" 
                  value={formData.state} 
                  onChange={handleChange} 
                  disabled={!formData.country}>
            <option value="">Select State</option>
            {states.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
          </select>

          <label className="block mb-2 font-semibold text-sm" htmlFor="city">City</label>
          <input id="city" type="text" className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md" value={formData.city} onChange={handleChange} disabled={!formData.state} />

          <label className="block mb-2 font-semibold text-sm" htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" type="text" className="w-full mb-6 px-3 py-2 border border-gray-300 rounded-md" value={formData.zipCode} onChange={handleChange} />
          
          <div className="flex justify-between">
            <button type="button" className="border rounded-md px-5 py-2" onClick={prevStep}>Back</button>
            <button type="button" className="bg-[#3f3fbf] text-white px-5 py-2 rounded-md" onClick={nextStep}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Address;