"use client"
import Image from 'next/image';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export default function SlideBanner() {
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    return(
        <div>
            <div className="flex justify-center items-center absolute z-10  w-full h-screen">
                <div className="w-2/3 text-center">
                    <h1 className="text-white font-bold text-6xl">Langkah Kecilmu, Harapan Besar untuk Bumi.</h1>
                    <p className="text-white text-lg">Setiap langkah kecil yang kita ambil hari ini membawa harapan besar bagi keberlangsungan bumi di masa depan.</p>
                </div>
            </div>
            <Swiper
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            //   pagination={{
            //     clickable: true,
            //   }}
            //   navigation={true}
            //     onSlideChange={() => console.log('slide change')}
            //     onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <div className="relative">
                    <div className="h-screen w-full bg-black opacity-50 absolute"></div>
                    <Image src={'/assets/images/banner1.jpg'} className="w-full h-screen" alt='' width={1000} height={1000}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <div className="h-screen w-full bg-black opacity-50 absolute"></div>
                    <Image src={'/assets/images/banner2.jpg'} className="w-full h-screen" alt='' width={1000} height={1000}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <div className="h-screen w-full bg-black opacity-50 absolute"></div>
                    <Image src={'/assets/images/banner3.jpg'} className="w-full h-screen" alt='' width={1000} height={1000}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <div className="h-screen w-full bg-black opacity-50 absolute"></div>
                    <Image src={'/assets/images/banner4.jpg'} className="w-full h-screen" alt='' width={1000} height={1000}/>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    )
}