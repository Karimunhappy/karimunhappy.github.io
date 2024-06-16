const Footer = () => {
    return (
        <div className="bg-black w-screen text-slate-300 flex flex-col justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-12 lg:px-20 py-12">
                <div className="grid grid-rows-3 gap-3">
                    <div>
                        <div className="text-xl font-Montserrat">Information</div>
                        <div className="bg-green-500 h-[3px] w-16 my-1"></div>
                    </div>
                    <div className="font-Poppins">Owner: Ason Gojek</div>
                    <div className="font-Poppins">Instagram:
                        <a href="#" className="text-green-600"> karimunjawa_happy</a>
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-3">
                    <div>
                        <div className="text-xl font-Montserrat">Contact Us</div>
                        <div className="bg-green-500 h-[3px] w-16 my-1"></div>
                    </div>
                    <div className="font-Poppins">Email: tour@karimunjawafun.com</div>
                    <div className="font-Poppins">
                        Call/WhatsApp :
                        <a href="#" className="text-green-600"> (+62)82137444853</a>
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-3">
                    <div>
                        <div className="text-xl font-Montserrat">Location</div>
                        <div className="bg-green-500 h-[3px] w-16 my-1"></div>
                    </div>
                    <div className="font-Poppins">Office: Jl. Dr Soetomo RT 05/02 Karimunjawa (Srikandi Homestay)</div>
                </div>
                <div className="lg:flex justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085.4179149781476!2d110.41459193990752!3d-5.839606578240452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e73cde5319dc2ed%3A0x11dea1689fc42ed0!2sSunset%20Beach!5e0!3m2!1sid!2sid!4v1716875908615!5m2!1sid!2sid" width="150" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="w-screen flex justify-center">
                <div className="bg-gray-500 w-5/6 h-[1px] flex justify-center"></div>
            </div>
            <div className="w-screen flex justify-center">
                <center className="py-7 font-Poppins">
                    Copyright © Karimunjawahappy.com Travel Agency by Ason Theme. Powered by Turnitin.id
                </center>
            </div>
        </div>
    )
}

export default Footer;