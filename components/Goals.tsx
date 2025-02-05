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
                    <p className="text-justify">Our operations can mine in average 5,000 metric tons of Manganese Ore per month for the next 50 years. </p>
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
                <p className="text-justify h-36">We sell monthly to the local and international market. We&apos;ll accept $MNT or USD as payment.</p>
                </CardContent>
            </Card>
            </div>
            <div className="flex-1">
            <Card>
                <CardHeader>
                    <CardTitle><GrMoney color="#ff0000" className="w-8 h-8" /></CardTitle>
                    <CardDescription>Burn & Profit</CardDescription>
                </CardHeader>
                <CardContent>
                <p className="text-justify">We burn 100% of the tokens received from sales, increasing the value per token or share the profits with token holders</p>
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
                <p className="text-justify h-36">We publish biweekly reports on our discord and social media to keep investors informed.</p>
                </CardContent>
            </Card>
            </div>
            <div className="flex-1">
            <Card>
                <CardHeader>
                    <CardTitle><AiOutlineRise className="w-8 h-8" /></CardTitle>
                    <CardDescription>Scale</CardDescription>
                </CardHeader>
                <CardContent>
                <p className="text-justify"> We can scale our operations to up monthly production or search for new deposits in Eagle&apos;s vast 3,000-ha area. </p>
                </CardContent>
            </Card>
            </div>
        </div>
    </div>
  );
};

export default Goals;