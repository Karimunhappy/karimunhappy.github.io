import Lembar from '../../assets/images/karimunjawatugu.webp'

const Page2 = () => {
    return (
        <div className="w-screen bg-white p-9 lg:px-24">
            <div className='grid grid-cols-1 justify-items-center'>
                <h2 className='md:text-4xl font-montserrat text-center'>Let's go to Karimunjawa Tourism</h2>
                <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-2/3' data-aos="fade-up">
                    <br />
                    <h4>Mengapa Memilih Tourgates Wisata Karimunjawa paradise?</h4>
                    <p className='text-base text-gray-500 font-poppins'>
                        Karimunjawa Paradise adalah penyedia layanan tur terpercaya di Karimunjawa.
                        Dengan tim profesional dan berpengalaman, kami berkomitmen untuk memberikan pengalaman wisata terbaik.
                        Kami menawarkan berbagai pilihan paket wisata yang dapat disesuaikan dengan kebutuhan Anda,
                        mulai dari tur keluarga, pasangan, hingga petualangan solo. Dedikasi kami adalah untuk memastikan
                        bahwa setiap perjalanan bersama kami penuh dengan kenangan indah.
                        <br />
                        <br />
                        Kami menawarkan berbagai paket wisata menarik yang dirancang untuk memberikan pengalaman tak terlupakan.
                        Mulai dari snorkeling di perairan yang jernih, menjelajahi pulau-pulau eksotis, hingga menikmati sunset
                        yang memukau. Temukan petualangan yang Anda cari dengan Tourgates Wisata Karimunjawa. Pesan sekarang dan
                        rasakan keajaiban Karimunjawa!
                    </p>
                </div>
                <div className='lg:ml-10 pt-8' data-aos="zoom-in">
                    <img src={Lembar} alt="" className="h-96 w-72" />
                </div>
            </div>
        </div>
    )
}

export default Page2;