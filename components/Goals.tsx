import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { FaBurn } from "react-icons/fa";
  import { BsMinecartLoaded } from "react-icons/bs";
  import { TbMoneybag } from "react-icons/tb";
  import { AiOutlineRise } from "react-icons/ai";
  import { TbReportSearch } from "react-icons/tb";



const Goals = () => {
  return (
    <div className=" pb-2 pt-5 mx-8">
        <h1 className="flex justify-center text-4xl md:text-4xl font-extrabold text-purple-900">How does it work?</h1>
        <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-10 px-4 md:px-44 mt-5">
            <div className="flex-1">
            <Card>
                <CardHeader>
                    <CardTitle><BsMinecartLoaded className="w-8 h-8" /></CardTitle>
                    <CardDescription>Mine</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Our Ore Mine has a capacity to mine in average 5 thousand tons of Manganese Ore per month. </p>
                </CardContent>
            </Card>
            </div>
            <div className="flex-1">
            <Card>
                <CardHeader>
                    <CardTitle><TbMoneybag color="#ebeb1f" className="w-8 h-8" /></CardTitle>
                    <CardDescription>Sell</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>We sell our ore mined to the local and the international market. We&apos;ll use our hub to accelerate sales.</p>
                </CardContent>
            </Card>
            </div>
            <div className="flex-1">
            <Card>
                <CardHeader>
                    <CardTitle><AiOutlineRise className="w-8 h-8" /></CardTitle>
                    <CardDescription>Buybacks</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>We use 100% of the profit to buy tokens using a strategy to avoid market manipulation.</p>
                </CardContent>
            </Card>
            </div>
            <div className="flex-1">
            <Card>
                <CardHeader>
                    <CardTitle><FaBurn color="#ff0000" className="w-8 h-8" /></CardTitle>
                    <CardDescription>Burn</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>We burn 100% of the tokens bought on buybacks, increasing the value per token in a never ending cycle</p>
                </CardContent>
            </Card>
            </div>
            <div className="flex-1">
            <Card>
                <CardHeader>
                    <CardTitle><TbReportSearch className="w-8 h-8" /></CardTitle>
                    <CardDescription>Reports</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>We publish biweekly reports on our discord and social media to keep investors informed.</p>
                </CardContent>
            </Card>
            </div>
        </div>
    </div>
  );
};

export default Goals;