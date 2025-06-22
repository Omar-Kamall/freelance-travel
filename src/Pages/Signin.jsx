import { useEffect } from 'react';
import { Plane_Img } from '../../public/assets';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Aos from 'aos';
import * as Yup from "yup";
import { Navigate, useNavigate } from 'react-router';

const Signin = () => {
    // To Location
    const navigate = useNavigate();
    // AOS Animation
    useEffect(() => {
        Aos.init({duration: 2500});
    },[])
    return (
        <div dir='rtl' className='pt-[80px]! px-[5%]! mb-5!'>
            <div className="container mx-auto!">
                <div className="panal_img rounded grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center my-10!" data-aos="fade-left">
                        <Formik
                            initialValues={{ name: '', email: '', password: '' }}
                            validationSchema={Yup.object({
                                name: Yup.string()
                                    .min(2, "الإسم أقل من اللازم")
                                    .required("أدخل الإسم"),
                                email: Yup.string()
                                    .min(10, "الإيميل أقل من اللازم")
                                    .email("إيميل خطأ")
                                    .required("أدخل الإيميل"),
                                password: Yup.string()
                                    .min(8, "كلمة المرور اقل من اللازم")
                                    .required("أدخل كلمة المرور"),
                            })}
                            onSubmit={(values , { resetForm }) => {
                                navigate("/data");
                                resetForm();
                            }}
                        >
                            <Form className='flex flex-col border-2 border-white py-10! px-5! rounded'>
                                <h1 className='mb-3! text-center text-white text-3xl font-semibold'>تسجيل الدخول</h1>
                                <Field className="text-white w-60 my-1! border-2 p-2! rounded focus:outline-0 focus:border-[#2986FE]" type="text" name="name" placeholder="الإسم"/>
                                <ErrorMessage className='my-1! text-red-500' name="name" component="div"/>
                                <Field className="text-white w-60 my-1! border-2 p-2! rounded focus:outline-0 focus:border-[#2986FE]" type="text" name="email" placeholder="الإيميل"/>
                                <ErrorMessage className='my-1! text-red-500' name="email" component="div"/>
                                <Field className="text-white w-60 my-1! border-2 p-2! rounded focus:outline-0 focus:border-[#2986FE]" type="password" name="password" placeholder="كلمة المرور"/>
                                <ErrorMessage className='my-1! text-red-500' name="password" component="div"/>
                                <button className="text-white font-semibold my-1! border-2 p-2! rounded cursor-pointer hover:text-[#2986FE]" type="submit">تسجيل</button>
                            </Form>
                        </Formik>
                    </div>
                    <div data-aos="fade-right">
                        <img style={{transform: "scaleX(-1)"}} src={Plane_Img} alt="Image-Error" loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin