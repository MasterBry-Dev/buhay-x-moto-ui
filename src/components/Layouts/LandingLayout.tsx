import { PropsWithChildren, Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import App from '../../App';
import { IRootState } from '../../store';
import Footer from './Footer';
import LandingHeader from './LandingHeader';

const LandingLayout = ({ children }: PropsWithChildren) => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    return (
        <App>
            <div className="relative">
                <div className={`${themeConfig.navbar} main-container text-black dark:text-white-dark min-h-screen`}>
                    <div className="flex flex-col min-h-screen">
                        <LandingHeader />
                        <Suspense>
                            <div className={`${themeConfig.animation} p-6 animate__animated`}>{children}</div>
                        </Suspense>
                        <Footer />
                    </div>
                </div>
            </div>
        </App>
    );
};

export default LandingLayout;
