import React from "react";
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
    const Testimoni = [
        {
            text: "Karimunjawa menawarkan pemandangan laut yang menakjubkan! Menyelam di perairan jernihnya adalah pengalaman yang tidak terlupakan. Tourgate perjalanan kami benar-benar membantu menjadikan liburan ini sempurna!"
        },
        {
            text: "Keindahan alam Karimunjawa benar-benar memukau! Pantai pasir putih dan air laut yang jernih membuat pengalaman snorkeling kami menjadi tak terlupakan. Benar-benar destinasi yang harus dikunjungi!"
        },
        {
            text: "Pengalaman menyelam di Karimunjawa adalah yang terbaik! Terumbu karang dan kehidupan bawah lautnya sangat menakjubkan. Pasti akan kembali untuk menikmati lebih banyak keindahan Karimunjawa."
        },
        {
            text: "Pengalaman menyelam di Karimunjawa adalah yang terbaik! Terumbu karang dan kehidupan bawah lautnya sangat menakjubkan. Pasti akan kembali untuk menikmati lebih banyak keindahan Karimunjawa."
        }
    ]
    return (
        <div className="bg-black bg-opacity-50 text-white flex flex-col justify-center items-center w-screen px-4 py-16 ">
            <div className='w-screen bg-slate-600 h-[1px] -mt-16'></div>
            <h2 className="md:text-4xl text-center font-Montserrat pt-16">Testimoni</h2>
            <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
            <div className="w-screen md:grid lg:max-w-7xl grid-cols-3 mt-5 px-16 gap-40">
                <h1 className="font-Montserrat font-bold col-span-1 mb-5">
                    Apa Kata Mereka Tentang Kami?
                </h1>
                <div className="col-span-2 font-Poppins">
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        scrollbar={true}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                    >
                        {
                            Testimoni.map((e, i) => (
                                <SwiperSlide key={i} >
                                    <h3 className="font-Poppins">
                                        "{e.text}"
                                    </h3>
                                </SwiperSlide>
                            ))
                        }
                        <div className='swiper-button-next swiper-button-next-custom'></div>
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default Testimonials;