// components/Goals.jsx (Versão 3.0 - Design Limpo e de Alto Contraste)
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaMountain, FaLock, FaChartLine } from 'react-icons/fa';

const features = [
{
  icon: <FaMountain size={28} />,
  title: "Scalable Mine Pool Access",
  description: "Stake your tokens and earn revenue share from one or more mine pools available across the MnToken ecosystem.",
},
{
  icon: <FaLock size={28} />,
  title: "Transparent and Secure Framework",
  description: "Every mine operation is documented on-chain. With full traceability and smart contracts, your investments are secured and transparently managed.",
},
{
  icon: <FaChartLine size={28} />,
  title: "Real Returns from Real Assets",
  description: "MnToken transforms manganese production into blockchain-based income. Earn from actual ore extraction, with options to auto-sell or hold for appreciation.",
},
];

const Goals = () => {
return (
  // Fundo da secção com o roxo sólido que você gostou
  <section className="bg-purple-950 text-white px-6 md:px-16">
    <div className="container mx-auto text-center">
      
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
        Join the Exclusive Mining Sector
      </h2>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        Unlock the potential of real-world assets. MnToken bridges the gap between traditional mining and decentralized finance.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {features.map((feature, index) => (
          // A MUDANÇA ESTÁ AQUI: Voltamos a um fundo sólido para os cards
          <Card 
            key={index} 
            className="bg-gray-900 border-gray-800 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300"
          >
            <CardHeader>
              <div className="bg-purple-900/50 text-purple-300 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <a
          href="https://mntoken.xyz/buy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-black px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
            Start Earning Now
          </button>
        </a>
      </div>

    </div>
  </section>
 );
};

export default Goals;
