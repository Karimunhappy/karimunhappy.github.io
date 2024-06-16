import { Card } from "react-bootstrap";
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                <Card style={{ border: 'none' }} className="w-screen md:w-72 flex flex-row">
                    <div className="w-20 h-12 text-base text-green-500 border rounded-full flex items-center justify-center mt-6 ms-16">
                        <FaCheck />
                    </div>
                    <Card.Body>
                        <h3 className="font-Montserrat">Beberapa perusahaan pemenang Penghargaan TripAdvisor</h3>
                        <Card.Text className="text-base text-gray-500 font-Poppins">
                            Kami telah menerima penghargaan Certificate of Excellence dari TripAdvisor, situs web wisata terbesar di dunia.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ border: 'none' }} className="w-screen md:w-72 ">
                    <Card.Body>
                        <Card.Text className="text-xl">100% Dapat Disesuaikan</Card.Text>
                        <Card.Text className="text-base text-gray-500">
                            Beritahu kami tentang kebutuhan perjalanan Anda. Kami akan bekerja sama untuk menyesuaikan perjalanan Anda untuk memenuhi persyaratan tepat Anda sehingga Anda memiliki perjalanan yang mengesankan.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ border: 'none' }} className="w-screen md:w-72 ">
                    <Card.Body>
                        <Card.Text className="text-xl">Pakar Lokal. Harga Bebas Menengah</Card.Text>
                        <Card.Text className="text-base text-gray-500">
                            Kami agen perjalanan lokal. Ketika Anda memesan dengan kami, Anda mendapatkan harga terbaik, yang bebas dari perantara.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ border: 'none' }} className="w-screen md:w-72 ">
                    <Card.Body>
                        <Card.Text className="text-xl">Tidak Ada Biaya Tersembunyi</Card.Text>
                        <Card.Text className="text-base text-gray-500">
                            Kami tidak menambahkan biaya tambahan tersembunyi. Semua perjalanan termasuk izin perjalanan, penginapan dan makanan. Tidak ada kejutan dengan biaya tersembunyi.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Page4;
