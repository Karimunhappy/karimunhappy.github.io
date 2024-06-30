import { Image } from 'react-bootstrap';
import Logo from '../../assets/images/IMG_20230214_134037.jpg'
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { A11y, Navigation, Pagination } from 'swiper/modules';


const Page3 = () => {
    return (
        <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-screen pt-12">
            <div className="text-4xl text-center font-Montserrat">Adventure Activities</div>
            <div className="bg-green-500 h-[3px] w-32 my-3"></div>
            <p className="text-center text-lg lg:w-1/2 px-4 font-Poppins">Kegiatan apa saja yang ada di Karimunjawa? Anda dapat
                menikmati beberapa kegiatan di Karimunjawa. Mulai dari
                snorkeling, diving, pantai, wisata pantai, bbq, dll. Jangan
                lewatkan momen Anda di sana! Ajak teman dan keluarga untuk
                bersenang-senang di karimunjawa.</p>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={2}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                style={{ width: "100vw", padding: "80px" }}
            >
                <SwiperSlide
                    style={{
                        width: "275px",
                        height: "300px",
                        cursor: "pointer"
                    }}
                // onClick={() => handleSwipperClick(i)}
                >
                    <Image src={Logo} style={{ width: "270px", height: "310px" }} />
                    <h3 className="swiper-slide-text">BBQ</h3>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        width: "275px",
                        height: "300px",
                        cursor: "pointer"
                    }}
                // onClick={() => handleSwipperClick(i)}
                >
                    <Image src={Logo} style={{ width: "270px", height: "310px" }} />
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        width: "275px",
                        height: "300px",
                        cursor: "pointer"
                    }}
                // onClick={() => handleSwipperClick(i)}
                >
                    <Image src={Logo} style={{ width: "270px", height: "310px" }} />
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        width: "275px",
                        height: "300px",
                        cursor: "pointer"
                    }}
                // onClick={() => handleSwipperClick(i)}
                >
                    <Image src={Logo} style={{ width: "270px", height: "310px" }} />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default Page3;
