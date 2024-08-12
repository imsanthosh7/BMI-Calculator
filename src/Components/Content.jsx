import React, { useState } from 'react'
import img from '..//assets/image.png'

function Content() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmistatus, setBmiStatus] = useState("");
    const [errorMessgae, setErrorMessage] = useState(false);

    const calculateBmi = () => {

        setErrorMessage(false);

        if (height && weight) {
            const heightInmeters = height / 100;
            if (isNaN(heightInmeters) || isNaN(weight) || heightInmeters <= 0 || weight <= 0) {
                setErrorMessage(true);
                setBmi(null);
                setBmiStatus("");
                return;
            }
            const bmiValue = weight / (heightInmeters * heightInmeters);
            setBmi(bmiValue.toFixed(2));
            if (bmiValue < 18.5) {
                setBmiStatus("UnderWeight");
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setBmiStatus("Normal Weight");
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                setBmiStatus("Overweight");
            } else {
                setBmiStatus("Obese")
            }

        } else {
            setErrorMessage(true);
            setBmi(null);
            setBmiStatus("");
        }

    }




    return (
        <>
            <div className=' grid md:grid-cols-2 bg-violet-400 rounded-lg p-2 md:p-3'>
                <div className='flex items-center p-1 md:p-3'>
                    <img className=' md:w-[300px] w-[260px]' src={img} alt="" />
                </div>
                <div className='flex m-5 flex-col gap-5'>
                    <h1 className='md:text-2xl text-[20px] font-bold text-gray-900'>BMI CALCULATOR</h1>
                    <div className='flex flex-col md:gap-2 gap-1'>
                        {
                            errorMessgae && <div><p className='md:text-[15px] text-[13px] text-red-600'>Please enter the valid number:</p></div>
                        }
                        <label htmlFor="height" className='text-gray-900 font-semibold'>
                            Height(cm):
                        </label>
                        <input className='md:p-2 p-1 rounded-md outline-none bg-gray-50'
                            type="text"
                            id='height'
                            value={height}
                            onChange={(e) => setHeight(e.target.value)} />
                        <label htmlFor="weight" className='text-gray-900 font-semibold'>
                            Weight(kg):
                        </label>
                        <input className='md:p-2 p-1 rounded-md outline-none bg-gray-50'
                            type="text"
                            id='weight'
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <button className='bg-yellow-400 hover:bg-yellow-500 duration-100 text-white font-semibold w-40 p-2 rounded-md' onClick={calculateBmi}>Calculate BMI</button>
                    {bmi !== null && (
                        <div className='bg-slate-50 w-48 p-3 rounded-md'>
                            <p className='font-semibold text-gray-900'>Your BMi is: {bmi}</p>
                            <p className='font-semibold text-gray-900'>Status: {bmistatus}</p>
                        </div>
                    )

                    }
                </div>
            </div>
        </>
    )
}

export default Content