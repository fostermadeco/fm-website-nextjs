import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from './Logo';

type MainNavPropTypes = {
    mode?: 'dark' | 'light';
};

const MainNav = (props: MainNavPropTypes) => {
    const { mode = 'dark' } = props;
    const router = useRouter();

    const textColor = mode === 'light' ? 'text-white' : 'text-black';
    const borderColor = mode === 'light' ? 'after:bg-white' : 'after:bg-black';

    return (
        <header className="container relative">
            <div className="absolute top-0 z-50 w-full">
                <div className="py-8 ">
                    <div className="grid grid-cols-14">
                        <div className="col-span-3 col-start-2">
                            <Link href="/">
                                <a className="block group">
                                    <Logo mode={mode} />
                                </a>
                            </Link>
                        </div>
                        <div className="flex items-center justify-end col-span-9">
                            <nav className="">
                                <ul className="flex">
                                    <li className="px-3">
                                        <Link href="/why-foster-made">
                                            <a
                                                className={`${
                                                    router.pathname.startsWith('/why-foster-made') ? 'after:w-full' : ''
                                                } ${textColor} ${borderColor} pb-1 h5 border-b-in`}
                                            >
                                                Why Foster Made?
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="px-3">
                                        <Link href="/expertise">
                                            <a
                                                className={`${
                                                    router.pathname.startsWith('/expertise') ? 'after:w-full' : ''
                                                } ${textColor} ${borderColor} pb-1 h5 border-b-in`}
                                            >
                                                Expertise
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="px-3">
                                        <Link href="/case-studies">
                                            <a className={`${textColor} ${borderColor} pb-1 h5 border-b-in`}>
                                                Case Studies
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="px-3">
                                        <Link href="/company">
                                            <a
                                                className={`${
                                                    router.pathname.startsWith('/company') ? 'after:w-full' : ''
                                                } ${textColor} ${borderColor} pb-1 h5 border-b-in`}
                                            >
                                                Company
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="px-3">
                                        <Link href="/contact">
                                            <a
                                                className={`${
                                                    router.pathname.startsWith('/contact') ? 'after:w-full' : ''
                                                } ${textColor} ${borderColor} pb-1 h5 border-b-in`}
                                            >
                                                Contact Us
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>😱</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <a href="#mobile-menu" className="hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="48"
                            viewBox="0 0 48 48"
                            width="48"
                            className="svg replaced-svg"
                        >
                            <path d="m6 36h36v-4h-36zm0-10h36v-4h-36zm0-14v4h36v-4z" fill="#232628" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default MainNav;
