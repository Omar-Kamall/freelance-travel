import { Logo } from '../../public/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer dir='rtl' className='px-[5%]!'>
            <div className="container mx-auto! grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 border-b-1 border-gray-200 py-5!">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-2!">
                        <Link to={"/"}>
                            <img src={Logo} width={40} alt="Image-Error" loading="lazy" />
                        </Link>
                        <Link to={"/"}>
                            <h3 className="text-[18px] font-bold hover:text-[#2986FE] transition duration-400">Freelance <span className="text-[#2986FE] hover:text-black transition duration-400">TL</span></h3>
                        </Link>
                    </div>
                    <p>اكتشف العالم خطوة بخطوة.<br/> الحياة رحلة قصيرة</p>
                </div>
                <div className="flex flex-col">
                    <span className='mb-2! text-[#2986FE]'>الشركه</span>
                    <span className='mb-1!'>الصفحة الرئيسية</span>
                    <span className='mb-1!'>معالم مشهورة</span>
                    <span className='mb-1!'>حول</span>
                    <span className='mb-1!'>الأسئلة الشائعة</span>
                </div>
                <div className="flex flex-col">
                    <span className='mb-2! text-[#2986FE]'>السفر</span>
                    <span className='mb-1!'>اسيا</span>
                    <span className='mb-1!'>افريقيا</span>
                    <span className='mb-1!'>اوروبا</span>
                    <span className='mb-1!'>استراليا</span>
                </div>
                <div className="flex flex-col">
                    <span className='mb-2! text-[#2986FE]'>الموارد</span>
                    <span className='mb-1!'>كتب إلكترونية مجانية</span>
                    <span className='mb-1!'>دليل السفر</span>
                    <span className='mb-1!'>المدونة</span>
                    <span className='mb-1!'>قائمة تشغيل يوتيوب</span>
                </div>
            </div>
            <div className="text-center py-3!">
                <Link to={"https://portfoliio-omar-kamal.vercel.app/"}>تم تطوير هذا الموقع بواسطة <span className='text-[#2986FE]'>Omar Kamal</span></Link>
            </div>
        </footer>
    )
}

export default Footer