import React from 'react'
import { proposition } from '../../Utils/constant'
import about from '../../assets/images/about.png'
import banner3 from '../../assets/images/banner3.png'
import img2 from '../../assets/images/image2.png'
import vision from '../../assets/images/vision.png'
import { Footer } from '../../components/Footer'

export const Apropos = () => {
    return (
        <>

            <div className='text-center flex items-center justify-center h-96' style={{ backgroundImage: `url("${banner3}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='max-sm:px-10 max-md:px-12 max-lg:px-28  w-[705px]'>
                    <h1 className='max-sm:text-[32px] max-md:text-[45px] max-lg:text-[50px] lg:text-[50px] max-xl:text-[50px] leading-10 text-white font-bold'>
                        A propos
                    </h1>
                </div>
            </div>

            <div className='mt-12 flex items-center justify-between xl:px-24 mx-auto max-w-7xl'>
                <div className="px-6 grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center my-4">
                    <div className=''>
                        <h1 className='leading-10 text-[#F15625] text-[26px] lg:text-[35px] font-bold'>C’est quoi Treiize Taxi ?</h1>
                        <div className='mt-8 grid grid-rows gap-4'>
                            <p className='text-sm text-[#484848]'>
                                Treiize Taxi est une application mobile qui permet aux passagers de commander une course et aux conducteurs de facturer des tarifs et d'être payés. Plus précisément, Treiize Taxi est un service de covoiturage qui embauche des entrepreneurs indépendants comme chauffeurs.
                            </p>

                        </div>
                    </div>

                    <div className=''>
                        <img src={about} alt="" width={321} height={267} />
                    </div>

                </div>
            </div>

            <div className='p-8'>
                <div className='text-center max-sm:px-6'>
                    <h1 className='text-[#F15625] max-sm:text-[22px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-bold'>Ce que nous proposons</h1>
                </div>
                <div className='my-8'>
                    <div className='p-8 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-sm:gap-6 sm:gap-6 md:gap-8 lg:px-38 xl:px-48'>
                        {
                            proposition.map((item) => (
                                <div className='bg-white shadow-sm rounded-[18px] p-6'>
                                    <img src={item.icon} width={35} height={35} alt="" />
                                    <p className='font-semibold text-[18px] text-[#000000]'>{item.name}</p>
                                    <p className='text-[14px] text-[#444444]'>{item.description}</p>
                                </div>))
                        }
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between xl:px-24 mx-auto max-w-7xl'>
                <div className="px-6 grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center my-4">
                    <div className=''>
                        <h1 className='leading-10 text-[#F15625] text-[26px] lg:text-[35px] font-bold'>Notre vision</h1>
                        <div className='mt-8 grid grid-rows gap-4'>
                            <p className='text-sm text-[#484848]'>
                                Nous croyons que la meilleure utilisation de la technologie est d’améliorer la qualité de vie. C’est dans cette optique que nous avons créé TREIIZE TAXI spécialement pour réduire les coûts des transports et permettre aux chauffeurs de rentabiliser davantage.                            </p>

                        </div>
                    </div>

                    <div className=''>
                        <img src={vision} alt="" width={321} height={267} />
                    </div>

                </div>
            </div>

            <div className='mb-8 mt-8 text-center'>
                <h1 className='text-[#F15625] text-[24px] lg:text-[35px] font-bold'>
                    La qualité s'apprécie
                </h1>
                <p className='text-wrap mx-auto xl:w-[905px] text-[#515151]'>
                    Avec TREIIZE TAXI, vous pouvez dire adieu aux tarifs exorbitants et aux inquiétudes liées à votre budget de déplacement. Notre application vous offre la possibilité de réserver un taxi en ligne en quelques clics seulement, et à des tarifs transparents et compétitifs.
                </p>
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
