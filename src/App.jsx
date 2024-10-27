import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import PricingPage from './Components/PricingPage';
import PaymentPage from './Components/PaymentPage';
import Cyberimage from './assets/images/2077.jpg';
import GtaImage from './assets/images/nfsheat.jpg';
import WukongImage from './assets/images/wukong.jpg';
import Forza from './assets/images/forza.jpg';
import Gta6 from './assets/images/gta6.jpg';

function App() {
    const images = [Cyberimage, GtaImage, WukongImage, Forza, Gta6];
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(prevImage => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 3000);
        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <Router>
            <div
                className="w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${currentImage})`,
                }}
            >
                <div className="w-full h-full bg-gradient-to-r from-slate-900 to-transparent flex justify-center items-center">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/payment" element={<PaymentPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
