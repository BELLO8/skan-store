import React from 'react';
import { NavLink } from 'react-router-dom';
import img2 from '../../assets/images/image2.png';
import { navigation } from './NavMenu';
export const MobileMenu = ({ setOpenSide, openSide }) => {

    return (
        <div className="drawer-side">
            <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-[250px] min-h-full bg-white text-dark">
                <img className='mb-8' src={img2} alt="" width={1016} height={913} />

                {navigation.map((item, index) => (
                    <div key={index} className="nav-links w-full">
                        <div className="flex space-x-3 w-full px-6 py-2">
                            <NavLink to={item.href} className="text-[16px] font-medium leading-6 text-gray-900">
                                {item.name}
                            </NavLink>
                        </div>
                    </div>
                ))}
                <button className="border-none mt-12 btn btn-sm h-[35px] px-8 rounded-full  bg-[#F15625] text-white hover:bg-[#F15625]">S'inscrire</button>
            </ul>
        </div>
    )
}

