import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import themeConfig from '../theme.config';
import IconCaretDown from '../components/Icon/IconCaretDown';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { delay } from '@reduxjs/toolkit/dist/utils';
import IconHeart from '../components/Icon/IconHeart';
import IconEye from '../components/Icon/IconEye';

const items = [
    {
        src: 'YallaAd.png',
        label: 'Yalla Chicken',
        link: 'https://www.facebook.com/profile.php?id=100076181672639&_rdc=1&_rdr',
    },
    {
        src: 'PinoyXtreme.png',
        label: 'Our Parner Channel',
        link: 'https://www.facebook.com/pxtremeofficial/?_rdc=2&_rdr',
    },
    {
        src: 'BXMFBpage.png',
        label: 'Follow our FB Page',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdADCaQchGJyJaaN63YaiUK3EBgeQ0dqxbNZ2w7-46VhjUnAg/viewform',
    },

    {
        src: 'BXMFBgroup.png',
        label: 'Join our FB Group',
        link: 'https://www.facebook.com/groups/buhayxmoto',
    },
];
const Landing = () => {
    return (
        <>
            {/* 1st section */}
            <div id="home" className="grid xl:grid-cols-3 gap-6 mb-6 p-10 m-5 sm:p-0">
                {/* image */}
                <div className="flex justify-center items-center h-full xl:col-span-1">
                    <img src="../dist/assets/images/BossTony.png" alt="Boss Tony" className="h-auto" />
                </div>

                {/* description */}
                <div className="p-10 h-full xl:col-span-2 space-y-6 text-dark dark:text-white-light">
                    <h3 className="lg:text-4xl text-lg font-bold mt-10 ">WELCOME TO BUHAY X MOTO PHILIPPINES!</h3>
                    <p className="text-lg font-medium">Buhay X Moto is a TV show for Philippines Motorcycle Enthusiasts.</p>
                    <p className="text-lg font-medium">
                        Besides the awesome motorcycles - technology, aesthetics, etc, we will feature personalities, culture and the people that make the community vibrant, colorful and very
                        interesting!
                    </p>
                    <p className="text-lg font-medium">
                        Hosted by "BOSS Tony Agudo", BXMPh is shown on Pinoy Xtreme Channel, it is available in over 200 satellite and cable tv providers all across the country, with over 8 Million
                        plus subscribers.
                    </p>
                </div>
            </div>

            {/* 2nd section */}
            <div className="pt-0 grid xl:grid-cols-1 grid-cols-1 gap-6 shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-2xl">
                <div className="">
                    <div className="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-slate-800 dark:text-white-light w-full mb">
                        <h2 className="text-dark mb-5 mt-4 text-end text-5xl dark:text-white-light">BECOME PART OF HISTORY!</h2>
                        <p className="lead mt-3 mb-4 dark:text-white-light text-end">Be One of our Pioneer Members!</p>
                        <hr className="my-4 dark:border-[#fafafa]" />

                        <div className="flex justify-center my-4">
                            <iframe height="400" width="760" className="" src="https://www.youtube.com/embed/jZv9wIIS4ss"></iframe>
                        </div>

                        <p className="text-center">The First 1,000 Followers on our FB Page will be part of the first giveaways and raffles with more chance to win prizes such as.</p>
                        <p className="text-center">Tires, Motor Oils, Gasoline, Helmets and Gear, etc.</p>

                        <div className="flex justify-center my-4">
                            <p>
                                <a href="https://www.facebook.com/profile.php?id=61558962730787&_rdc=1&_rdr" className="text-dark text-center dark:text-white-light">
                                    FOLLOW OUR FB PAGE
                                </a>{' '}
                                NOW and be Part of History
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" className="panel rounded-2xl lg:col-span-2 mb-6 mt-6">
                <div className="swiper" id="slider5">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: '.swiper-button-next-ex5',
                                prevEl: '.swiper-button-prev-ex5',
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                            }}
                            dir={themeConfig.rtlClass}
                            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                        >
                            {items.map((item, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <a href={item.link} className="block w-full">
                                            <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                                <div className="py-7 px-6">
                                                    <div className="-mt-7 mb-3 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                                                        <img src={`../dist/assets/images/${item.src}`} alt="image" className="w-full h-full" />
                                                    </div>
                                                    <h5 className="text-[#3b3f5c] text-xl font-semibold mb-0 dark:text-white-light">{item.label}</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <button className="swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
                        <IconCaretDown className="w-5 h-5 rtl:-rotate-90 rotate-90" />
                    </button>
                    <button className="swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
                        <IconCaretDown className="w-5 h-5 rtl:rotate-90 -rotate-90" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Landing;
