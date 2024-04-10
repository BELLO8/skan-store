import { NavLink } from 'react-router-dom';
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

    return (
        <header className="sticky top-0 bg-white shadow-md w-full z-50">
            <nav aria-label="Top" className="mx-auto lg:max-w-7xl ">
                <div className="">
                    <div className="flex h-[80px] items-center justify-between p-8 lg:px-8 xl:px-28">
                        <div className="ml-4 flex lg:ml-0">
                            <img
                                className="h-[45px] w-[45px]"
                                src={logo}
                                alt=""
                            />
                        </div>

                        <div className="hidden lg:flex lg:gap-x-10">
                            {navigation.map((item) => (
                                <NavLink key={item.name} href={item.href} to={item.href} className="text-[16px] font-semibold leading-6 text-gray-900">
                                    {item.name}
                                </NavLink>
                            ))}
                            <button className="btn btn-sm h-[35px] px-8 rounded-full  bg-[#F15625] text-white hover:bg-[#F15625]">S'inscrire</button>
                        </div>

                        <div className='lg:hidden'>
                            <div className="drawer">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    <label
                                        htmlFor="my-drawer"
                                        className="btn btn-sm drawer-button"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>


                                    </label>
                                </div>
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
