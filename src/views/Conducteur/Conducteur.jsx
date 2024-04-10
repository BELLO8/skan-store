import React from 'react'
import { faq } from '../../Utils/constant'
import calendar from '../../assets/icons/calendar.png'
import getMoney from '../../assets/icons/getmoney.png'
import man from '../../assets/icons/man.png'
import banner from '../../assets/images/banner.png'
import img1 from '../../assets/images/img4.png'
import phone from '../../assets/images/img5.png'
import { Footer } from '../../components/Footer'


export const Conducteur = () => {
    const steps = [
        {
            id: 1,
            icon: man,
            name: "Devenez votre propre patron",
            description: "Suivez chaque jour votre chiffre d’affaire en direct, vous êtes le seul à qui vous devez rendre des comptes."
        },
        {
            id: 2,
            icon: calendar,
            name: "Gérez votre emploi du temps",
            description: "Générez des revenus en soirée ou en fin de semaine ou gagnez plus d'argent en conduisant plus fréquemment. C'est vous qui décidez."
        }
        , {
            id: 3,
            icon: getMoney,
            name: "Des revenus fiable et régulier",
            description: "Vous recevrez des demandes de la part de notre large réseau de clients à tout moment lorsque vous vous connectez."
        }
    ]

    const helps = [
        {
            id: 1,
            name: "Acceptez une demande de course",
            description: "Vérifiez que le visage, la marque et la plaque d'immatriculation du chauffeur correspondent à celles affichées dans l'appli."
        },
        {
            id: 2,
            name: "Prenez en charge votre passager",
            description: "Suivez le trajet du véhicule grâce à la map et signalez tout incident qui pourrait survenir."
        }
        , {
            id: 3,
            name: "Conduisez vers la destination",
            description: "Suivez le trajet du véhicule grâce à la map et signalez tout incident qui pourrait survenir."
        }, {
            id: 4,
            name: "Recommencez pour gagner davantage",
            description: "Suivez le trajet du véhicule grâce à la map et signalez tout incident qui pourrait survenir."
        }
    ]


    return (
        <>
            <div className='flex items-center bg-slate-900 h-96 xl:h-[510px]' style={{ backgroundImage: `url("${banner}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='lg:flex mx-auto xl:max-w-7xl'>
                    <div className="my-4 items-center grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                        <div className='px-12 md:px-24 lg:px-2'>
                            <h1 className='text-[32px] lg:text-[50px] leading-10 text-white font-bold'>Conduisez à vos heures libre, gagnez de l’argent en plus</h1>
                            <p className='mt-[18px] mb-[35px] lg:text-[18px] font-medium text-white'>Générez plus de revenu selon votre emploi du temps en conduisant avec Treiize Taxi.</p>
                            <button className='border-none text-[13px] text-white btn btn-sm rounded-full font-semibold w-[194px] h-[37px] bg-[#F15625] hover:bg-[#F15625]'>Commencez maintenant</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='mt-8 text-center max-sm:px-6'>
                    <h1 className='text-[#F15625] max-sm:text-[22px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-bold'>Gagnez en temps et en argent</h1>
                    <p className='text-wrap mx-auto xl:w-[564px]'>Passez au niveau supérieur avec Treize Taxi et ne monétisez chaque minutes de votre temps libre sans gaspiller votre carburant.</p>
                </div>
                <div className='my-8'>
                    <div className='p-8 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 max-sm:gap-6 sm:gap-6 md:gap-8 lg:px-38 xl:px-48'>
                        {
                            steps.map((item) => (
                                <div className='bg-white shadow-sm rounded-[18px] p-6'>
                                    <img src={item.icon} width={35} height={35} alt="" />
                                    <p className='font-semibold text-[18px] text-[#000000]'>{item.name}</p>
                                    <p className='text-[14px] text-[#444444]'>{item.description}</p>
                                </div>))
                        }

                    </div>

                </div>
                <div className='text-center'>
                    <button className='border-none text-[14px] text-white btn btn-sm rounded-full font-semibold w-[313px] h-[37px] bg-[#F15625] hover:bg-[#F15625]'>Devenir conducteur sur Treize Taxi</button>
                </div>

            </div>

            <div className='mt-[78px] flex items-center justify-between xl:px-24 mx-auto max-w-7xl'>
                <div className="px-8 grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center my-4">
                    <div className='xl:w-[661px] xl:h-[722px]'>
                        <img src={img1} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='leading-10 text-[#F15625] text-[26px] lg:text-[35px] font-bold'>Comment fonction l’appli
                            Treize Taxi Driver</h1>
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

            <div className='text-center max-sm:px-6'>
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

            <div className='lg:flex justify-center my-28'>
                <div className='px-8 flex items-center bg-[#2D2D2D] rounded-[30px] w-full lg:w-[1082px] lg:h-[364px]'>
                    <div className="lg:relative grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                        <div className=''>
                            <h1 className='text-[27px] lg:text-[35px] text-white font-bold leading-10'>Commencez à conduire et à augmenter vos revenus de façon regulière</h1>
                            <p className='mt-[18px] mb-[30px] lg:text-[17px] text-white'>S’inscrire ne prends que quelques minutes.</p>
                            <button className='border-none text-[14px] text-[#00000] btn btn-sm rounded-full font-bold w-[184px] h-[37px] bg-white hover:bg-white'>Devenir conducteur</button>
                        </div>
                        <div className='lg:absolute lg:bottom-[-67px] lg:right-0 w-[240px] h-[38]  lg:w-[514px] lg:h-[385] sm:mx-auto'>
                            <img src={phone} alt="" />
                        </div>
                        {/* <div className='lg:absolute lg:bottom-[-67px] lg:right-0'>
                            <img src={phone} alt="" />
                        </div> */}
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}
