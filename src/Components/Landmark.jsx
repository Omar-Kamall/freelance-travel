import { useEffect } from "react";
import { Img1, Img2, Img3 } from "../../public/assets";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Aos from "aos";

const Landmark = () => {
    useEffect(() => {
        Aos.init({ duration: 2500 });
    },[])
    return (
        <section className="scroll-mt-20" id="landmark">
            <div className="container mx-auto!">
                <h2 className="my-4! font-semibold text-3xl" data-aos="fade-down">المعالم المشهوره</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div data-aos="fade-down">
                        <img className="rounded-2xl w-full" src={Img1} alt="Image_Error" loading="lazy"/>
                        <div className="flex justify-between mt-2! font-semibold">
                            <span>منتجع شاطئ أولهوفيلي</span>
                            <span className="bg-[#2986FE] text-white px-2! py-[2px]! rounded-2xl flex items-center gap-1"><FaStar/>4.1</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaLocationDot/>
                            <span className="font-semibold">جزر المالديف</span>
                        </div>
                    </div>
                    <div data-aos="fade-down">
                        <img className="rounded-2xl w-full" src={Img2} alt="Image_Error" loading="lazy"/>
                        <div className="flex justify-between mt-2! font-semibold">
                            <span>منتجع شاطئ أولهوفيلي</span>
                            <span className="bg-[#2986FE] text-white px-2! py-[2px]! rounded-2xl flex items-center gap-1"><FaStar/>4.6</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaLocationDot/>
                            <span className="font-semibold">سري لانكا</span>
                        </div>
                    </div>
                    <div data-aos="fade-down">
                        <img className="rounded-2xl w-full" src={Img3} alt="Image_Error" loading="lazy"/>
                        <div className="flex justify-between mt-2! font-semibold">
                            <span>منتجع شاطئ أولهوفيلي</span>
                            <span className="bg-[#2986FE] text-white px-2! py-[2px]! rounded-2xl flex items-center gap-1"><FaStar/>3.5</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaLocationDot/>
                            <span className="font-semibold">إيطاليا</span>
                        </div>
                    </div>
                    <div data-aos="fade-down">
                        <img className="rounded-2xl w-full" src={Img1} alt="Image_Error" loading="lazy"/>
                        <div className="flex justify-between mt-2! font-semibold">
                            <span>منتجع شاطئ أولهوفيلي</span>
                            <span className="bg-[#2986FE] text-white px-2! py-[2px]! rounded-2xl flex items-center gap-1"><FaStar/>5.0</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaLocationDot/>
                            <span className="font-semibold">جزر القمر</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landmark