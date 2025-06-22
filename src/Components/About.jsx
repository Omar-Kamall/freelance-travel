import Aos from "aos";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
    // In View
    const { ref , inView} = useInView({
        threshold: 0.5,
    });
    const [loading, setLoading] = useState(false);
    // AOS Animation Scroll
    useEffect(() => {
        Aos.init({duration: 2500});
        setLoading(inView);
    },[inView])
    return (
        <section className="scroll-mt-20 my-4!" id="about">
            <div className="container mx-auto!">
                <div data-aos="fade-down">
                    <h2 className="text-2xl font-semibold my-3!">معلومات عنا</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[6fr_1fr_6fr] gap-5">
                    <div ref={ref} className="text-[17px] font-stretch-50%" data-aos="fade-down">
                        <p>نؤمن بأن السفر يجب أن يكون بسيطًا، اقتصاديًا، وخاليًا من التوتر. مهمتنا هي ربط المسافرين بأفضل عروض الرحلات الجوية وتجارب حجز سلسة. سواء كنت تخطط لرحلة سريعة أو مغامرة طويلة، نحن هنا لنجعل رحلتك سهلة.</p>
                    </div>
                    <div className="flex justify-center" data-aos="fade-down"><div className="border-2 border-[#2986FE] rounded h-full w-1 min-h-15"></div></div>
                    <div ref={ref} className="text-[17px] font-stretch-50%" data-aos="fade-down">
                        <p>نحن ملتزمون بجعل السفر الجوي أكثر سهولةً وراحةً للجميع. من خلال منصتنا سهلة الاستخدام، يمكنك بسهولة العثور على الرحلات التي تناسب جدولك وميزانيتك وحجزها. دعنا نهتم بالتفاصيل بينما تركز أنت على استكشاف وجهات جديدة وخلق ذكريات لا تُنسى.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10!">
                    <div ref={ref} className="flex flex-col items-center" data-aos="fade-down">
                        <span className="text-7xl text-[#2986FE] mb-2!">
                            <CountUp
                                start={0}
                                end={loading ? 10 : 0}
                                duration={4}
                                useEasing={true}
                            />+
                        </span>
                        <h6 className="text-[18px] font-semibold">سنوات من الخبرة</h6>
                    </div>
                    <div ref={ref} className="flex flex-col items-center" data-aos="fade-down">
                        <span className="text-7xl text-[#2986FE] mb-2!">
                            <CountUp
                                start={0}
                                end={loading ? 10 : 0}
                                duration={4}
                                useEasing={true}
                            />K
                        </span>
                        <h6 className="text-[18px] font-semibold">العملاء السعداء</h6>
                    </div>
                    <div ref={ref} className="flex flex-col items-center" data-aos="fade-down">
                        <span className="text-7xl text-[#2986FE] mb-2!">
                            <CountUp
                                start={0}
                                end={loading ? 4 : 0}
                                duration={4}
                                useEasing={true}
                            />.
                            <CountUp
                                start={0}
                                end={loading ? 9 : 0}
                                duration={4}
                                useEasing={true}
                            />
                        </span>
                        <h6 className="text-[18px] font-semibold">التصنيف العام</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About