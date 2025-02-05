import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
    {
        name: "Carlos Saboya",
        role: "Founder / Dev",
        img: "/my-img.jpeg",
        linkedin: "https://www.linkedin.com/in/carlossaboya/",
        description: "Been around Web3 for the past 3 years. I am a software engineer and own 2 other companies, decided this year to finally build something in Web3."
    },
    {
        name: "Fabian Stradella",
        role: "Founder / Eagle Owner & CEO",
        img: "/fabian.jpg",
        description: "Argentinian living in Brazil for the past 27 years. Has been in the mining industry for 9 years and owner of Eagle, mine to be tokenized."
    },
    {
        name: "Rafael Souza",
        role: "Environmental Consultant",
        img: "/engCons.jpeg",
        description: "Master in Geoprocessing Applications and Evaluation, Expertise, and Auditing of Engineering Works with over 10 years of experience in mining."
    },
    {
        name: "Bruno Cruz",
        role: "Geologist",
        img: "/bCruz.png",
        description: "Specialist in Mineral Resources with 2 MBAs in Project Management and Production Engineering."
    },
    {
        name: "Rafaella Machado",
        role: "Head of Legal Dept.",
        img: "/rafaNahum.png",
        description: "Lawyer and licensed administrator in Foreign Trade with 24 years of experience."
    }
];

const Founders = () => {
    return (
        <div className="pb-2 pt-5 mx-8 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-purple-900">Meet the Team</h1>

            {/* Grid Layout with Centered Rows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12 xl:px-36 mt-5 mx-auto">
                {teamMembers.slice(0, 3).map((member, index) => (
                    <div key={index} className="flex flex-col items-center p-5 border-4 border-purple-900 flex-1 h-full min-h-[320px]">
                        <Image src={member.img} alt={member.name} width={120} height={120} className="rounded-full border-2 border-purple-900" />
                        <h1 className="text-xl text-center font-extrabold text-purple-900 mt-2">{member.name}</h1>
                        <h2 className="text-sm text-center font-semibold text-purple-900">{member.role}</h2>
                        {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
                                <FaLinkedin color="#0072B1" className="w-5 h-5" />
                            </a>
                        )}
                        <p className="text-sm mt-3 text-purple-800 text-center px-2 text-justify">
                            {member.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Centered Second Row (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 px-4 md:px-48 xl:px-96 mt-5 mx-auto">
                {teamMembers.slice(3, 5).map((member, index) => (
                    <div key={index} className="flex flex-col items-center p-5 border-4 border-purple-900 flex-1 h-full min-h-[320px]">
                        <Image src={member.img} alt={member.name} width={120} height={120} className="rounded-full border-2 border-purple-900" />
                        <h1 className="text-xl text-center font-extrabold text-purple-900 mt-2">{member.name}</h1>
                        <h2 className="text-sm text-center font-semibold text-purple-900">{member.role}</h2>
                        <p className="text-sm mt-3 text-purple-800 text-center px-2 text-justify">
                            {member.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Founders;
