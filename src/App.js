import { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmistatus, setBmiStatus] = useState("");
  const [bmiValue, setBmiValue] = useState(); 

  const handleheight = (evt) => {
    setHeight(evt.target.value);
  };

  const handleweight = (evt) => {
    setWeight(evt.target.value);
  };

  const resetbtn = () => {
    setHeight("");
    setWeight("");
    setBmiStatus("");
    setBmiValue(); 
  };

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmiValue(bmi.toFixed(2)); // Set BMI value with two decimal places

      if (bmi < 18.5) {
        setBmiStatus("Underweight. Eat some food.");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setBmiStatus("Keep going, you're at a normal weight.");
      } else if (bmi >= 25 && bmi < 29.9) {
        setBmiStatus("Overweight, you should reduce some weight.");
      } else {
        setBmiStatus("Obese. You're at risk, you must reduce weight.");
      }
    }
  };

  return (
    <>
      <div className='bmi-calculator'>
        <div className='box'></div>
        <div className='data'>
          <h1>BMI Calculator</h1>

          <div className='input-container'>
            <label htmlFor='height'>Height (cm)</label>
            <input onChange={handleheight} value={height} type='number' id='height' />
          </div>
          <div className='input-container'>
            <label htmlFor='weight'>Weight (kg)</label>
            <input onChange={handleweight} value={weight} type='number' id='weight' />
          </div>

          <div style={{ marginTop: '50px' }}>
            <button className='btn-cheack' onClick={calculateBmi}>Cheack</button>
            <button onClick={resetbtn} className='btn-reset'>Reset</button>

            <div className='result'>
              <p>BMI Value: {bmiValue}</p>
              <p>BMI Status: {bmistatus}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
