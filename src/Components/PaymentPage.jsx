import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentPage() {
    const location = useLocation();
    const selectedPrice = location.state?.price || 'No price selected'; // Fallback if no price is passed

    const alertMessage = () => {
        alert(`Email will be sent.\nThank you for subscribing with the selected plan: ${selectedPrice}`);
    };

    return (
        <div className='grid grid-cols-2 gap-4 text-[20px]'>
            <div className='text-[25px] p-5'>
                <p> With your chosen Pricing, </p>
                <h3 className='text-yellow-300 mb-4'>Selected Price: {selectedPrice}</h3>
                <p>Fill in the required details, </p>
                <p>to receive an email for verification and payment</p>
            </div>
            <div className='bg-slate-800 p-7 text-[20px] border-2 border-blue-800 rounded-3xl hover:border-blue-200'>
                <h2 className='text-blue-200'>Pay with card:</h2>
                
                <ul>
                    <li className='p-2'>Business mail
                        <br />
                        <input type="email" placeholder='Valid Email' className='block w-full border border-gray-300 rounded-md shadow-sm' />
                    </li>
                    <li className='p-2'>Card
                        <select className="block w-full border border-gray-300 rounded-md shadow-sm">
                            <option value="debit">DEBIT</option>
                            <option value="visa">VISA</option>
                            <option value="equity-card">EQUITY-CARD</option>
                            <option value="cvc">CVC</option>
                        </select>
                    </li>
                    <li className='p-2'>Country
                        <br />
                        <input type="text" placeholder='Country name' className='block w-full border border-gray-300 rounded-md shadow-sm' />
                    </li>
                    <li>Valid details should be provided to avoid errors on the page.</li>
                </ul>
                <button className='m-4' onClick={alertMessage}>Subscribe</button>
            </div>
        </div>
    );
}

export default PaymentPage;
