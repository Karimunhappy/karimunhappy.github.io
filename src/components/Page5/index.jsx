import { FaEarthAsia } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdDirectionsBoatFilled } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";

const Page5 = () => {
    return (
        <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-screen px-4 py-12">
            <div className="text-4xl text-center">Penghitung Statistik</div>
            <div className="bg-green-500 h-[3px] w-32 my-3"></div>
            <div className="w-screen flex flex-wrap justify-around gap-y-5 mt-5">
                <div className="w-52 h-52 rounded-full border-gray-500 border-5 flex flex-col justify-center items-center text-center">
                    <div className="text-5xl -mt-2">
                        <IoIosPeople />
                    </div>
                    <div className="text-5xl">2,234</div>
                    <div className="bg-green-500 h-[3px] w-16 my-2"></div>
                    <div className="text-md">
                        Jumlah Pelanggan
                    </div>
                </div>
                <div className="w-52 h-52 rounded-full border-gray-500 border-5 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl -mt-2">
                        <FaEarthAsia />
                    </div>
                    <div className="text-5xl">2,234</div>
                    <div className="bg-green-500 h-[3px] w-16 my-2"></div>
                    <div className="text-md">
                        Jumlah Perjalanan
                    </div>
                </div>
                <div className="w-52 h-52 rounded-full border-gray-500 border-5 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl -mt-2">
                        <PiAirplaneTiltFill />
                    </div>
                    <div className="text-5xl">2,234</div>
                    <div className="bg-green-500 h-[3px] w-16 my-2"></div>
                    <div className="text-md">
                        Tipe Perjalanan
                    </div>
                </div>
                <div className="w-52 h-52 rounded-full border-gray-500 border-5 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl -mt-2">
                        <MdDirectionsBoatFilled />
                    </div>
                    <div className="text-5xl">2,234</div>
                    <div className="bg-green-500 h-[3px] w-16 my-2"></div>
                    <div className="text-md">
                        Bepergian dengan Kapal
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page5;