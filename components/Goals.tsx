

const Goals = () => {
  return (
    <div className="bg-purple-200 md:rounded-full pb-10 pt-5 mx-8 border-2 border-purple-900">
        <h1 className="flex justify-center text-4xl md:text-4xl font-extrabold text-purple-900">How does it work?</h1>
        <div className="flex flex-col md:flex-row items-stretch justify-between space-y-5 md:space-y-0 md:space-x-5 px-4 md:px-24 mt-5">
            <div className="flex-1 bg-white p-5 rounded-lg border-2 border-purple-900">
                <h1 className="text-2xl font-extrabold text-purple-900">Mine</h1>
                <p className="text-xl mt-2 text-purple-800 text-justify">
                    Our Ore Mine has a capacity to mine in average X tons of Manganese Ore per month. Learn more about our mine here.
                </p>
            </div>
            <div className="flex-1 bg-white p-5 rounded-lg border-2 border-purple-900">
                <h1 className="text-2xl font-extrabold text-purple-900">Sell</h1>
                <p className="text-xl mt-2 text-purple-800 text-justify">
                    We sell our Manganese mined to the local and the international market. Our goal is for our hub to be the first place where buyers look to accelerate sales.
                </p>
            </div>
            <div className="flex-1 bg-white p-5 rounded-lg border-2 border-purple-900">
                <h1 className="text-2xl font-extrabold text-purple-900">Buybacks</h1>
                <p className="text-xl mt-2 text-purple-800 text-justify">
                    We use 100% of the profit to buy tokens using a strategy to avoid market manipulation and burn them.
                </p>
            </div>
            <div className="flex-1 bg-white p-5 rounded-lg border-2 border-purple-900">
                <h1 className="text-2xl font-extrabold text-purple-900">Reports</h1>
                <p className="text-xl mt-2 text-purple-800 text-justify">
                    We publish biweekly reports on our discord and social media to keep investors informed.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Goals;