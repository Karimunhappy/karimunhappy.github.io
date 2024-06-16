import React, { useState, useEffect } from 'react';
import { MdDirectionsBoatFilled } from 'react-icons/md';

const IncrementingNumber = () => {
    const targetNumber = 2234; // target nominal
    const startNumber = 1000; // starting number
    const [currentNumber, setCurrentNumber] = useState(startNumber); // initial state

    useEffect(() => {
        const initialIntervalDuration = 1; // initial interval duration in milliseconds
        const slowDownThreshold = 0.9 * targetNumber; // threshold to start slowing down

        const incrementNumber = () => {
            setCurrentNumber((prev) => {
                if (prev < targetNumber) {
                    let intervalDuration = initialIntervalDuration;
                    if (prev >= slowDownThreshold) {
                        const progress = (prev - slowDownThreshold) / (targetNumber - slowDownThreshold);
                        intervalDuration += progress * 100; // increase delay gradually
                    }

                    setTimeout(() => {
                        setCurrentNumber(Math.min(prev + 1, targetNumber));
                    }, intervalDuration);

                    return prev;
                }
                return prev;
            });
        };

        const interval = setInterval(incrementNumber, initialIntervalDuration);

        return () => clearInterval(interval);
    }, [targetNumber]);

    return (
        <div className="w-52 h-52 rounded-full border-gray-500 border-5 flex flex-col justify-center items-center text-center">
            {/* <div className="text-4xl -mt-2">
                <MdDirectionsBoatFilled />
            </div>
            <div className="text-5xl">{currentNumber.toLocaleString()}</div>
            <div className="bg-green-500 h-[3px] w-16 my-2"></div>
            <div className="text-md">
                Bepergian dengan Kapal
            </div> */}
            <div className="relative group bg-blue-300 w-52 h-52 flex items-center justify-center">
                <div className="bg-red-300 w-24 h-24 border-2 border-black transition-colors duration-300 group-hover:border-blue-500">
                    Content
                </div>
            </div>
        </div>
    );
};

export default IncrementingNumber;
