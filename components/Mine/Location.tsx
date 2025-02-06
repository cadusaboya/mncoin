import Image from 'next/image';

const Location = () => {
  return (
    <div className="pt-32">
        <h1 className=" text-4xl text-center font-serif text-white py-10">Location</h1>
        <div className="flex flex-col px-4 lg:px-24 lg:flex-row">
            <div className="flex-1">
                <h1 className=" text-xl font-serif text-white">Marabá</h1>
                <p className="mt-1 text-gray-100 opacity-75">
                Located in Pará, Brazil, at the heart of the Amazon Forest, is a city known for its strategic location at the confluence of the Tocantins and Itacaiunas rivers. It serves as a major commercial and industrial hub in the region, with a strong emphasis on agriculture, mining, and steel production.
                </p>
            </div>
            <div className="flex-1 flex justify-center mt-5 lg:mt-0">
                <Image
                    src="/location.jpg"
                    alt="Roadmap Image"
                    height={600}
                    width={600}
                    className="rounded-full"
                />
            </div>
            <div className="flex-1 flex flex-col justify-end">
                <h1 className="text-xl font-serif text-white pt-10 lg:pt-36 lg:ml-12">Strategic Position</h1>
                <p className="mt-1 text-gray-100 opacity-75 lg:ml-12">
                    Eagle benefits from a prime logistical position with access to Carajás Railway, highways, and ports, ensuring efficient global exports. The region’s hydroelectric power and skilled workforce reduce operational costs, enhancing scalability and profitability. This strategic location positions Eagle as a key manganese supplier, maximizing efficiency, competitiveness, and economic impact.
                </p>
            </div>
        </div>
    </div>

  );
};

export default Location;