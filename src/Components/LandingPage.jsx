import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTwitterSquare } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

function LandingPage() {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/pricing');
    };

    return (
        <div className='w-full font-bold '>
            <nav className='w-full p-3 my-7 text-[40px] flex justify-between items-center bg-slate-900 bg-opacity-50'>
                <h2>SQUEEN.mod</h2>
                <div className='flex space-x-4'>
                    <FaTwitterSquare />
                    <SiDiscord />
                </div>
            </nav>
            <div className="grid grid-cols-2 gap-4 text-[20px]">
                <div className="p-5">
                    <h1>Welcome to SQUEEN.mod!</h1>
                    <p>
                        This is your go-to platform for game mods, where you can discover, download, and share the latest mods to enhance your gaming experience.
                        Enjoy the VIP mods for much cheaper than production versions. Get more streamers on your live events.
                        You can start today for as low as <p className='text-green-400'>$ 5.00</p>
                        for VIP mods are as cheap as <p className='text-pink-400'>$ 27.00</p>
                    </p>
                </div>
                <div className="p-4 m-[auto]">
                    <button 
                        onClick={handleStartClick}
                        className='bg-slate-700 hover:bg-slate-900 text-blue-200'
                    >
                        Start today
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
