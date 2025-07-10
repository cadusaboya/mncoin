import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';


export default function Footer(): JSX.Element {
    return (
      <footer className="bg-black text-white py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-300">Orebit</h1>
            <div className="mt-4 flex space-x-4">
            <Button variant="outline" className="bg-gray-800 px-4 py-2 rounded-xl font-semibold text-white mr-5" asChild>
                <Link href="https://tx4o9.share.hsforms.com/2guHvYugEQRCbrbASBheHLA" target="_blank" rel="noopener noreferrer">Become a Partner</Link>
            </Button>
            </div>
          </div>
          <div>
            <h2 className="text-sm text-gray-400 uppercase mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><a href="https://orebit.gitbook.io/docs" className="hover:text-gray-400">Docs</a></li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-sm text-gray-400 uppercase mb-4">Community</h2>
            <ul className="space-y-2">
              <li><a href="https://x.com/MnTokenMine" className="hover:text-gray-400">X</a></li>
              <li><a href="https://discord.gg/K5Tcw2NbXU" className="hover:text-gray-400">Discord</a></li>
              <li><a href="#" className="hover:text-gray-400">Telegram</a></li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-gray-800 mt-10 pt-5 text-center text-sm text-gray-500">
          <p>&copy; 2025 Orebit</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://orebit.gitbook.io/docs/terms-of-service/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="https://orebit.gitbook.io/docs/terms-of-service/general-terms-of-service" className="hover:text-gray-400">Terms</a>
          </div>
        </div>
      </footer>
    );
  }
  