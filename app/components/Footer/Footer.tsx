import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full py-10 text-sm text-center bg-gray-950">
            <div className="w-full pb-4">
                <h2 className="pb-4 text-xl font-semibold">lift labs</h2>
                <nav className="flex flex-col w-full">
                    <a href="#" className="pb-1">About</a>
                    <a href="#" className="pb-1">Features</a>
                    <a href="#" className="pb-1">Help</a>
                </nav>
            </div>
            <div className="flex flex-row justify-center pb-10">
                <FaInstagramSquare size={32} className="p-1"/>
                <FaSquareXTwitter size={32} className="p-1"/>
                <FaLinkedin size={32} className="p-1"/>
                <AiFillTikTok size={32} className="p-1"/>
                <FaYoutubeSquare size={32} className="p-1"/>
                <FaFacebookSquare size={32}  className="p-1"/>
            </div>
            <p>&copy; 2024 lift labs, Inc. All rights reserved.</p>
        </footer>
    );
}