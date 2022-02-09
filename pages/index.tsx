import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>Foster Made</title>
            <meta
                name="description"
                content="We're a web development agency based in Richmond, Virginia that has been powering the web's pixels for over a decade."
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className="h1">Foster Made</h1>

            <ul className="mt-8">
                <li>
                    <Link href="/expertise">
                        <a className="h4">
                            <h2>Expertise &rarr;</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/company">
                        <a className="h4">
                            <h2>Company &rarr;</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/company/values">
                        <a className="h4">
                            <h2>Values &rarr;</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/company/careers">
                        <a className="h4">
                            <h2>Careers &rarr;</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/expertise/service/research-and-discovery">
                        <a className="h4">
                            <h2>Service - Research & Discovery &rarr;</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/expertise/industry/arts-culture">
                        <a className="h4">
                            <h2>Industry - Arts & Culture &rarr;</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/expertise/technology/algolia">
                        <a className="h4">
                            <h2>Technology - Algolia &rarr;</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/styleguide">
                        <a className="h4">
                            <h2>Styleguide &rarr;</h2>
                        </a>
                    </Link>
                </li>
            </ul>
        </main>
    </div>
);

export default Home;
