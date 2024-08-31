import { Button, Card } from "react-bootstrap";
import Snorkeling from '../../assets/images/IMG-20240730-WA0021.jpg'
import Kuliner from '../../assets/images/Screenshot_86.jpg'
import Diving from '../../assets/images/Buzo.jpg'
import Kemah from '../../assets/images/images (12).jpeg'
import wavebg from '../../assets/images/WaveImage.png'
import { useNavigate } from "react-router-dom";
const Paket = () => {
    const navigate = useNavigate();
    const PaketOption = [
        {
            title: 'Paket 2 Hari 1 Malam',
            text: 'Paket dengan durasi paling singkat ini sangat cocok buat anda para pekerja kantoran yang tidak mempunyai banyak waktu untuk liburan.',
            image: Snorkeling,
            Navigasi: '/Paket/2D1N'
        },
        {
            title: 'Paket 2 Hari 2 Malam',
            text: 'Paket ini cocok untuk Anda yang ingin menikmati suasana Karimunjawa lebih lama namun dengan waktu yang efisien.',
            image: Kuliner,
            Navigasi: '/Paket/2D2N'
        },
        {
            title: 'Paket 3 Hari 2 Malam',
            text: 'Paket dengan durasi paling banyak diminati. Dengan paket ini anda mempunyai waktu cukup mengunjungi beberapa destinasi unggulan.',
            image: Diving,
            Navigasi: '/Paket/3D2N'
        },
        {
            title: 'Paket 4 Hari 3 Malam',
            text: 'Paket paling ideal untuk diambil, bisa mengunjungi lebih banyak lagi destinasi, waktu kegiatan tidak terlalu padat.',
            image: Kemah,
            Navigasi: '/Paket/4D3N'
        }
    ];
    return (
        <div className="flex flex-col justify-center items-center w-screen -mb-16 text-Navy">
            <div className="flex flex-col justify-center items-center w-screen bg-gradient-to-t from-[#DCF4F4] to-white">
                <div className='text-Navy flex flex-col justify-center items-center w-screen pt-12'>
                    <h1 className="md:text-4xl text-center font-Montserrat">Paket Wisata Karimunjawa</h1>
                    <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
                    <p className="text-center text-base md:text-lg lg:w-1/2 px-4 font-Poppins">
                        Kami menawarkan berbagai paket wisata yang dirancang untuk memenuhi berbagai minat.
                        Apakah Anda ingin menyelam, snorkeling, atau sekadar bersantai di pantai, kami memiliki
                        sesuatu untuk Anda. Jelajahi paket wisata populer kami seperti 'Snorkeling Adventure',
                        'Island Hopping', dan 'Karimunjawa Sunset Tour'. Setiap paket kami dirancang untuk memberikan
                        pengalaman yang aman dan menyenangkan, dengan pemandu lokal yang berpengetahuan.
                    </p>
                </div>
                <div className="w-screen flex flex-wrap justify-around gap-y-5 lg:px-16 py-11" data-aos="fade-up">
                    {
                        PaketOption.map((e, i) => (
                            <div key={i} className="w-full sm:w-auto flex justify-center">
                                <Card className="w-72 shadow-lg !border-none">
                                    <Card.Img variant="top" src={e.image} className="h-40" />
                                    <Card.Body>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>
                                            {e.text}
                                        </Card.Text>
                                        <Button onClick={() => { navigate(e.Navigasi) }} style={{ backgroundColor: 'white', color: 'blue', borderRadius: '3px', padding: '9px 22px', marginBottom: '10px' }}>Selengkapnya</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
            <img src={wavebg} alt="" className="w-screen h-32 bg-black bg-opacity-50" />
        </div>
    )
}

export default Paket;