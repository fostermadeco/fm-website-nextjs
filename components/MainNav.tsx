import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type MainNavPropTypes = {
    mode?: 'dark' | 'light';
};

const MainNav = (props: MainNavPropTypes) => {
    const { mode = 'dark' } = props;
    const router = useRouter();

    const logoFill = mode === 'light' ? 'fill-white' : 'fill-black';
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="49"
                                        viewBox="0 0 324 49"
                                        width="324"
                                        className="svg replaced-svg"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                className={`${logoFill} transition duration-300 ease-in-out group-hover:fill-lime`}
                                                d="m0 15.6185133h2.72853828v-5.6100982h7.73085852v-2.69284708h-7.73085852v-4.03927068h8.18561482v-2.69284713h-10.9141531zm24.1703016-15.43899016c-5.275174 0-7.8672854 3.9943899-7.8672854 7.94389902 0 3.97194954 2.4784223 7.78681624 7.8672854 7.78681624 5.3661253 0 7.7990719-3.9046283 7.8445476-7.80925663.0227378-3.92706873-2.5921114-7.92145863-7.8445476-7.92145863zm0 13.12762976c-3.5925754 0-4.9568445-2.6479664-5.025058-5.13884995-.0682134-2.53576438 1.4097448-5.40813465 5.025058-5.40813465s5.0477958 2.84992988 5.0023202 5.38569425c-.0454756 2.49088355-1.4097448 5.16129035-5.0023202 5.16129035zm20.1229699-6.95652176c-1.8417634-.22440393-3.4106729-.58345021-3.4106729-1.88499299 0-1.12201964 1.0232019-1.99719495 3.1605569-1.99719495 1.6598607 0 3.0923433.80785414 3.6153132 1.68302945l2.2965197-1.16690042c-1.1596288-2.33380084-3.6153132-2.98457223-6.0027842-2.98457223-2.8194896.02244039-5.911833 1.30154278-5.911833 4.39831697 0 3.3884993 2.887703 4.19635344 6.0027843 4.57784011 2.0236658.22440393 3.5470997.80785414 3.5470997 2.22159892 0 1.6381486-1.7053364 2.2664796-3.5243619 2.2664796-1.8645012 0-3.6153133-.7405329-4.2974478-2.401122l-2.4102088 1.2342216c1.1368909 2.7601683 3.5470997 3.7026648 6.6621809 3.7026648 3.4106729 0 6.412065-1.4361851 6.412065-4.802244 0-3.63534366-2.9559165-4.46563819-6.1392111-4.84712486zm11.6417633-3.29873773h4.774942v12.56661989h2.9559165v-12.56661989h4.774942v-2.4684432h-12.5058005zm18.4176334 12.56661989h11.3689095v-2.917251h-8.6403712v-3.36605893h8.412993v-2.69284713h-8.412993v-3.3660589h8.6403712v-2.69284713h-11.3689095zm31.0143848-10.14305748c0-2.60308555-1.932714-4.98176718-5.5252897-5.00420757-2.4329466 0-4.7976798-.0224404-7.2988399-.0224404v15.16970545h2.9559165v-5.1612903h2.7740139l4.4566122 5.1612903h3.456149v-.2468443l-4.638515-5.1388499c2.887703-.58345024 3.819953-2.67040676 3.819953-4.75736328zm-9.8682131 2.51332398v-4.93688639h4.3883991c1.819026 0 2.614849 1.25666199 2.614849 2.4684432 0 1.2117812-.795823 2.46844319-2.614849 2.46844319zm33.0835271-.9200561-4.774942-6.48527349h-3.296984v15.03506309h2.955916v-10.9957924l4.774942 6.5077139h.568446l4.888631-6.48527351v10.97335201h2.955916v-15.03506309h-3.274246zm20.509512-6.48527349-6.844083 15.03506309h3.115081l1.318794-2.917251h7.980974l1.296056 2.917251h3.137819l-6.844084-15.03506309zm-1.273318 9.42496489 2.842228-6.41795227 2.842227 6.41795227zm22.715082-9.42496489h-5.911833v15.03506309h5.911833c5.343387 0 7.70812-3.8373071 7.639907-7.65217389-.068214-3.72510519-2.410209-7.3828892-7.639907-7.3828892zm0 12.34221599h-3.183295v-9.64936886h3.183295c3.319721 0 4.706728 2.35624123 4.774942 4.69004207.068213 2.46844319-1.296056 4.95932679-4.774942 4.95932679zm25.466357-9.64936886v-2.69284713h-11.36891v15.03506309h11.36891v-2.917251h-8.640371v-3.36605893h8.412993v-2.69284713h-8.412993v-3.3660589z"
                                                fill="#232628"
                                                fillRule="nonzero"
                                                transform="translate(128 16)"
                                            />
                                            <path
                                                className={`${logoFill} transition duration-300 ease-in-out group-hover:fill-lime `}
                                                d="m25.7748617 20.5480304c-4.0255717 0-7.2887221 3.2791417-7.2887221 7.3237612 0 4.0449238 3.2631504 7.3237613 7.2887221 7.3237613 4.0252688 0 7.2887221-3.2788375 7.2887221-7.3237613 0-4.0446195-3.2634533-7.3237612-7.2887221-7.3237612zm0-5.9005079c4.0252688 0 7.2887221-3.2791417 7.2887221-7.32376125 0-4.0449238-3.2634533-7.32376125-7.2887221-7.32376125-4.0255717 0-7.2887221 3.27883745-7.2887221 7.32376125 0 4.04461955 3.2631504 7.32376125 7.2887221 7.32376125zm-25.7748617 34.0461191h12.7171124v-48.3747939h-12.7171124z"
                                                fill="#232628"
                                            />
                                            <path
                                                d="m56.7151746.60115607-23.0504347 48.09248553h13.8503811l23.0507369-48.09248553zm3.9083536 48.09248553h13.8503812l16.8376116-34.9272432v34.9272432h12.688479v-48.09248553h-20.3257349z"
                                                fill="#cbd843"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        <div className="flex items-center justify-end col-span-9">
                            <nav className="">
                                <ul className="flex">
                                    <li className="px-3">
                                        <Link href="/case-studies">
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
                                            <a className={`${textColor} ${borderColor} pb-1 h5 border-b-in`}>
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
