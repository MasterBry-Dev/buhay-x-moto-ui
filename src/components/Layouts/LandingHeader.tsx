import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IRootState } from '../../store';
import { UseDispatch } from 'react-redux';
import AboutModal from '../modals/aboutModal';

import { setPageTitle, toggleTheme } from '../../store/themeConfigSlice';
import IconSun from '../Icon/IconSun';
import IconMoon from '../Icon/IconMoon';
import IconLaptop from '../Icon/IconLaptop';

const LandingHeader = () => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [isShow, setShow] = useState(false);

    const showModal = async () => {
        setShow(!isShow);
    };

    const dispatch = useDispatch();
    console.log(themeConfig.theme);
    return (
        <>
            <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
                <div className="">
                    <div className="relative flex w-full items-center px-5 py-2.5">
                        <div className="horizontal-logo flex lg:inline hidden justify-between items-center ltr:mr-2 rtl:ml-2">
                            <img src={`../dist/assets/images/bxm-icon-${themeConfig.theme}.png`} alt="Boss Tony" className="" />
                        </div>

                        <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                            <div className="lg:ltr:mr-auto lg:rtl:ml-auto">
                                <div className="hidden lg:inline">
                                    {themeConfig.theme === 'light' ? (
                                        <button
                                            className={`${
                                                themeConfig.theme === 'light' &&
                                                'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                                            }`}
                                            onClick={() => {
                                                dispatch(toggleTheme('dark'));
                                            }}
                                        >
                                            <IconSun />
                                        </button>
                                    ) : (
                                        ''
                                    )}
                                    {themeConfig.theme === 'dark' && (
                                        <button
                                            className={`${
                                                themeConfig.theme === 'dark' &&
                                                'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                                            }`}
                                            onClick={() => {
                                                dispatch(toggleTheme('light'));
                                            }}
                                        >
                                            <IconMoon />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div></div>

                            <div className="flex text-xs lg:text-sm dark:text-white-light">
                                <span className="cursor-pointer text-dark font-bold dark:text-white-light" onClick={backToTop}>
                                    HOME
                                </span>
                                <span className="ms-3 me-3 cursor-pointer text-dark font-bold dark:text-white-light" onClick={() => showModal()}>
                                    ABOUT
                                </span>
                                <span className="cursor-pointer text-dark font-bold me-2 dark:text-white-light">CONTACT US</span>
                                <span className="ms-2 me-5 cursor-pointer text-dark font-bold dark:text-white-light">MEMBERS</span>
                                <NavLink to="/auth/login">
                                    <span className="me-3 cursor-pointer text-dark font-bold dark:text-white-light">FORUM</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <AboutModal ishow={isShow} onClose={showModal}></AboutModal>
        </>
    );
};

export default LandingHeader;
