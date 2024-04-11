import React from 'react'
import { faq, howItWork, partnerStep } from '../../Utils/constant'
import Group from '../../assets/images/Group.png'
import banner2 from '../../assets/images/banner2.png'
import phone from '../../assets/images/img5.png'
import { Footer } from '../../components/Footer'

export const Partenaire = () => {
    return (
        <>
            <div className='text-center flex items-center justify-center h-96 xl:h-[470px]' style={{ backgroundImage: `url("${banner2}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='max-sm:px-10 max-md:px-12 max-lg:px-28  w-[705px]'>
                    <h1 className='max-sm:text-[32px] max-md:text-[45px] max-lg:text-[50px] lg:text-[50px] max-xl:text-[50px] leading-10 text-white font-bold'>
                        Augmentez les performances de vos véhicules avec Treiize Taxi
                    </h1>
                    <p className='text-center mx-auto w-[423px] mt-[18px] mb-[35px] lg:text-[18px] font-medium text-white'>
                        Propriétaire de plusieurs véhicules ? Rejoingez Treiize Taxi en tant partenaires et augmentez les revenus de vos véhicules
                    </p>
                    {/* <button className='border-none text-[13px] text-white btn btn-sm rounded-full font-semibold w-[194px] h-[37px] bg-[#F15625] hover:bg-[#F15625]'>
                        Commencez maintenant
                    </button> */}
                </div>
            </div>

            <div className='py-8 bg-[#1F1F1F]'>
                <div className='text-center max-sm:px-6'>
                    <h1 className='text-[#F15625] text-[24px] lg:text-[40px] font-bold'>Devenez l’un de nos nombreux partenaires</h1>
                    <p className='text-wrap mx-auto xl:w-[564px] text-white'>Devenez partenaire Treiize Taxi et bénéficiez de nombreux pour vos conducteurs et vos revenus.</p>
                </div>
                <div className='my-8'>
                    <div className='px-4 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-sm:gap-6 sm:gap-6 md:gap-8 lg:px-48 xl:px-80'>
                        {
                            partnerStep.map((item) => (
                                <div className='bg-white shadow-sm rounded-[18px] p-6'>
                                    <img src={item.icon} width={35} height={35} alt="" />
                                    <p className='font-semibold text-[18px] text-[#000000]'>{item.name}</p>
                                    <p className='text-[14px] text-[#444444]'>{item.description}</p>
                                </div>))
                        }
                    </div>
                </div>
            </div>

            <div className='mt-[78px] flex items-center justify-between xl:px-24 mx-auto max-w-7xl'>
                <div className="px-6 grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center my-4">
                    <div className=''>
                        <h1 className='leading-10 text-[#F15625] text-[26px] lg:text-[35px] font-bold'>Comment ça marche ?</h1>
                        <div className='mt-8 grid grid-rows gap-4'>
                            {
                                howItWork.map((item) => (
                                    <div className='flex gap-2'>
                                        <div>
                                            <div className='bg-[#32BB78] rounded-[100px] w-8 h-8 flex items-center'>
                                                <img src={item.icon} alt="" className='mx-auto' />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h1 className='font-bold text-[16px] text-[#000000]'>{item.name}</h1>
                                            <p className='text-sm text-[#484848]'>{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    <div className=''>
                        <img src={Group} alt="" />
                    </div>


                </div>
            </div>

            <div className='mt-12 text-center max-sm:px-6'>
                <h1 className='text-[#F15625] max-sm:text-[22px] sm:text-[28px] md:text-[30px] lg:text-[35px] font-bold'>Foire aux questions des chauffeurs</h1>
            </div>
            <div className="mt-12 flex justify-center px-8">
                <div className='grid grid-rows gap-4'>
                    {
                        faq.map((item) => (
                            <div className="collapse collapse-arrow bg-white border w-full">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-[16px] font-semibold text-[#000000]">
                                    {item.question}
                                </div>
                                <div className="collapse-content">
                                    <p className='text-[14px] font-medium'>
                                        {item.response}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className='px-4 lg:flex justify-center my-28'>
                <div className='px-8 py-6 flex items-center bg-[#2D2D2D] rounded-[30px] w-full lg:w-[1082px] lg:h-[364px]'>
                    <div className="lg:relative grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                        <div className=''>
                            <h1 className='text-[27px] lg:text-[35px] text-white font-bold leading-10'>
                                Votre partenariat avec Treiize Taxi peut commencer aujourd’hui
                            </h1>
                            <p className='mt-[18px] mb-[30px] lg:text-[17px] text-white'>
                                Cela ne dépend plus que de vous.
                            </p>
                            <button className='border-none text-[14px] text-[#00000] btn btn-sm rounded-full font-bold w-[184px] h-[37px] bg-white hover:bg-white'>Devenir partenaire</button>
                        </div>
                        <div className='lg:absolute lg:bottom-[-67px] lg:right-0 w-[240px] h-[217px]  lg:w-[514px] lg:h-[515px] sm:mx-auto'>
                            <img src={phone} alt="" />
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}
