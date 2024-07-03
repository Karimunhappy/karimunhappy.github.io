import { Image } from 'react-bootstrap';
import Bbq from '../../assets/images/images (12).jpeg'
import Snorkling from '../../assets/images/images.jpeg'
import Diving from '../../assets/images/Buzo.jpg'
import Beach from '../../assets/images/images (11).jpeg'
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { A11y, Navigation, Pagination, EffectFade } from 'swiper/modules';


const Page3 = () => {
    return (
        <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-screen pt-12">
            <h2 className="md:text-4xl text-center font-Montserrat">Adventure Activities</h2>
            <div className="bg-green-500 h-[3px] w-32 my-3"></div>
            <p className="text-center text-base md:text-lg lg:w-1/2 px-4 font-Poppins">Kegiatan apa saja yang ada di Karimunjawa? Anda dapat
                menikmati beberapa kegiatan di Karimunjawa. Mulai dari
                snorkeling, diving, pantai, wisata pantai, bbq, dll. Jangan
                lewatkan momen Anda di sana! Ajak teman dan keluarga untuk
                bersenang-senang di karimunjawa.</p>
            <Swiper
                modules={[Navigation, Pagination, A11y, EffectFade]}
                spaceBetween={2}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                scrollbar={{ draggable: true }}
                style={{ width: "100vw", padding: "50px" }}
            >
                <SwiperSlide
                    style={{
                        width: "275px",
                        height: "300px",
                        cursor: "pointer"
                    }}
                // onClick={() => handleSwipperClick(i)}
                >
                    <Image src={Bbq} style={{ width: "350px", height: "450px" }} />
                    <h3 className="swiper-slide-text">BBQ</h3>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        width: "350pxpx",
                        height: "300px",
                        cursor: "pointer"
                    }}
                // onClick={() => handleSwipperClick(i)}
                >
                    <Image src={Snorkling} style={{ width: "350px", height: "450px" }} />
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        width: "275px",
                        height: "300px",
                        cursor: "pointer"
                    }}
                // onClick={() => handleSwipperClick(i)}
                >
                    <Image src={Diving} style={{ width: "350px", height: "450px" }} />
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        width: "275px",
                        height: "300px",
                        cursor: "pointer"
                    }}
                // onClick={() => handleSwipperClick(i)}
                >
                    <Image src={Beach} style={{ width: "3500px", height: "450px" }} />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default Page3;
