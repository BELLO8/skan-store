import React from 'react'
import { features, helps, steps } from '../../Utils/constant'
import img1 from '../../assets/images/image1.png'
import img2 from '../../assets/images/image2.png'
import img3 from '../../assets/images/image3.png'
import mock from '../../assets/images/mock.png'
import { Footer } from '../../components/Footer'
import { Step } from '../../components/Step'
export const Home = () => {


    return (
        <>
            {/* banner with image */}
            <div className='lg:flex mx-auto xl:max-w-7xl'>
                <div className="my-4 lg:px-36 md:items-center grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4  ">
                    <div className='max-sm:px-10 max-md:px-12 max-lg:px-8'>
                        <h1 className='max-sm:text-[32px] max-md:text-[45px] max-lg:text-[50px] lg:text-[50px] max-xl:text-[50px] leading-10 text-[#000000] font-bold'>Aller n'importe où, n'importe quand</h1>
                        <p className='mt-[18px] mb-[35px] lg:text-[18px] font-medium text-[#707070]'>Treiize Taxi est l'appli de mobilité tout-en-un. Soyez pris en charge par un chauffeur avec un service première classe en quelques minutes et profitez d'un trajet confortable où que vous alliez</p>
                        <button className='text-[13px] text-white btn btn-sm rounded-full font-semibold w-[194px] h-[37px] bg-[#F15625] hover:bg-[#F15625]'>Télécharger l'application</button>
                    </div>
                    <div className='md:w-[514px] md:h-[385]  lg:w-[514px] lg:h-[385] sm:mx-auto'>
                        <img src={mock} alt="" />
                    </div>
                </div>
            </div>

            {/* application steps */}

            <div className='bg-[#1F1F1F] my-8'>
                <div className='p-8 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 max-sm:gap-6 sm:gap-6 md:gap-8 lg:px-38 xl:px-48'>
                    {
                        steps.map((item) => (
                            <Step icon={item.icon} name={item.name} description={item.description} />
                        ))
                    }

                </div>
            </div>


            <div>
                <div className='text-center max-sm:px-6'>
                    <h1 className='text-[#F15625] max-sm:text-[22px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-bold'>L’appli qu’il vous faut pour tous vos trajets</h1>
                    <p className='text-wrap mx-auto xl:w-[564px]'>Finis les longues minutes d’attente, les tarifs élévés, et les prises de tête avec le chauffeur ! Simplifiez vous la vie avec Treize Taxi.</p>
                </div>

                <div className='max-sm:px-8 sm:px-8 mt-[78px] xl:px-64 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
                    {
                        features.map((item) => (
                            <div className='bg-white shadow-sm rounded-[18px] p-6'>
                                <img src={item.icon} alt="" />
                                <p className='font-semibold text-[21px] text-[#000000]'>{item.name}</p>
                                <p className='text-[15px] text-[#444444]'>{item.description}</p>
                            </div>
                        ))
                    }

                </div>

            </div>

            <div className='mt-[78px] flex items-center justify-between xl:px-24 mx-auto max-w-7xl'>
                <div className="px-8 grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center my-4">
                    <div className='xl:w-[514px] xl:h-[385]'>
                        <img src={img1} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='leading-6  lg:leading-10 text-[#F15625] text-[19px] lg:text-[35px] font-bold'>Restez en sécurité durant toutes la durée du trajet</h1>
                        <div className='mt-8 grid grid-rows gap-4'>
                            {
                                helps.map((item) => (
                                    <div className='flex gap-2'>
                                        <div>
                                            <div className='text-white text-center bg-[#32BB78] rounded-[100px] w-6 h-6'>
                                                {item.id}
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

                </div>
            </div>

            <div className='mt-16 flex items-center justify-between'>
                <div className="grid md:grid-cols-2 md:items-center my-4">
                    <div className='bg-[#3C3C3C] h-[402px] px-12 lg:px-[120px] flex items-center'>
                        <div className=''>
                            <h1 className='leading-10 text-white text-[30px] lg:text-[40px] font-bold'>Devenez conducteur sur Treize Taxi</h1>
                            <p className='mt-[18px] mb-[35px] text-[18px] font-medium text-white'>Rejoingez Treize Taxi en tant que conducteur, définissez votre planning et percevez des revenus en conduisant !</p>
                            <button className='border-none text-[14px] text-white btn btn-sm rounded-full font-semibold w-[268px] h-[37px] bg-[#F15625] hover:bg-[#F15625]'>S’inscrire en tant que conducteur</button>
                        </div>
                    </div>
                    <div className='w-full h-[402px]' style={{ backgroundImage: `url("${img3}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    </div>
                </div>
            </div>

            <div className='mb-8 mt-8 text-center'>
                <h1 className='text-[#000000] max-sm:text-[24px] lg:text-[40px] xl:text-[40px] font-bold'>
                    Téléchargez l’application Treize Taxi
                </h1>
                <div className='flex justify-center mt-[58px] px-8' >
                    <div className='relative'>
                        {/* <Link to={'/conducteur'} className='absolute right-[313px] bottom-4 bg-green-200 px-16 py-4'></Link>

                        <Link to={'/partenaire'} className='absolute max-sm:right-[74px] lg:right-[168px] bottom-1.5 bg-white px-6 py-2'></Link> */}
                        <img src={img2} alt="" width={1016} height={913} />
                    </div>

                </div>
            </div>


            <Footer />
        </>
    )
}
