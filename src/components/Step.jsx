import React from 'react'

export const Step = ({ icon, name, description }) => {
    return (
        <>
            <div className='flex gap-x-2'>
                <div>
                    <img src={icon} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-[18px] text-white'>{name}</h1>
                    <p className='text-[16px] font-medium text-[#D0D0D0]'>{description}</p>
                </div>
            </div>
        </>
    )
}
