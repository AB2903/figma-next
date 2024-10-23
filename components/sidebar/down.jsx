import profil from "@/public/img/profil.png"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io";


export default function down() {
    return (
        <>
            <div className="hidden md:block">
                <div className="bg-gradient-to-r from-pink-300 to-indigo-600 box-container rounded-2xl shadow-lg mx-8 h-[148px] mt-20 p-4 flex flex-col gap-4"> 
                    <p className="text-white text-base text-center font-semibold">Upgrade to PRO to get <br /> access all Features!</p>
                    <button className="bg-white rounded-xl p-2 text-purple-700 font-bold">Get Pro Now!</button>
                </div>
            </div>
            <div className="flex mx-5 my-8 ml-8">
                <Image src={profil} className="w-12 mr-2 rounded-full"/>
                <p className="font-bold hidden md:block">Evano <br /> <span className="text-sm font-light text-gray-600">Project Manager</span></p>
                <button className="mt-4 hidden md:block"><IoIosArrowDown className="ml-8"/></button>
            </div>
        </>
    )
}