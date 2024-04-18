import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'

export const Footer = () => {

    const [storeLink, setStoreLink] = useState('');

    useEffect(() => {
        const handleDeviceDetection = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isIOS = /iphone|ipad|ipod/g.test(userAgent);
            const isAndroid = /android/g.test(userAgent);

            if (isAndroid) {
                setStoreLink('https://play.google.com/store/apps/details?id=com.skan.treiize.taxi&pcampaignid=web_share');
            } else if (isIOS) {
                setStoreLink('https://apps.apple.com/bf/app/treiize-taxi/id6482293997?l=fr-FR ');
            } else {
                setStoreLink('https://play.google.com/store/apps/details?id=com.skan.treiize.taxi&pcampaignid=web_share');
            }
        };

        handleDeviceDetection();
    })

    return (
        <>
            <div className='bg-white pt-6 px-8 xl:px-60'>
                <div className='flex  justify-between items-center'>
                    <div className='flex gap-3 my-2'>
                        <Link to={'https://www.facebook.com/profile.php?id=100081866277583'} target='_blank'>
                            <div className='bg-[#EBEBEB] w-10 h-10 p-2 rounded-full'>
                                <img src={facebook} alt="" />
                            </div>
                        </Link>
                        <div className='bg-[#EBEBEB] w-10 h-10 p-2 rounded-full'>
                            <img src={instagram} alt="" />
                        </div>
                    </div>
                    <div>
                        <Link to={storeLink} className='bg-[#EBEBEB] w-[157px] border-none font-semibold text-[#00000] text-[14px] rounded-full btn btn-sm'>Installer l’app</Link>
                    </div>
                </div>
                <div className='bg-[#EBEBEB] h-[1px] w-full' ></div>
                <div className='my-6 flex  justify-between'>
                    <p className='font-semibold text-[12px]'>© {new Date().getFullYear()} Treiize Taxi</p>
                    <div className='flex gap-2 text-[#000000]'>
                        <Link to={'/term'} className='font-semibold text-[10px]'>Terms & Conditions</Link> <Link to={'/politique-confidentialite'} className='font-semibold text-[10px]'>Confidentialité</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
