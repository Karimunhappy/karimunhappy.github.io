import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Bot = () => {
    return (
        <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer  bg-[#25D366] w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
            <a href="https://api.whatsapp.com/send?phone=6281353312334" className="flex items-center justify-center h-full w-full  text-white text-5xl">
                <FaWhatsapp />
            </a>
        </div>
    );
};

export default Bot;