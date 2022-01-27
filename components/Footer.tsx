import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const year = new Date().getFullYear();
const Footer = () => {
    console.log('footer');

    return (
        <div className="bg-black ">
            <div className="pt-20 pb-10">
                <div className="grid grid-cols-14">
                    <div className="col-span-6 col-start-2">
                        <Logo mode="light" />
                        <ul className="mt-8 leading-relaxed text-white">
                            <li>
                                <li>404 E Grace St</li>
                                <li>Richmond, VA 22319</li>
                                <li>&nbsp;</li>
                                <li>hello@fostermade.co</li>
                                <li>804.291.3999</li>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 text-white">
                        <h5 className="mb-3 text-white overline h5">Services</h5>
                        <ul className="text-base leading-relaxed">
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
                    <div className="col-span-2 text-white">
                        <h5 className="text-white overline h5">Solutions</h5>
                        <ul className="text-base leading-relaxed">
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
                    <div className="col-span-3 text-white">
                        <h5 className="text-white overline h5">Foster Made</h5>
                        <ul className="text-base leading-relaxed">
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
                        <div className="flex justify-between">
                            <div>
                                <p className="py-6 text-xs text-white">
                                    &copy;Copyright {year}. All Rights Reserved. Made with &#9825; in Richmond, VA.
                                </p>
                            </div>
                            <div>
                                <p className="py-6 text-xs text-white">
                                    <Link href="#">
                                        <a className="pl-4">Accessibility Statement</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="pl-4">Privacy Policy</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="pl-4">Terms & Conditions</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
