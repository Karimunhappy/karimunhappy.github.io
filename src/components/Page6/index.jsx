import { Button, Card } from "react-bootstrap";
import Logo from '../../assets/images/images.jpeg'

const Page6 = () => {
    return (
        <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-screen py-12">
            <h2 className="md:text-4xl text-center font-Montserrat">Artikel Terbaru</h2>
            <div className="bg-green-500 h-[3px] w-32 my-3"></div>
            <div className="w-screen flex flex-wrap justify-around gap-y-5 lg:px-16 py-11">
                <div className="w-full sm:w-auto flex justify-center">
                    <Card style={{}} className="w-72">
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body>
                          <Card.Text>
                            June 31, 2024
                          </Card.Text>
                            <Card.Title>PAKET MURAH OPENTRIP KARIMUNJAWA BULAN FEBRUARI – APRIL 2020</Card.Title>
                            <Card.Text>
                                Yuk segera booking open trip KarimunJawa …………………………………………………… ✅ Free Dokumentasi Drone ✅ Free
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="w-full sm:w-auto flex justify-center">
                    <Card style={{}} className="w-72">
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body>
                          <Card.Text>
                            June 31, 2024
                          </Card.Text>
                            <Card.Title>PAKET OPENTRIP KARIMUNJAWA AKHIR TAHUN BANYAK DISKON……’</Card.Title>
                            <Card.Text>
                                Yuk segera booking open trip KarimunJawa …………………………………………………… ✅ Free Dokumentasi Drone ✅ Free
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="w-full sm:w-auto flex justify-center">
                    <Card style={{}} className="w-72">
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body>
                          <Card.Text>
                            June 31, 2024
                          </Card.Text>
                            <Card.Title>PAKET OPENTRIP KARIMUNJAWA BULAN OKTOBER,NOVEMBER DAN DESEMBER SUDAH BISA DI PESAN GAES………..</Card.Title>
                            <Card.Text>
                                Yuk segera booking open trip KarimunJawa …………………………………………………… ✅ Free Dokumentasi Drone ✅ Free
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>


        </div>

    )
}

export default Page6;