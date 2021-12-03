import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex justify-between w-11/12 m-auto pb-1 pt-2">
                <div>
                    <p className="text-sm mb-1 capitalize">Remaining Days to my Trip</p>
                    <div className="flex -ml-2">
                        <div className="flex-col text-center w-8 sm:w-10">
                            <h2 className={styles.pFlexT}>10</h2>
                            <p className={styles.txtSpan}>Weeks</p>
                        </div>
                        <div className="flex-col text-center w-8 sm:w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Days</p>
                        </div>
                        <div className="flex-col text-center w-8 sm:w-10">
                            <h2 className={styles.pFlexT}>45</h2>
                            <p className={styles.txtSpan}>Hours</p>
                        </div>
                        <div className="flex-col text-center w-8 sm:w-10">
                            <h2 className={styles.pFlexT}>25</h2>
                            <p className={styles.txtSpan}>Minutes</p>
                        </div>
                        <div className="flex-col text-center w-8 sm:w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className="flex text-xs sm:text-sm items-center py-5">
                    <p>My Trips</p>
                    <div className="flex items-center">
                        <div className="border-r-2 opacity-50 h-5 mx-2 sm:mx-4"></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <span className="ml-1">EN ( S )</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500"></div>
            <div className="flex flex-col md:flex-row px-4 pt-4 pb-20 sm:px-14 sm:py-4">
                <div className="w-40 sm:min-w-max">
                    <h1 className="font-bold text-xl font-serif py-1">Six Days In Dubai</h1>
                    <ul className="flex md:flex-col min-w-max">
                        <li className="w-8 h-8 mr-2 md:mr-0 flex items-center justify-center">
                            FEB
                        </li>
                        <li className="bg-opacity-50 bg-black text-yellow-300 w-8 h-8 rounded-full flex items-center justify-center border-yellow-300 border-2 text-sm font-bold font-mono">
                            15
                        </li>
                        <li className="w-8 h-8 flex items-center justify-center text-xs">16</li>
                        <li className="w-8 h-8 flex items-center justify-center text-xs">17</li>
                        <li className="w-8 h-8 flex items-center justify-center text-xs">18</li>
                        <li className="w-8 h-8 flex items-center justify-center text-xs">19</li>
                        <li className="w-8 h-8 flex items-center justify-center text-xs">20</li>
                    </ul>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="flex justify-center items-center flex-col max-w-md">
                        <div className="flex pt-16 w-full justify-between">
                            <div className="rounded-full w-20 flex items-center justify-center bg-white pl-2">
                                <Image
                                    src={`/logo.png`}
                                    placeholder="blur"
                                    alt={'logo'}
                                    width="64"
                                    height="64"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="text-center border border-white max-w-max h-20 overflow-hidden">
                                <h1 className="head-t font-bold font-mono tracking-wide px-3">
                                    HILTON HOTEL
                                </h1>
                                <h2 className="bg-white flex justify-center items-center text-black px-2 text-base sm:text-xl h-8">
                                    POWERED BY TRAVEL JINNI
                                </h2>
                            </div>
                        </div>
                        <div className="max-w-full  text-center border-white border mt-2 pt-8 px-4 bg-gray-400 bg-opacity-10 blur-filter rounded-md">
                            <h1 className="text-3xl sm:text-5xl font-serif font-bold pb-5 px-4">
                                Your Trip Awaits You!
                            </h1>
                            <p className="text-sm pb-5">
                                We have taken some time to help plan your trip to make it a
                                memmorable one. Access your calender for even more things you can do
                                on your trip.
                            </p>
                            <button className="bg-yellow-300 w-full border-black border-2 text-black font-bold py-2 mb-5">
                                ACCESS CALENDAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
