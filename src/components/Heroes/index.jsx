import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';
import swiperSlides from './swipperSlide';
import { LuMapPin } from 'react-icons/lu';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Heroes = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Koordinat lokasi
        const lat = '-5.8786';
        const lon = '110.4282';
        const apiKey = '5aa9d9d9178ebf744e17813c55bd515c'; // Ganti dengan API key Anda

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
            .then(response => {
                setWeatherData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    // Mendapatkan tanggal saat ini
    const today = new Date();

    // Format tanggal dalam bahasa Inggris tanpa tahun
    const formattedDateWithoutYear = today.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });

    // Mendapatkan tahun dan memformatnya
    const year = today.getFullYear().toString().slice(-2);

    // Format waktu dengan ":" sebagai pemisah dan termasuk "AM/PM"
    const formattedTime = today.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    // Memisahkan waktu dan "AM/PM"
    const [time, ampm] = formattedTime.split(' ');

    return (
        <div className='bg-white w-full pb-10'>
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
                            <Image src={e.image} className='w-full shadow-inner-custom' />
                        </SwiperSlide>
                    ))
                }
                <div className='swiper-button-next swiper-button-next-custom'></div>
                <div className='swiper-button-prev swiper-button-prev-custom'></div>
            </Swiper>
            <div className='w-screen h-32 bg-gradient-to-t from-white relative z-10 -mt-32'></div>
            <div className='bg-white w-screen h-24 flex justify-center font-light pt-3'>
                <div className=' text-[#2db0f4] grid grid-cols-2 md:grid-cols-4 max-w-4xl text-[33px]'>
                    <div className='flex text-7xl] mt-2'>
                        <LuMapPin />
                        <div className='text-xl text-orange-500 -mt-1 ms-1'>
                            <p>KARIMUN</p>
                            <p className='-mt-6'>JAWA</p>
                        </div>
                    </div>
                    <div className="flex">
                        <p>
                            {time}
                        </p>
                        <p className='text-xl text-orange-500 px-1'>
                            {ampm}
                        </p>
                    </div>
                    <div className='flex'>
                        <p>
                            {formattedDateWithoutYear}
                        </p>
                        <p className='text-xl text-orange-500 px-1'>
                            {year}
                        </p>
                    </div>
                    {
                        loading === true ? <div className='flex'></div> : <div className='flex'>
                            <p>{weatherData.main.temp}°C</p>
                            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" className='h-9' />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Heroes;