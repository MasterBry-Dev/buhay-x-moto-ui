import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import themeConfig from '../theme.config';
import IconCaretDown from '../components/Icon/IconCaretDown';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { UseDispatch, useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { useEffect } from 'react';

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
            <div className=" flex justify-center mb-3">
                <img src="../dist/assets/images/BXM-header2.png" alt="BXM-Header" className="w-screen lg:px-28 lg:h-56" />
            </div>

            {/* 1st section */}
            <div className="grid xl:grid-cols-3 mb-10">
                {/* image */}
                <div className="flex justify-center xl:col-span-1">
                    <img src="../dist/assets/images/BossTony.png" alt="Boss Tony" className="w-60 lg:w-80" />
                </div>

                {/* description */}
                <div className="lg:pr-20 lg:py-10 h-full xl:col-span-2 space-y-4 text-dark dark:text-white-light ">
                    <h3 className="lg:text-3xl lg:mt-10 lg:text-left text-center  text-lg font-bold ">WELCOME TO BUHAY X MOTO PHILIPPINES!</h3>
                    <p className="lg:text-lg lg:text-left text-sm text-center font-medium">Buhay X Moto is a TV show for Philippines Motorcycle Enthusiasts.</p>
                    <p className="lg:text-lg lg:text-left text-sm text-center font-medium">
                        Besides the awesome motorcycles - technology, aesthetics, etc, we will feature personalities, culture and the people that make the community vibrant, colorful and very
                        interesting!
                    </p>
                    <p className="lg:text-lg lg:text-left text-sm text-center font-medium">
                        Hosted by "BOSS Tony Agudo", BXMPh is shown on Pinoy Xtreme Channel, it is available in over 200 satellite and cable tv providers all across the country, with over 8 Million
                        plus subscribers.
                    </p>
                </div>
            </div>

            {/* 2nd section */}
            <div className="grid xl:grid-cols-1 grid-cols-1 gap-6 shadow-[4px_6px_10px_-3px_#bfc9d4] dark: shadow-none rounded-2xl">
                <div className=" bg-[#f1f2f3] px-14 py-8  rounded max-w-full dark:bg-slate-800 dark:text-white-light w-full">
                    <h2 className="text-dark mt-4 text-end text-4xl font-bold dark:text-white-light">BECOME PART OF HISTORY!</h2>
                    <p className="lead mt-2 mb-4 text-base dark:text-white-light text-end">Be One of our Pioneer Members!</p>
                    <hr className="my-4 dark:border-[#fafafa]" />

                    <div className="flex justify-center my-4">
                        <iframe height="350" width="800" className="" src="https://www.youtube.com/embed/jZv9wIIS4ss"></iframe>
                    </div>

                    <p className="text-center text-base text-dark dark:text-white-light">
                        The First 1,000 Followers on our FB Page will be part of the first giveaways and raffles with more chance to win prizes such as.
                    </p>
                    <p className="text-center text-base text-dark dark:text-white-light">Tires, Motor Oils, Gasoline, Helmets and Gear, etc.</p>

                    <div className="flex justify-center my-4 text-center">
                        <p className="text-base text-dark dark:text-white-light">
                            <a href="https://www.facebook.com/profile.php?id=61558962730787&_rdc=1&_rdr" className="text-dark text-center font-bold dark:text-white-light underline">
                                FOLLOW OUR FB PAGE
                            </a>{' '}
                            now and be Part of History
                        </p>
                    </div>
                </div>
            </div>

            <div className="panel rounded-2xl lg:col-span-2 mb-6 mt-6">
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
                                    slidesPerView: 4,
                                    spaceBetween: 5,
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
                                            <div className="w-ful bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none mb-8">
                                                <div className="py-2 px-8">
                                                    <div className="-mt-7 mb-3 -mx-8 rounded-tl rounded-tr h-[205px] overflow-hidden">
                                                        <img src={`../dist/assets/images/${item.src}`} alt="image" className="w-full h-full" />
                                                    </div>
                                                    <h5 className="text-[#3b3f5c] text-xl font-semibold mb-0 dark:text-white-light mb-3 text-center">{item.label}</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </SwiperSlide>
                                );
                            })}

                            {items.map((item, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <a href={item.link} className="block w-full">
                                            <div className="w-ful bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none mb-8">
                                                <div className="py-2 px-8">
                                                    <div className="-mt-7 mb-3 -mx-8 rounded-tl rounded-tr h-[205px] overflow-hidden">
                                                        <img src={`../dist/assets/images/${item.src}`} alt="image" className="w-full h-full" />
                                                    </div>
                                                    <h5 className="text-[#3b3f5c] text-xl font-semibold mb-0 dark:text-white-light mb-3 text-center">{item.label}</h5>
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
