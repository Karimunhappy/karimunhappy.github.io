import { Image } from 'react-bootstrap';
import image1 from '../../assets/images/image1(1).jpg'
import image2 from '../../assets/images/karimunjawa-1290x540(1).jpg'
import image3 from '../../assets/images/pulau-karimun.jpg'
import image4 from '../../assets/images/image4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';

const Page1 = () => {
    const swiperSlides = [
        {
            image: image1,
            title: 'BBQ',
            text: 'Gather with family and friends to cook Bbq on the beach and enjoy the beautifull sea'
        },
        {
            image: image2,
            title: 'Snorkling',
            text: 'Swim in swallow water of Karimunjawa, where you can whatch undersea life from the surface on the water'
        },
        {
            image: image3,
            title: 'Diving',
            text: 'Swim in deep water of Karimunjawa, where you can watch undersea life from the bottom of the water'
        },
        {
            image: image4,
            title: 'Beach',
            text: 'Walking on the beach with family and friends or playing sand on the beach, make your memory and activities on beautiful beach of Karimunjawa '
        }
    ];
    return (
        <div className='bg-white w-full'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='w-screen'
            >
                {
                    swiperSlides.map((e, i) => (
                        <SwiperSlide
                            key={i}
                            data-hash={e.title}
                            className='group w-full'
                        >
                            <Image src={e.image} className='w-full shadow-inner' />
                        </SwiperSlide>
                    ))
                }
                <div className='swiper-button-next swiper-button-next-custom'></div>
                <div className='swiper-button-prev swiper-button-prev-custom'></div>
            </Swiper>
        </div>
    )
}

export default Page1;