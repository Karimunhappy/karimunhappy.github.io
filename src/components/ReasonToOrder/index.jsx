import { FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";
import { FaMoneyBillWave, FaStar, FaWrench } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";


const Page4 = () => {
    const Reason = [
        {
            Icon: <GiPalmTree />,
            subtitle: "Paket Wisata Lengkap dan Variatif",
            title: "Tourgates Wisata Karimunjawa menawarkan berbagai pilihan paket wisata, mulai dari snorkeling di terumbu karang yang indah, island hopping ke pulau-pulau eksotis, hingga menikmati keindahan matahari terbenam dalam 'Karimunjawa Sunset Tour'"
        },
        {
            Icon: <FaMapMarkedAlt />,
            subtitle: "Pemandu Wisata Lokal yang Berpengalaman",
            title: "Kami menyediakan pemandu lokal yang berpengetahuan luas dan berpengalaman. Mereka tidak hanya mengenal tempat-tempat terbaik di Karimunjawa, tetapi juga siap membantu Anda dengan informasi budaya dan sejarah setempat"
        },
        {
            Icon: <FaMoneyBillWave />,
            subtitle: "Harga Kompetitif dengan Kualitas Terjamin",
            title: "Kami menawarkan harga yang bersaing tanpa mengorbankan kualitas pelayanan. Tourgates Wisata Karimunjawa memastikan Anda mendapatkan pengalaman terbaik dengan nilai terbaik"
        },
        {
            Icon: <FaShieldAlt />,
            subtitle: "Proses Pemesanan Mudah dan Aman",
            title: "Proses pemesanan yang mudah dan cepat melalui situs kami yang user-friendly. Dapatkan konfirmasi instan dan pilihan pembayaran yang beragam untuk kemudahan Anda"
        },
        {
            Icon: <FaStar />,
            subtitle: "Testimoni Pelanggan yang Memuaskan",
            title: "Kami bangga dengan ulasan positif dari pelanggan kami yang telah menikmati perjalanan mereka bersama Tourgates Wisata Karimunjawa. Lihat apa yang mereka katakan dan yakinkan diri Anda untuk memilih kami"
        },
        {
            Icon: <FaWrench />,
            subtitle: "Layanan Personalisasi dan Fleksibilitas",
            title: "Kami memahami bahwa setiap wisatawan memiliki preferensi yang berbeda. Oleh karena itu, kami menawarkan layanan yang dapat disesuaikan dengan kebutuhan dan keinginan Anda"
        }
    ];
    return (
        <div className="w-screen flex flex-col justify-center items-center px-4 py-16 bg-white">
            <div className="flex flex-col justify-center items-center w-screen lg:w-2/5 py-12 px-4">
                <div className="max-w-3xl flex flex-col justify-center items-center">
                    <div data-aos="fade-up">
                        <h2 className="md:text-4xl text-center font-Montserrat">Mengapa Anda harus memilih
                            agen tur kami?</h2>
                        <div className="flex w-full items-center justify-center">
                            <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 py-5">
                {
                    Reason.map((e, i) => (
                        <div key={i} className="flex flex-row px-6">
                            <div className="">
                                <div className="w-10 h-10 text-sm text-[#2db0f4] border rounded-full flex items-center justify-center">
                                    {e.Icon}
                                </div>
                            </div>
                            <div className=" col-span-4 ms-3 w-full">
                                <h5 className="font-Montserrat">{e.subtitle}</h5>
                                <p className="text-base text-gray-500 font-Poppins">
                                    {e.title}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page4;
