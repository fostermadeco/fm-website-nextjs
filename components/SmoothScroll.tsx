import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

// if smooth scroll is enabled on html in css, it smooth scrolls in between pages
// might be fine, but this allows only for smooth scrolling on hash changes
export const SmoothScroll: FC = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const html = document.documentElement;
        let scrollTimeout: number;

        const debouncedRemoveSmoothScroll = () => {
            clearTimeout(scrollTimeout);

            scrollTimeout = window.setTimeout(() => {
                html.style.removeProperty('scroll-behavior');
            }, 100);
        };

        const handleHashChangeStart = () => {
            html.style.setProperty('scroll-behavior', 'smooth', 'important');
            debouncedRemoveSmoothScroll();
        };

        const handleRouteChangeStart = () => {
            html.style.removeProperty('scroll-behavior');
        };

        const handleScroll = () => {
            debouncedRemoveSmoothScroll();
        };

        router.events.on('hashChangeStart', handleHashChangeStart);
        router.events.on('routeChangeStart', handleRouteChangeStart);

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            clearTimeout(scrollTimeout);
            router.events.off('hashChangeStart', handleHashChangeStart);
            router.events.off('routeChangeStart', handleRouteChangeStart);
            window.removeEventListener('scroll', handleScroll);
            html.style.removeProperty('scroll-behavior');
        };
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
