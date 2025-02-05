import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { FaDiscord } from "react-icons/fa";

const MainContact = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 py-16 md:py-16">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600">
          Want to know more?
        </h1>
        <p className="text-center text-gray-600 mt-2 md:mt-5 px-6 md:px-20 lg:px-40 xl:px-80 text-justify">  
          We are here to help you, wether you&apos;re interested in joining early funding rounds or you want to learn more about the mine current operations. Contact us and we will get back to you as soon as possible to schedule a meeting.
        </p>
        <div className="flex items-center justify-center mt-1">
        <Button variant="outline" className="mt-2 shadow-sm" asChild>
          <Link href="https://discord.gg/K5Tcw2NbXU" target="_blank" rel="noopener noreferrer"><FaDiscord className="w-6 h-6 mr-2" />Join our Discord</Link>
        </Button>
        </div>     
      </div>
      
    </div>
  );
};

export default MainContact;