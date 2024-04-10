import React from 'react'
import { Footer } from '../../components/Footer'

export const Contact = () => {
    return (
        <>
            <div className='px-12 lg:px-72 mb-2 flex mt-12'>
                <div className='max-sm:px-10 max-md:px-12 max-lg:px-28  w-[705px]'>
                    <h1 className='max-sm:text-[32px] max-md:text-[45px] max-lg:text-[50px] lg:text-[50px] max-xl:text-[50px] leading-10 font-bold'>
                        Contactez-nous
                    </h1>
                </div>
            </div>

            <div className='px-12 lg:px-72 grid md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <p className='font-medium text-[21px]'>Téléphone</p>
                    <p className='font-bold text-[#F15625] text-[25px]'>+225 07 00 00 0000</p>
                </div>

                <div>
                    <p className='font-medium text-[21px]'>Adresse</p>
                    <p className='font-bold text-[#F15625] text-[25px]'>Cocody Faya Abidjan, Côte d'Ivoire</p>
                </div>
            </div>

            <div className='px-4 my-12'>
                <div className='lg:flex justify-center'>
                    <div className=' flex items-center justify-center bg-[#1F1F1F] rounded-[15px] lg:rounded-[30px]'>
                        <div className='p-20'>
                            <h1 className='lg:w-[770px] text-center text-[16px] lg:text-[22px] text-white leading-7'>Envie de rejoindre la team Treiize Taxi ou discuter avec nous ? Laissez nous un messge à l’adresse suivante</h1>
                            <p className='mt-3 text-center text-xl lg:text-[50px] text-white font-bold'>contact@treiize.org</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
