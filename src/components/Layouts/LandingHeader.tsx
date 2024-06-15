import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleRTL, toggleTheme, toggleSidebar } from '../../store/themeConfigSlice';
import { useTranslation } from 'react-i18next';
import IconMenu from '../Icon/IconMenu';

import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import IconX from '../Icon/IconX';

const LandingHeader = () => {
    const location = useLocation();

    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [location]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const debounce = (func: { (): void; apply?: any }, delay: number | undefined) => {
        let inDebounce: string | number | NodeJS.Timeout | undefined;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const scrollToDiv = (divId: string) => {
        return debounce(() => {
            const element = document.getElementById(divId);
            if (divId === 'top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                window.location.hash = '';
            }

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.location.hash = divId;
            }
        }, 100); // Adjust the delay as necessary
    };
    console.log(location.pathname);

    const [modal2, setModal2] = useState(false);
    return (
        <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
            <div className="">
                <div className="relative flex w-full items-center px-5 py-2.5 ">
                    <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2"></div>

                    <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                        <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>

                        <div>
                            <span className="cursor-pointer" onClick={scrollToDiv('top')}>
                                HOME
                            </span>
                            <span className="ms-5 me-5 cursor-pointer" onClick={() => setModal2(true)}>
                                ABOUT
                            </span>
                            <span className="cursor-pointer">CONTACT US</span>
                            <span className="ms-5 me-5 cursor-pointer">MEMBERS</span>
                            <NavLink to="/">
                                <span className="me-10 cursor-pointer">FORUM</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default LandingHeader;
