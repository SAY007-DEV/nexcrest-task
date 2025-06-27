import { useState } from 'react'

import './App.css'
import PersonalInfo from './Components/PersonalInfo'
import Address from './Components/Address'
import Review from './Components/Review'
import Success from './Components/Success'


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // PersonalInfo
    fullName: '',
    email: '',
    phone: '',
    // Address
    country: '',
    state: '',
    city: '',
    addressLine1: '',
    addressLine2: '',
    zipCode: '',
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };


  return (
    <>
     {step === 1 && <PersonalInfo nextStep={nextStep} updateFormData={updateFormData} formData={formData} />}
     {step === 2 && <Address nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} formData={formData} />}
     {step === 3 && <Review nextStep={nextStep} prevStep={prevStep} formData={formData} />}
     {step === 4 && <Success />}
    </>
  )
}

export default App
