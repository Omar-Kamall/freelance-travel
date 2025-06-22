import Aos from "aos";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Questions = () => {
    // Open And Close Slide Question
    const [slide1, setSlide1] = useState(false);
    const [slide2, setSlide2] = useState(false);
    const [slide3, setSlide3] = useState(false);
    // AOS Animation
    useEffect(() => {
        Aos.init({duration: 2500});
    },[])
    return (
        <section className="my-5! scroll-mt-20" id="questions">
            <div className="container mx-auto!">
                <div className="grid grid-cols-1 gap-7">
                    <div data-aos="fade-down">
                        <div className="flex items-center justify-between p-3! border-1 border-[#2986FE] rounded">
                            <h4 className="text-[20px] font-semibold">ما هي المتطلبات الأساسية لحجز تذاكر طيران .؟</h4>
                            {slide1 ? <IoIosArrowUp onClick={() => {setSlide1(false),setSlide2(false),setSlide3(false)}} className="cursor-pointer" size={25}/> :
                            <IoIosArrowDown onClick={() => {setSlide1(true),setSlide2(false),setSlide3(false)}} className="cursor-pointer" size={25}/> }
                        </div>
                        {slide1 && <div className="flex items-center gap-5 p-2! border-b-1 border-l-1 border-r-1 border-[#2986FE]">
                            <p className="text-[20px]">مطلوب جواز السفر الخاص بالشخص يجب أن يكون ساري</p>
                            <Link to={"https://wa.me/201006677452?text=أريد الإستعلام عن التذاكر"} target='_blanck'>
                                <button className="CartBtn text-[18px] bg-green-600">
                                    <span className="IconContainer">
                                        <FaWhatsapp color="white"/>
                                    </span>
                                    <p className="text">تواصل معنا</p>
                                </button>
                            </Link>
                        </div>}
                    </div>
                    <div data-aos="fade-down">
                        <div className="flex items-center justify-between p-3! border-1 border-[#2986FE] rounded">
                            <h4 className="text-[20px] font-semibold">ما هي المتطلبات الأساسية لعمل زيارة سياحية أو متعددة .؟</h4>
                            {slide2 ? <IoIosArrowUp onClick={() => {setSlide1(false),setSlide2(false),setSlide3(false)}} className="cursor-pointer" size={25}/> :
                            <IoIosArrowDown onClick={() => {setSlide1(false),setSlide2(true),setSlide3(false)}} className="cursor-pointer" size={25}/> }
                        </div>
                        {slide2 && <div className="flex items-center gap-5 p-2! border-b-1 border-l-1 border-r-1 border-[#2986FE]">
                            <p className="text-[20px]">مطلوب جواز السفر الخاص بالشخص يجب أن يكون ساري و 2 صورة شخصية و شهادة ميلاد و صورة البطاقة الشخصية</p>
                            <Link to={"https://wa.me/201006677452?text=أريد الإستعلام عن الزيارات"} target='_blanck'>
                                <button className="CartBtn text-[18px] bg-green-600">
                                    <span className="IconContainer">
                                        <FaWhatsapp color="white"/>
                                    </span>
                                    <p className="text">تواصل معنا</p>
                                </button>
                            </Link>
                        </div>}
                    </div>
                    <div data-aos="fade-down">
                        <div className="flex items-center justify-between p-3! border-1 border-[#2986FE] rounded">
                            <h4 className="text-[20px] font-semibold">ما هي المتطلبات الأساسية للفيزا (إقامة حره) .؟</h4>
                            {slide3 ? <IoIosArrowUp onClick={() => {setSlide1(false), setSlide2(false), setSlide3(false)}} className="cursor-pointer" size={25}/> :
                            <IoIosArrowDown onClick={() => {setSlide1(false), setSlide2(false), setSlide3(true)}} className="cursor-pointer" size={25}/> }
                        </div>
                        {slide3 && <div className="flex items-center gap-5 p-2! border-b-1 border-l-1 border-r-1 border-[#2986FE]">
                            <p className="text-[20px]">مطلوب جواز السفر الخاص بالشخص يجب أن يكون ساري و 2 صورة شخصية و شهادة ميلاد و صورة البطاقة الشخصية</p>
                            <Link to={"https://wa.me/201006677452?text=أريد الإستعلام عن الإقامة الحرة"} target='_blanck'>
                                <button className="CartBtn text-[18px] bg-green-600">
                                    <span className="IconContainer">
                                        <FaWhatsapp color="white"/>
                                    </span>
                                    <p className="text">تواصل معنا</p>
                                </button>
                            </Link>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions