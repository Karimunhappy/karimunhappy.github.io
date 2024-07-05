import { Image } from 'react-bootstrap';
import Bbq from '../../assets/images/images (12).jpeg'
import Snorkling from '../../assets/images/images.jpeg'
import Diving from '../../assets/images/Buzo.jpg'
import Beach from '../../assets/images/images (11).jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { A11y, Navigation, Pagination, HashNavigation } from 'swiper/modules';


const Page3 = () => {
    const swiperSlides = [
        {
            image: Bbq,
            title: 'BBQ',
            text: 'Gather with family and friends to cook Bbq on the beach and enjoy the beautifull sea'
        },
        {
            image: Snorkling,
            title: 'Snorkling',
            text: 'Swim in swallow water of Karimunjawa, where you can whatch undersea life from the surface on the water'
        },
        {
            image: Diving,
            title: 'Diving',
            text: 'Swim in deep water of Karimunjawa, where you can watch undersea life from the bottom of the water'
        },
        {
            image: Beach,
            title: 'Beach',
            text: 'Walking on the beach with family and friends or playing sand on the beach, make your memory and activities on beautiful beach of Karimunjawa '
        }
    ];
    return (
        <div className="text-white flex flex-col justify-center items-center w-screen">
            <div className='bg-black bg-opacity-50 text-white flex flex-col justify-center items-center w-screen pt-12 pb-44'>
                <h2 className="md:text-4xl text-center font-Montserrat">Adventure Activities</h2>
                <div className="bg-green-500 h-[3px] w-32 my-3"></div>
                <p className="text-center text-base md:text-lg lg:w-1/2 px-4 font-Poppins">Kegiatan apa saja yang ada di Karimunjawa? Anda dapat
                    menikmati beberapa kegiatan di Karimunjawa. Mulai dari
                    snorkeling, diving, pantai, wisata pantai, bbq, dll. Jangan
                    lewatkan momen Anda di sana! Ajak teman dan keluarga untuk
                    bersenang-senang di karimunjawa.</p>
            </div>
            <div className='bg-white w-screen h-[360px]'>
                <Swiper
                    modules={[Navigation, Pagination, A11y, HashNavigation]}
                    spaceBetween={0}
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
                    className='w-[275px] md:w-[570px] lg:w-[1200px] -mt-36'
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
