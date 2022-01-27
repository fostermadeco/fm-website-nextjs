import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const year = new Date().getFullYear();
const Footer = () => {
    console.log('footer');

    return (
        <div className="bg-black ">
            <div className="pt-20 pb-10">
                <div className="block grid-cols-1 grid-rows-2 gap-0 mx-6 md:grid md:gap-8 md:mx-0 md:grid-rows-1 md:grid-cols-14">
                    <div className="col-span-1 md:col-span-5 md:col-start-2 lg:col-start-2 lg:col-span-6 ">
                        <div className="w-60">
                            <Logo mode="light" />
                        </div>
                        <ul className="mt-8 mb-8 leading-relaxed text-white md:mb-0">
                            <li>
                                <li>404 E Grace St</li>
                                <li>Richmond, VA 22319</li>
                                <li>&nbsp;</li>
                                <li>hello@fostermade.co</li>
                                <li>804.291.3999</li>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-2 mb-10 text-white md:col-span-2 md:mb-0">
                        <h5 className="mb-3 text-white overline h5">Services</h5>
                        <ul className="space-y-2 text-sm leading-tight lg:text-base">
                            <li>
                                <Link href="#">
                                    <a>Strategy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Design</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Development</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Retained Services</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-start-2 mt-2 mb-10 text-white md:col-span-2 md:mb-0">
                        <h5 className="text-white overline h5">Solutions</h5>
                        <ul className="space-y-2 text-sm leading-tight lg:text-base">
                            <li>
                                <Link href="#">
                                    <a>Websites</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Ecommerce</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Custom Software</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Search & Discovery</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Mobile Applications</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-2 text-white md:col-span-3 lg:col-span-3 xl:col-span-2">
                        <h5 className="text-white overline h5">Foster Made</h5>
                        <ul className="space-y-2 text-sm leading-tight lg:text-base">
                            <li>
                                <Link href="#">
                                    <a>Why Foster Made?</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/company">
                                    <a>Company</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Team</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Journal</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Case Studies</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-14">
                    <div className="col-span-12 col-start-2">
                        <p className="py-8 text-white">Icons</p>
                    </div>
                </div>
                <div className="grid grid-cols-14">
                    <div className="col-span-12 col-start-2 border-t border-white">
                        <div className="md:flex md:justify-between">
                            <div>
                                <p className="py-6 text-xs text-white">
                                    &copy;Copyright {year}. All Rights Reserved. Made with &#9825; in Richmond, VA.
                                </p>
                            </div>
                            <div>
                                <ul className="py-2 text-xs text-right text-white md:py-6">
                                    <li className="inline">
                                        <Link href="#">
                                            <a className="block pb-1 lg:inline md:mb-0">Accessibility Statement</a>
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link href="#">
                                            <a className="block pb-1 lg:inline lg:pl-4 md:mb-0">Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link href="#">
                                            <a className="block pb-1 lg:inline lg:pl-4 md:mb-0">Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
