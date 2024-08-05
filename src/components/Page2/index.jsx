import Lembar from '../../assets/images/karimunjawatugu.webp'

const Page2 = () => {
    return (
        <div className="w-screen flex flex-col lg:flex-row p-9 lg:px-24 bg-white">
            <div className='lg:w-2/3' data-aos="fade-up">
                <h2 className='md:text-4xl font-montserrat'>Tour Guide Trip Wisata Karimunjawa</h2>
                <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
                <br />
                <p className='text-base text-gray-500 font-poppins'>Selamat datang di Karimunjawahappy.com,
                    pelopor dan penyedia terpercaya destinasi wisata di Karimunjawa! Nikmati keajaiban alam yang
                    memukau dan ambil bagian dalam pengalaman wisata yang tak terlupakan di kepulauan Karimunjawa.
                    <br />
                    <br />
                    Apakah Anda mencari liburan yang penuh petualangan? Atau ingin bersantai di pantai dengan
                    suasana yang tenang dan damai? Kami bantu siapkan segala sesuatu yang Anda butuhkan untuk
                    membuat liburan Anda di Karimunjawa menjadi sempurna. Dengan berbagai paket wisata yang
                    sudah kami rancang menyesuaikan dengan kebutuhan anda.
                    <br />
                    <br />
                    Kami tidak hanya menawarkan pengalaman wisata yang luar biasa tetapi juga pelayanan yang memuaskan.
                    Tim kami yang berpengalaman siap memberikan panduan dan bantuan selama perjalanan Anda di Karimunjawa.
                    Kami yakin Anda akan merasa puas dengan layanan dan keindahan alam kepulauan Karimunjawa.</p>
            </div>
            <div className='lg:ml-10 pt-8' data-aos="zoom-in">
                <img src={Lembar} alt="" className="h-96 w-72" />
            </div>
        </div>
    )
}

export default Page2;