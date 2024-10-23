import { RiSettingsLine } from "react-icons/ri";
import { VscKey } from "react-icons/vsc";
import { PiCubeThin } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi";
import { TbWallet } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


export default function up() {
    return (
        <>
            <div className="hidden md:block">
                <h1 className="flex items-center gap-1 font-bold text-2xl p-7"><RiSettingsLine className="text-3xl"/> Dashboard <span className="text-sm mt-1 text-gray-400 font-light">v.01</span></h1>
                <div className="px-7 flex flex-col gap-5">
                    <a href="" className="flex gap-3 font-bold text-sm text-gray-500"><VscKey className="mt-1"/>Dashboard</a>
                    <a href="" className="flex gap-3 font-bold text-sm text-gray-500"><PiCubeThin className="mt-1"/>Product<span className="ml-3"></span><IoIosArrowForward className="mt-1 ml-16"/></a>
                    <a href="" className="flex gap-3 font-bold text-sm text-white bg-blue-600 rounded-md -ml-2 p-2"><HiOutlineUser className="mt-1"/>Custumers<IoIosArrowForward className="mt-1 ml-16"/></a>
                    <a href="" className="flex gap-3 font-bold text-sm text-gray-500"><TbWallet className="mt-1"/>Income<span className="ml-3"></span><IoIosArrowForward className="mt-1 ml-16"/></a>
                    <a href="" className="flex gap-3 font-bold text-sm text-gray-500"><CiDiscount1 className="mt-1"/>Promote<IoIosArrowForward className="mt-1 ml-20"/></a>
                    <a href="" className="flex gap-3 font-bold text-sm text-gray-500"><FaRegCommentAlt className="mt-1"/>Help<span className="ml-3"></span><IoIosArrowForward className="mt-1 ml-20"/></a>
                </div>
            </div>
            <div className="md:hidden">
                <h1 className="flex items-center gap-1 font-bold text-2xl p-7"><RiSettingsLine className="text-3xl"/></h1>
                <div className="px-7 flex flex-col gap-5">
                    <a href="" className="flex gap-3 font-bold text-lg text-gray-500"><VscKey className="mt-1"/></a>
                    <a href="" className="flex gap-3 font-bold text-lg text-gray-500"><PiCubeThin className="mt-1"/></a>
                    <a href="" className="flex gap-3 font-bold text-lg text-white bg-blue-600 rounded-md -ml-2 p-2"><HiOutlineUser className="mt-1"/></a>
                    <a href="" className="flex gap-3 font-bold text-lg text-gray-500"><TbWallet className="mt-1"/></a>
                    <a href="" className="flex gap-3 font-bold text-lg text-gray-500"><CiDiscount1 className="mt-1"/></a>
                    <a href="" className="flex gap-3 font-bold text-lg text-gray-500"><FaRegCommentAlt className="mt-1"/></a>
                </div>
            </div>
        </>
    )
}