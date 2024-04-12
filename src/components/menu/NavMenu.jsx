import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { MobileMenu } from './MobileMenu';

export const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Conducteur', href: '/conducteur' },
    { name: 'Partenaire', href: '/partenaire' },
    { name: 'A propos', href: '/a-propos' },
    { name: 'Contacts', href: '/contact' },
]

export default function NavMenu() {
    const [checked, setChecked] = useState(false)
    return (
        <header className="sticky top-0 bg-white shadow-md min-w-screen z-50">
            <nav aria-label="Top" className="lg:mx-auto lg:max-w-7xl ">
                <div className="">
                    <div className="flex h-[80px] items-center justify-between p-4 lg:px-8 xl:px-28">
                        <div className="lg:ml-4 flex">
                            <Link to={'/'}>
                                <img
                                    className="h-[45px] w-[45px]"
                                    src={logo}
                                    alt=""
                                />
                            </Link>

                        </div>

                        <div className="hidden lg:flex lg:gap-x-10" id="close">
                            {navigation.map((item) => (
                                <NavLink key={item.name} href={item.href} to={item.href} className="text-[16px] font-semibold leading-6 text-gray-900">
                                    {item.name}
                                </NavLink>
                            ))}
                            <Link to={'http://www.treiizetaxi.com/partenaire/'} className="btn btn-sm h-[35px] px-8 rounded-full  bg-[#F15625] text-white hover:bg-[#F15625]">Se connecter</Link>
                        </div>

                        <div className='lg:hidden'>
                            <div className="drawer">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={checked} />
                                <div className="drawer-content">
                                    <label
                                        onClick={() => {
                                            setChecked(!checked)
                                        }}

                                        htmlFor="my-drawer"
                                        className="btn btn-sm drawer-button"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>

                                    </label>
                                </div>
                                <MobileMenu clickAction={() => setChecked(false)} handleClick={() => { setChecked(false) }} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
