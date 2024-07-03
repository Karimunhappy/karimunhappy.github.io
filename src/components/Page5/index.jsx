import { FaEarthAsia } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdDirectionsBoatFilled } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";

const Page5 = () => {
  const countStatistic = [
    {
      icon:<IoIosPeople />,
      count:"2,234",
      text:"Jumlah Pelanggan"
    },
    {
      icon:<FaEarthAsia />,
      count:"2,234",
      text:"Jumlah Perjalanan"
    },
    {
      icon:<PiAirplaneTiltFill />,
      count:"2,243",
      text:"Tipe Perjalanan"
    },
    {
      icon:<MdDirectionsBoatFilled />,
      count:"2,123",
      text:"Bepergian dengan Kapal"
    }
    ]
    return (
        <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-screen px-4 py-12">
            <h2 className="md:text-4xl text-center font-Montserrat">Penghitung Statistik</h2>
            <div className="bg-green-500 h-[3px] w-32 my-3"></div>
            <div className="w-screen flex flex-wrap justify-around gap-y-5 mt-5">
              {
                countStatistic.map((e, i)=>(
                <div className="w-52 h-52 rounded-full border-gray-500 border-5 flex flex-col justify-center items-center text-center">
                    <div className="text-3xl md:text-5xl -mt-3">
                        {e.icon}
                    </div>
                    <div className="text-5xl">{e.count}</div>
                    <div className="bg-green-500 h-[3px] w-16 my-2"></div>
                    <div className="text-base font-Poppins">
                        {e.text}
                    </div>
                </div>
                ))
              }
              
              
                {/*}<div className="w-52 h-52 rounded-full border-gray-500 border-5 flex flex-col justify-center items-center text-center">
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
                </div>*/}

            </div>
        </div>
    )
}

export default Page5;