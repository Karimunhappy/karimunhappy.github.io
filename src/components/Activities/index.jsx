import { Image } from 'react-bootstrap';
import Bbq from '../../assets/images/images (12).jpeg'
import Snorkling from '../../assets/images/images.jpeg'
import Diving from '../../assets/images/Buzo.jpg'
import Island from '../../assets/images/IMG-20240717-WA0009.jpg'
import BukitLove from '../../assets/images/Berpose di tulisan Love di bukit Love Karimunjawa.jpg'
import SeaFood from '../../assets/images/Screenshot_86.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { A11y, Navigation, Pagination, HashNavigation } from 'swiper/modules';


const Page3 = () => {
    const swiperSlides = [
        {
            image: Snorkling,
            title: 'Snorkling',
            text: 'Jelajahi terumbu karang dan ikan berwarna-warni di spot snorkeling terbaik seperti Menjangan Kecil dan Pulau Cemara Kecil. Cocok untuk semua level.'
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
        <div className="text-white flex flex-col justify-center items-center w-screen">
            <div className='bg-black bg-opacity-50 text-white flex flex-col justify-center items-center w-screen pt-12 pb-44'>
                <h2 className="md:text-4xl text-center font-Montserrat">Explore Karimunjawa tourism</h2>
                <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
                <p className="text-center text-base md:text-lg lg:w-1/2 px-4 font-Poppins">
                    Karimunjawa terkenal dengan keindahan alamnya. Dari Pantai Tanjung Gelam yang eksotis
                    hingga Pulau Menjangan Besar yang mempesona, temukan destinasi terbaik di Karimunjawa
                    dengan panduan kami. Jelajahi tempat-tempat indah seperti Pulau Cilik, Pulau Cemara
                    Besar, dan Pantai Batu Topeng. Setiap lokasi menawarkan keindahan dan pengalaman unik
                    yang tidak boleh Anda lewatkan.
                </p>
            </div>
            <div className='bg-white w-screen h-[360px]' data-aos="fade-up">
                <Swiper
                    modules={[Navigation, Pagination, A11y, HashNavigation]}
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4
                        }
                    }}

                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{ clickable: true }}
                    hashNavigation={{
                        watchState: true,
                    }}
                    scrollbar={{ draggable: true }}
                    className='w-[275px] md:w-[570px] lg:w-full -mt-36 lg:!px-9'
                >
                    {
                        swiperSlides.map((e, i) => (
                            <SwiperSlide
                                key={i}
                                style={{
                                    width: "275px",
                                    height: "350px",
                                    cursor: "pointer"
                                }}
                                data-hash={e.title}
                                className='group'
                            >
                                <Image src={e.image} className='w-[275px] h-[350px] rounded shadow-inner' />
                                <div className="hidden group-hover:flex absolute inset-0  flex-col justify-center w-[275px] px-4 -mt-8 text-white bg-black bg-opacity-50 rounded">
                                    <h5 className='font-Montserrat'>{e.title}</h5>
                                    <p className=" font-Poppins">{e.text}</p>
                                </div>
                                <div className='flex items-end group-hover:hidden absolute inset-0 px-4 mb-7'>
                                    <h5 className='p-1 bg-zinc-700 bg-opacity-50 font-Montserrat rounded'>{e.title}</h5>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <div className='swiper-button-next swiper-button-next-custom'></div>
                    <div className='swiper-button-prev swiper-button-prev-custom'></div>
                </Swiper>
            </div>
        </div>

    )
}

export default Page3;
