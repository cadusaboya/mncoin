import Image from 'next/image';

const Location = () => {
  return (
    <div>
        <h1 className=" text-4xl text-center font-extrabold text-gray-600 my-5">Location</h1>
        <div className="flex flex-col px-4 lg:px-24 lg:flex-row ">
            <div className="flex-1">
                <h1 className=" text-xl font-extrabold text-gray-600">Marabá</h1>
                <p className="mt-1 text-gray-600">
                Located in Pará, Brazil, is a vibrant city known for its strategic location at the confluence of the Tocantins and Itacaiunas rivers. It serves as a major commercial and industrial hub in the region, with a strong emphasis on agriculture, mining, and steel production.
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
                <h1 className="text-xl font-extrabold text-gray-600 pt-10 lg:pt-36 lg:ml-12">Strategic Position</h1>
                <p className="mt-1 text-gray-600 lg:ml-12">
                Overall, Marabá's strategic location enhances Carbomil's capacity to be a leading manganese ore mining and export company, promising significant economic benefits and a competitive edge in the global market.
                </p>
            </div>
        </div>
    </div>

  );
};

export default Location;