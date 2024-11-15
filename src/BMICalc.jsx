import React, { useState } from 'react'
import "./BMICalc.css"

export default function BMICalc() {
     
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [bmi,setBmi]=useState(null);
    const [category,setCategory]=useState("");

    const calcBMI=()=>{
        if(height && weight)
        {
            const heightMeter= height/100;
            const bmi=(weight/(heightMeter * heightMeter)).toFixed(2);
            setBmi(bmi);

            if(bmi< 18.5)
            {
                setCategory("Underweight");
            }
            else if (bmi>=18.5 && bmi<=24.9)
            {
                setCategory("Normal Weight");
            }
            else if (bmi>=25 && bmi<=29.9)
            {
                setCategory("Overweight");
            }
            else{
                setCategory("Obese");
            }
        }
    }

  return (
    <div className='bmi-card'> 
    <h2>BMI Calculator</h2>
      <div className='input-group'>
        <label>Weight (Kg)</label>
        <input type='number' value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder='Enter your weight'/>

      </div>

        <div className='input-group'>
        <label>Height (cm) </label>
        <input type='number' value={height} onChange={(e)=>setHeight(e.target.value)} placeholder='Enter your height'/>

      </div>
      <button className='btn-calc' onClick={calcBMI}> Calculate BMI</button>
      {
        bmi && (
            <div className='result'>
             <h3>Your BMI:{bmi}</h3>
             <h4>Category:{category}</h4>

            </div>
        )
      }
    </div>
  )
}
