import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa'; // Import the GitHub icon from react-icons

const Founders = () => {
    return (
        <div className="pb-2 pt-5 mx-8 flex flex-col items-center">
            <h1 className="flex justify-center text-4xl md:text-4xl font-extrabold text-purple-900">Meet the Team</h1>
            <div className="flex flex-col md:flex-row items-stretch justify-center space-y-5 md:space-y-0 md:space-x-5 px-4 md:px-12 xl:px-36 mt-5">
                <div className="flex-1 p-5 rounded-full border-4 border-purple-900 flex flex-col items-center">
                    <Image
                        src="/my-img.jpeg"
                        alt="Roadmap Image"
                        height={100}
                        width={150}
                        className="rounded-full border-2 border-purple-900"
                    />
                    <h1 className="text-2xl text-center font-extrabold text-purple-900">Carlos Saboya</h1>
                    <h1 className="text-l text-center font-extrabold text-purple-900">Founder / Dev</h1>
                    <a href="https://www.linkedin.com/in/carlossaboya/" target="_blank" rel="noopener noreferrer" className="mr-1"><FaLinkedin color="#0072B1" className="w-6 h-6" /></a>
                    <p className="text-xl mt-4 text-purple-800 text-center px-2 mb-5">
                    Been around Web3 for the past 3 years. I am a software engineer and own 2 other companies, decided this year to finally build something in web3
                    </p>
                </div>
                <div className="flex-1 p-5 rounded-full border-4 border-purple-900 flex flex-col items-center">
                    <Image
                        src="/fabian.jpg"
                        alt="Fabian"
                        width={150}
                        height={150}
                        className="rounded-full border-2 border-purple-900"
                    />
                    <h1 className="text-2xl text-center font-extrabold text-purple-900">Fabian Stradella</h1>
                    <h1 className="text-l text-center font-extrabold text-purple-900">Founder / Mine Owner</h1>
                    <p className="text-xl mt-10 text-purple-800 text-center px-2 mb-5">
                        Argentinian living in Brazil for the past 27 years. Has been in the mining industry for 9 years and owner of Eagle, mine to be tokenized
                    </p>
                </div>
                <div className="flex-1 p-5 rounded-full border-4 border-purple-900 flex flex-col items-center">
                    <Image
                        src="/engCons.jpeg"
                        alt="Roadmap Image"
                        width={150}
                        height={150}
                        className="rounded-full border-2 border-purple-900"
                    />
                    <h1 className="text-2xl text-center font-extrabold text-purple-900">Rafael Souza</h1>
                    <h1 className="text-l text-center font-extrabold text-purple-900">Environmental Consultant</h1>
                    <p className="text-xl mt-10 text-purple-800 text-center px-2 mb-5">
                        Specialized in Geoprocessing Applications and Evaluation, Expertise, and Auditing of Engineering Works with over 10 years of experience in mining.
                    </p>
                </div>
                <div className="flex-1 p-5 rounded-full border-4 border-purple-900 flex flex-col items-center">
                    <Image
                        src="/bCruz.png"
                        alt="Roadmap Image"
                        width={150}
                        height={150}
                        className="rounded-full border-2 border-purple-900"
                    />
                    <h1 className="text-2xl text-center font-extrabold text-purple-900">Bruno Cruz</h1>
                    <h1 className="text-l text-center font-extrabold text-purple-900">Geologist</h1>
                    <p className="text-xl mt-10 text-purple-800 text-center px-2 mb-5">
                    Specialist in Mineral Resources with 2 MBAs in Project Management and Production Engineering
                    </p>
                </div>
            </div>
        </div>
    );
  };
  
  export default Founders;