import React from 'react';
import { useNavigate } from 'react-router-dom';

function PricingPage() {
    const navigate = useNavigate();

    const handleChoosePlanClick = (price) => {
        navigate('/payment', { state: { price } });
    };

    return (
        <div>
            <h2 className='font-bold text-[30px] m-[auto] p-8'>Pricing Plans Offered: </h2>
            <div className="grid grid-cols-3 gap-4">
                <div className='bg-slate-800 p-7 text-[20px] border-2 border-blue-800 rounded-3xl hover:border-blue-200'>
                    <h2 className='text-blue-200 text-[45px]'>27.0$ /month</h2>
                    <br />
                    <ul>
                        <h2 className='font-bold text-[30px] text-pink-400'>Master Plan</h2>
                        <li>&#10003; New mod updates</li>
                        <li>&#10003; VIP mod section</li>
                        <li>&#10003; Faster download speeds</li>
                        <li>&#10003; Customer care and gmail support</li>
                        <li>&#10003; Any new mod for free</li>
                    </ul>
                    <button className='m-4' onClick={() => handleChoosePlanClick('27.0$ /month')}>Choose Plan</button>
                </div>
                
                <div className='bg-slate-800 p-7 text-[20px] border-2 border-blue-800 rounded-3xl hover:border-blue-200'>
                    <h2 className='text-blue-200 text-[45px]'>15.0$ /month</h2>
                    <br />
                    <ul>
                        <h2 className='font-bold text-[30px] text-blue-400'>Mid-level Plan</h2>
                        <li>&#10003; New mod updates</li>
                        <li>&#10007; VIP mod section</li>
                        <li>&#10003; Faster download speeds</li>
                        <li>&#10003; Customer care and gmail support</li>
                        <li>&#10003; Any new mod for free</li>
                    </ul>
                    <button className='m-4' onClick={() => handleChoosePlanClick('15.0$ /month')}>Choose Plan</button>
                </div>
                
                <div className='bg-slate-800 p-7 text-[20px] border-2 border-blue-800 rounded-3xl hover:border-blue-200'>
                    <h2 className='text-blue-200 text-[45px]'>5.0$ /month</h2>
                    <br />
                    <ul>
                        <h2 className='font-bold text-[30px] text-green-400'>Basic Plan</h2>
                        <li>&#10007; New mod updates</li>
                        <li>&#10007; VIP mod section</li>
                        <li>&#10007; Faster download speeds</li>
                        <li>&#10003; Customer care and gmail support</li>
                        <li>&#10003; Any new mod for affordable free</li>
                    </ul>
                    <button className='m-4' onClick={() => handleChoosePlanClick('5.0$ /month')}>Choose Plan</button>
                </div>
            </div>
        </div>
    );
}

export default PricingPage;
