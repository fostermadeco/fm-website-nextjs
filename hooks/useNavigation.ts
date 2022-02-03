import { TypePage } from '@types';
import { getLinkToForPage } from 'lib/routes';
import { useRouter } from 'next/router';
import { UrlObject } from 'url';

declare type Url = string | UrlObject;
interface LinkProps {
    href: string;
    as: string;
}

const normalizePath = (path: string | Url) => {
    // eslint-disable-next-line no-nested-ternary
    const text = typeof path === 'string' ? path : path.pathname;
    // strip query params & trailing slashes
    return text ? text.replace(/\?.*/, '').replace(/\/$/, '') : text;
};

const useNavigation = () => {
    const { asPath: currentPath, route } = useRouter();

    const linkTo = (page: TypePage) => getLinkToForPage({ page });

    const linkToPath = (url: string): LinkProps => ({
        href: `/${url}`,
        as: `/${url}`,
    });

    const isActive = (page: TypePage) => {
        const active = normalizePath(currentPath);
        const target = normalizePath(linkTo(page).as);

        return target === active;
    };

    return { currentPath, route, linkTo, linkToPath, isActive };
};

export default useNavigation;
