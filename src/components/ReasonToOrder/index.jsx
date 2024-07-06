import { FaCheck } from "react-icons/fa";


const Page4 = () => {
    const Reason = [
        {
            subtitle: "Tour Guide Lokal",
            title: "Kami adalah pemandu tur lokal asli dari Karimunjawa yang bekerja sama dengan berbagai akomodasi, mulai dari homestay hingga hotel mewah, serta menyediakan fasilitas wisata terbaik di Karimunjawa"
        },
        {
            subtitle: "Paket Liburan Lengkap",
            title: "Dirancang untuk memenuhi kebutuhan berbagai tipe wisatawan. Apakah Anda berlibur dengan pasangan, keluarga, atau rombongan teman, Anda dapat menikmati liburan yang terorganisir dan tanpa repot"
        },
        {
            subtitle: "Pengalaman Kuliner Lezat",
            title: "Cicipi pengalaman kuliner makanan lokal yang autentik dan lezat, hidangan laut segar yang disajikan dengan citarasa khas Karimunjawa kami sediakan dalam paket liburan anda selama di Karimunjawa"
        },
        {
            subtitle: "Asuransi Selama Berwisata",
            title: "Setiap wisata alam mengandung resiko kecelekaan. Menyadari hal itu maka setiap peserta trip akan kami daftarkan ke pihak asuransi selama berwisata"
        }
    ];
    return (
        <div className="w-screen lg:flex">
            <div className="bg-black bg-opacity-50 text-white flex flex-col justify-center items-center w-screen lg:w-2/5 py-12 px-4">
                <div className="max-w-3xl flex flex-col justify-center items-center">
                    <div data-aos="fade-up">
                        <h2 className="md:text-4xl text-center font-Montserrat">Mengapa Memesan dengan Kami</h2>
                        <div className="bg-green-500 h-[3px] w-32 my-3 font-Poppins"></div>
                        <p className="text-center text-base md:text-lg font-Poppins">Mengapa Anda harus memilih
                            agen tur kami? Kami menawarkan berbagai keuntungan yang patut Anda pertimbangkan.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 py-5 lg:w-3/5 bg-white">
                {
                    Reason.map((e, i) => (
                        <div key={i} className="w-screen md:w-72 grid grid-cols-5 pe-5">
                            <div className="mt-6 flex justify-end">
                                <div className="w-10 h-10 text-sm text-green-500 border rounded-full flex items-center justify-center">
                                    <FaCheck />
                                </div>
                            </div>
                            <div className=" col-span-4 mt-6 ms-3 w-full">
                                <h5 className="font-Montserrat">{e.subtitle}</h5>
                                <p className="text-base text-gray-500 font-Poppins">
                                    {e.title}
                                </p>
                            </div>
                        </div>
                    ))
                }






                {/*  <div className="w-screen md:w-72 grid grid-cols-5 pe-5">
                    <div className="mt-6 flex justify-end">
                        <div className="w-10 h-10 text-sm text-green-500 border rounded-full flex items-center justify-center">
                            <FaCheck />
                        </div>
                    </div>
                    <div className=" col-span-4 mt-6 ms-3 w-full">
                        <h5 className="font-Montserrat">Beberapa perusahaan pemenang Penghargaan TripAdvisor</h5>
                        <p className="text-base text-gray-500 font-Poppins">
                            Kami telah menerima penghargaan Certificate of Excellence dari TripAdvisor, situs web wisata terbesar di dunia.
                        </p>
                    </div>
                </div>
                <div className="w-screen md:w-72 grid grid-cols-3 gap-3">
                    <div className="mt-6">
                        <div className="w-12 h-12 text-base text-green-500 border rounded-full flex items-center justify-center">
                            <FaCheck />
                        </div>
                    </div>
                    <div className=" col-span-2 mt-6">
                        <h4 className="font-Montserrat">100% Dapat Disesuaikan</h4>
                        <p className="text-base text-gray-500 font-Poppins">
                            Beritahu kami tentang kebutuhan perjalanan Anda. Kami akan bekerja sama untuk menyesuaikan perjalanan Anda untuk memenuhi persyaratan tepat Anda sehingga Anda memiliki perjalanan yang mengesankan.
                        </p>
                    </div>
                </div>
                <div style={{ border: 'none' }} className="w-screen md:w-72 grid grid-cols-3 gap-3">
                    <div className="mt-6">
                        <div className="w-12 h-12 text-base text-green-500 border rounded-full flex items-center justify-center">
                            <FaCheck />
                        </div>
                    </div>
                    <div className=" col-span-2 mt-6">
                        <h4 className="font-Montserrat">Pakar Lokal. Harga Bebas Menengah</h4>
                        <p className="text-base text-gray-500 font-Poppins">
                            Kami agen perjalanan lokal. Ketika Anda memesan dengan kami, Anda mendapatkan harga terbaik, yang bebas dari perantara.
                        </p>
                    </div>
                </div>
                <div style={{ border: 'none' }} className="w-screen md:w-72 grid grid-cols-3 gap-3">
                    <div className="mt-6">
                        <div className="w-12 h-12 text-base text-green-500 border rounded-full flex items-center justify-center">
                            <FaCheck />
                        </div>
                    </div>
                    <div className=" col-span-2 mt-6">
                        <h4 className="font-Montserrat">Tidak Ada Biaya Tersembunyi</h4>
                        <p className="text-base text-gray-500 font-Poppins">
                            Kami tidak menambahkan biaya tambahan tersembunyi. Semua perjalanan termasuk izin perjalanan, penginapan dan makanan. Tidak ada kejutan dengan biaya tersembunyi.
                        </p>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}

export default Page4;
