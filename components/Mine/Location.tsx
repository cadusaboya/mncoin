import Image from 'next/image';

const Location = () => {
  return (
    <div>
        <h1 className=" text-4xl text-center font-extrabold text-gray-600 mt-5">Location</h1>
        <div className="flex flex-col lg:flex-row mt-10">
            <div className="flex-1 ml-32">
                <h1 className=" text-xl font-extrabold text-gray-600 mt-20">Marabá</h1>
                <p className="mt-1 text-gray-600 pr-24">
                Located in Pará, Brazil, is a vibrant city known for its strategic location at the confluence of the Tocantins and Itacaiunas rivers. It serves as a major commercial and industrial hub in the region, with a strong emphasis on agriculture, mining, and steel production.
                </p>
            </div>
            <div className="flex-1 px-8 mt-5">
                <Image
                    src="/location.jpg"
                    alt="Roadmap Image"
                    height={600}
                    width={600}
                    className="rounded-full"
                />
            </div>
            <div className="flex-1 px-24 mt-40">
                <h1 className=" text-xl font-extrabold text-gray-600 pt-36">Strategic Position</h1>
                <p className="mt-1 text-gray-600">
                Overall, Marabá's strategic location enhances Carbomil's capacity to be a leading manganese ore mining and export company, promising significant economic benefits and a competitive edge in the global market.
                </p>
            </div>
        </div>
    </div>

  );
};

export default Location;