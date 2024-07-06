import { Button, Card } from "react-bootstrap";
import Logo from '../../assets/images/images.jpeg'
const Paket = () => {
    const PaketOption = [
        {
            title: 'Paket 2 Hari 1 Malam',
            text: 'Paket dengan durasi paling singkat ini sangat cocok buat anda para pekerja kantoran yang tidak mempunyai banyak waktu untuk liburan.'
        },
        {
            title: 'Paket 3 Hari 2 Malam',
            text: 'Paket dengan durasi paling banyak diminati. Dengan paket ini anda mempunyai waktu cukup mengunjungi beberapa destinasi unggulan.'
        },
        {
            title: 'Paket 4 Hari 3 Malam',
            text: 'Paket paling ideal untuk diambil, bisa mengunjungi lebih banyak lagi destinasi, waktu kegiatan tidak terlalu padat.'
        }
    ];
    return (
        <div className="text-white flex flex-col justify-center items-center w-screen">
            <div className='bg-black bg-opacity-50 text-white flex flex-col justify-center items-center w-screen pt-12'>
                <h2 className="md:text-4xl text-center font-Montserrat">Paket Wisata Karimunjawa</h2>
                <div className="bg-green-500 h-[3px] w-32 my-3"></div>
                <p className="text-center text-base md:text-lg lg:w-1/2 px-4 font-Poppins">Berikut beberpa paket tour wisata
                    Karimunjawa yang sudah kami rancang untuk anda. Silahkan hubungi kami untuk pendampingan tour guide yang
                    tidak ada dalam paket di website ini, kami siap membantu anda dalam acara kunjungan anda di kepulauan Karimunjawa.</p>
            </div>
            <div className="w-screen flex flex-wrap justify-around gap-y-5 lg:px-16 py-11" data-aos="fade-up">
                {
                    PaketOption.map((e, i) => (
                        <div className="w-full sm:w-auto flex justify-center">
                            <Card className="w-72 md:w-96">
                                <Card.Img variant="top" src={Logo} />
                                <Card.Body>
                                    <Card.Title>{e.title}</Card.Title>
                                    <Card.Text>
                                        {e.text}
                                    </Card.Text>
                                    <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '3px', padding: '9px 22px', marginBottom: '10px' }}>Selengkapnya</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }


                {/* <div className="w-full sm:w-auto flex justify-center">
                    <Card style={{}} className="w-72 md:w-96">
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body>
                            <Card.Title>Paket 2 Hari 1 Malam</Card.Title>
                            <Card.Text>
                                Paket dengan durasi paling singkat ini sangat cocok buat anda para pekerja kantoran yang tidak mempunyai banyak waktu untuk liburan.
                            </Card.Text>
                            <Button variant="primary">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="w-full sm:w-auto flex justify-center">
                    <Card style={{}} className="w-72 md:w-96">
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body>
                            <Card.Title>Paket 3 Hari 2 Malam</Card.Title>
                            <Card.Text>
                                Paket dengan durasi paling banyak diminati. Dengan paket ini anda mempunyai waktu cukup mengunjungi beberapa destinasi unggulan.
                            </Card.Text>
                            <Button className="bg-white !text-blue-600">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="w-full sm:w-auto flex justify-center">
                    <Card style={{}} className="w-72 md:w-96">
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body>
                            <Card.Title>Paket 4 Hari 3 Malam</Card.Title>
                            <Card.Text>
                                Paket paling ideal untuk diambil, bisa mengunjungi lebih banyak lagi destinasi, waktu kegiatan tidak terlalu padat.
                            </Card.Text>
                            <Button>Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </div> */}
            </div>
        </div>
    )
}

export default Paket;