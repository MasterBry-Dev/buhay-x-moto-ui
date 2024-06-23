import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './store';
import { toggleRTL, toggleTheme, toggleLocale, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from './store/themeConfigSlice';
import store from './store';

function App({ children }: PropsWithChildren) {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleTheme(localStorage.getItem('bxm-theme') || themeConfig.theme));
        dispatch(toggleMenu(localStorage.getItem('bxm-menu') || themeConfig.menu));
        dispatch(toggleLayout(localStorage.getItem('bxm-layout') || themeConfig.layout));
        dispatch(toggleRTL(localStorage.getItem('bxm-rtlClass') || themeConfig.rtlClass));
        dispatch(toggleAnimation(localStorage.getItem('bxm-animation') || themeConfig.animation));
        dispatch(toggleNavbar(localStorage.getItem('bxm-navbar') || themeConfig.navbar));
        dispatch(toggleLocale(localStorage.getItem('bxm-i18nextLng') || themeConfig.locale));
        dispatch(toggleSemidark(localStorage.getItem('bxm-semidark') || themeConfig.semidark));
    }, [dispatch, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.locale, themeConfig.semidark]);

    return (
        <div
            className={`${(store.getState().themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${
                themeConfig.rtlClass
            } main-section antialiased relative font-nunito text-sm font-normal`}
        >
            {children}
        </div>
    );
}

export default App;
