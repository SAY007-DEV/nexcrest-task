# Multi-Step Responsive Form

This project is a modern, responsive multi-step form built with React and Tailwind CSS. It guides users through entering personal information, address details (with country/state dropdowns), and reviewing their data before submission. The form includes validation, loading states, and a success screen with options to start a new entry.

## Features

- **Multi-step form**: Three steps—Personal Info, Address, and Review & Submit.
- **Responsive design**: Fully mobile-friendly and visually appealing on all devices.
- **Stepper navigation**: Visual stepper at the top of each form step.
- **Field validation**:
  - All fields are required.
  - Email is validated for correct format.
  - Phone number must be exactly 10 digits.
  - Zip code must be numeric.
- **Country/State dropdowns**: Fetches country and state data from a JSON file and updates state options based on the selected country.
- **Loader**: Displays a loading indicator while fetching country/state data.
- **Success screen**: Shows a confirmation message with "OK" and "New Entry" buttons after successful submission.
- **Form reset**: "New Entry" button resets the form for a new submission.

## Getting Started



### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/SAY007-DEV/nexcrest-task
   cd front-end
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm run dev
```

The app will be available at [http://localhost:5173] (or the port shown in your terminal).

## Project Structure
```
front-end/
├── public/
│   └── data/
│       └── Countries.json   # Country and state data
├── src/
│   ├── Components/
│   │   ├── PersonalInfo.jsx
│   │   ├── Address.jsx
│   │   ├── Review.jsx
│   │   └── Success.jsx
│   ├── App.jsx
│   └── ...
├── package.json
└── README.md
```

## Instructions & Usage
- **Step 1: Personal Info**
  - Enter your full name, a valid email, and a 10-digit phone number.
  - All fields are required. The "Next" button is disabled until all are valid.
- **Step 2: Address**
  - Select your country and state from the dropdowns .
  - Enter your city and zip code (zip code must be numeric).
  - All fields are required. The "Next" button is disabled until all are filled.
- **Step 3: Review & Submit**
  - Review your entered information.
  - Click "Submit" to finish.
- **Success Screen**
  - Click "OK" to dismiss or "New Entry" to start a new form.




