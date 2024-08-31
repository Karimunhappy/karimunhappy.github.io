import { Button, Card } from 'react-bootstrap';
import Bbq from '../../assets/images/images (12).jpeg'
import Snorkling from '../../assets/images/images.jpeg'
import Diving from '../../assets/images/Buzo.jpg'
import Island from '../../assets/images/IMG-20240717-WA0009.jpg'
import BukitLove from '../../assets/images/Berpose di tulisan Love di bukit Love Karimunjawa.jpg'
import SeaFood from '../../assets/images/Screenshot_86.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { A11y, Navigation, Pagination, HashNavigation } from 'swiper/modules';
import wavebg from '../../assets/images/WaveImage.png'


const Explore = () => {
    const swiperSlides = [
        {
            image: Snorkling,
            title: 'Snorkling',
            text: 'Jelajahi terumbu karang dan ikan berwarna-warni di spot snorkeling terbaik seperti Menjangan Kecil dan Pulau Cemara Kecil.'
        },
        {
            image: Diving,
            title: 'Diving',
            text: 'Temukan keindahan bawah laut Karimunjawa dengan diving di spot terkenal seperti Wreck Ship Indonoor dan Pulau Menyawakan'
        },
        {
            image: Island,
            title: 'Island Hopping',
            text: 'Kunjungi pulau-pulau eksotis seperti Pulau Cilik dan Pulau Tengah dalam sehari. Setiap pulau menawarkan pengalaman unik'
        },
        {
            image: Bbq,
            title: 'Berkemah',
            text: 'Berkemah di Pulau Tanjung Gelam untuk pengalaman alam yang mendalam dengan pantai indah dan malam berbintang.'
        },
        {
            image: BukitLove,
            title: 'Sunset di Bukit Love',
            text: 'Nikmati matahari terbenam yang spektakuler dari Bukit Love, spot romantis terbaik di Karimunjawa'
        },
        {
            image: SeaFood,
            title: 'Kuliner Laut',
            text: 'Rasakan lezatnya seafood segar di Pasar Malam Karimunjawa, surga bagi pecinta kuliner laut'
        }
    ];
    return (
        <div className="flex flex-col justify-center items-center w-screen mt-16">
            <div className="text-Navy flex flex-col justify-center items-center w-screen bg-gradient-to-t from-[#DCF4F4] to-white">
                <div className='text-Navy flex flex-col justify-center items-center w-screen pt-12 pb-44'>
                    <h1 className="text-center font-Montserrat">Explore Karimunjawa tourism</h1>
                    <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
                    <h3 className="text-center lg:w-1/2 px-4 font-Poppins">
                        Karimunjawa menawarkan keindahan alam eksotis dan pengalaman unik tak terlupakan
                    </h3>
                </div>
                <div className='w-screen h-[360px]' data-aos="fade-up">
                    <Swiper
                        modules={[Navigation, Pagination, A11y, HashNavigation]}
                        spaceBetween={12}
                        slidesPerView={'auto'}
                        // breakpoints={{
                        //     640: {
                        //         slidesPerView: 2,
                        //     },
                        //     768: {
                        //         slidesPerView: 2,
                        //     },
                        //     1024: {
                        //         slidesPerView: 4
                        //     }
                        // }}

                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{ clickable: true }}
                        hashNavigation={{
                            watchState: true,
                        }}
                        scrollbar={{ draggable: true }}
                        className='w-full -mt-36 lg:!px-9'
                    >
                        {
                            swiperSlides.map((e, i) => (
                                <SwiperSlide
                                    key={i}
                                    style={{
                                        width: "275px",
                                        height: "375px",
                                        cursor: "pointer"
                                    }}
                                    data-hash={e.title}
                                    className='rounded-xl'
                                >
                                    <Card style={{ width: '275px', height: "375px" }}>
                                        <Card.Img variant="top" src={e.image} className='w-[275px] h-[150px]' />
                                        <Card.Body>
                                            <Card.Title>{e.title}</Card.Title>
                                            <Card.Text>
                                                {e.text}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))
                        }
                        <div className='swiper-button-next swiper-button-next-custom'></div>
                        <div className='swiper-button-prev swiper-button-prev-custom'></div>
                    </Swiper>
                </div>
            </div>
            <img src={wavebg} alt="" className="w-screen h-32 bg-white" />
        </div>

    )
}

export default Explore;
