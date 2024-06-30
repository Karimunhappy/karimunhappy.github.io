import { FaCheck } from "react-icons/fa";

const Page4 = () => {
    return (
        <div className="w-screen lg:flex">
            <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-screen lg:w-2/5 py-12 px-4">
                <div className="max-w-3xl flex flex-col justify-center items-center">
                    <div className="text-4xl text-center font-Montserrat">Mengapa Memesan dengan Kami</div>
                    <div className="bg-green-500 h-[3px] w-32 my-3 font-Poppins"></div>
                    <p className="text-center text-lg">Mengapa kami harus memilih agen tur kami? Kami memiliki banyak keuntungan yang mungkin dapat Anda pertimbangkan.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 mt-5 lg:w-3/5">
                <div className="w-screen md:w-72 grid grid-cols-4 px-5">
                    <div className="mt-6 flex justify-end">
                        <div className="w-12 h-12 text-base text-green-500 border rounded-full flex items-center justify-center">
                            <FaCheck />
                        </div>
                    </div>
                    <div className=" col-span-3 mt-6 ms-3 w-full">
                        <h4 className="font-Montserrat">Beberapa perusahaan pemenang Penghargaan TripAdvisor</h4>
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
                </div>
            </div>
        </div>
    )
}

export default Page4;
