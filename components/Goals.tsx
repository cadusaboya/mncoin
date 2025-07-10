import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { GrMoney } from "react-icons/gr";
  import { BsMinecartLoaded } from "react-icons/bs";
  import { TbMoneybag } from "react-icons/tb";
  import { AiOutlineRise } from "react-icons/ai";
  import { TbReportSearch } from "react-icons/tb";
  import { FaMountain, FaLock, FaChartLine } from 'react-icons/fa'



const Goals = () => {
  return (
    <section className="text-white px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-12">
          <h2 className="text-4xl font-serif md:text-5xl mb-6 md:mb-12">
            Join the Exclusive <br /> Mining Sector
          </h2>
          <hr className="border-t border-black my-12" />
          <div className="flex mb-24">
            <a
            href="https://tx4o9.share.hsforms.com/2guHvYugEQRCbrbASBheHLA"
            target="_blank"
            rel="noopener noreferrer"
            >
                <button className="bg-white shadow-lg text-black px-8 py-3 rounded-md hover:bg-gray-300 transition">
                    Join Now
                </button>
            </a>

          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Scalable Mining Pools */}
          <div className="flex flex-col items-start gap-4">
            <FaMountain className="text-grey-800 text-6xl" />
            <h3 className="text-2xl">Scalable mine pool <br /> access</h3>
            <p className="text-gray-300 pr-12">
            Stake your tokens and earn revenue share from one or more mine pools available across the Orebit ecosystem.
            </p>
          </div>

          {/* Transparent and Secure */}
          <div className="flex flex-col items-start gap-4">
            <FaLock className="text-grey-800 text-6xl" />
            <h3 className="text-2xl">Transparent and secure<br />  framework</h3>
            <p className="text-gray-300 pr-12">
              Every mine operation is documented on-chain. With full traceability and smart contracts, 
              your investments are secured and transparently managed.
            </p>
          </div>

          {/* Real Returns from Real Assets */}
          <div className="flex flex-col items-start gap-4">
            <FaChartLine className="text-grey-800 text-6xl" />
            <h3 className="text-2xl">Real returns from <br /> real assets</h3>
            <p className="text-gray-300 pr-12">
              Orebit transforms manganese production into blockchain-based income. 
              Earn from actual ore extraction, with options to auto-sell or hold for appreciation.
            </p>
          </div>
        </div>
    </section>
  );
};

export default Goals;