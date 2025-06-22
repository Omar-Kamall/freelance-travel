// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../Components/Syles.css';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect } from 'react';
import Aos from 'aos';

const Offers = () => {
    useEffect(() => {
        Aos.init({duration: 2500 });
    },[])
    const offers = [
        {id: 0 , title: "(عروض حصرية) افضل عروض حجوزات الطيران"},
        {id: 1 , title: "عروض على الزيارات المتعدده بأفضل الأسعار"},
        {id: 2 , title: "أقوى العروض زيارات الإمارات (سنه متعدده)"},
        {id: 3 , title: "عرض إقامه حره الإمارات (مدة عامين)"},
    ];
    return (
        <section className='my-5! scroll-mt-20' id='offers'>
            <div className="container mx-auto!">
                <div className='offer_img rounded-2xl' data-aos="fade-down">
                    <Swiper navigation={true} loop={true} modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }} className="mySwiper h-[50px]">
                        {offers.map(offer => (
                            <SwiperSlide key={offer.id} className='text-white text-[15px] md:text-2xl'>{offer.title}</SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Offers