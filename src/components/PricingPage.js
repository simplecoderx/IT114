import React from 'react';
import PopupForm from './PopupForm';

function PricingPage() {
  return (
    <>
      <h1>Pricing Plans</h1>
      <div>
        <h2>Basic Plan</h2>
        <p>Description of the basic plan.</p>
        <PopupForm
          planName="Basic"
          planDescription="Description of the basic plan."
          buttonLabel="Choose Basic Plan"
        />
      </div>
      <div>
        <h2>Standard Plan</h2>
        <p>Description of the standard plan.</p>
        <PopupForm
          planName="Standard"
          planDescription="Description of the standard plan."
          buttonLabel="Choose Standard Plan"
        />
      </div>
      <div>
        <h2>Premium Plan</h2>
        <p>Description of the premium plan.</p>
        <PopupForm
          planName="Premium"
          planDescription="Description of the premium plan."
          buttonLabel="Choose Standard Plan"
          />
        </div>
        </> 
  );
}
export default PricingPage;
