import { IoPeopleOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { BsPersonCheck } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";


export default function second(){
    return (
        <>
            <div className="my-10 shadow-xl h-auto p-10 rounded-lg bg-yellow-400 flex flex-col gap-2 lg:flex-row w-full">
                <div className="flex gap-4">
                    <IoPeopleOutline className="text-green-500 bg-green-200 h-14 w-14 rounded-2xl md:rounded-full"/>
                    <div>
                        <p className="font-extralight text-xs">Total costumers</p>
                        <p className="font-bold text-xl">5,423</p>
                        <p className="flex"><span className="flex text-green-500"><FaArrowUp className="mt-1"/>16%</span> <span className="text-gray-700 text-sm font-light ml-1">this month</span></p>
                    </div>
                    <div className="lg:border-r-2 ml-6 lg:mx-14 border-gray-600"></div>
                </div>
                <div className="flex gap-4">
                    <BsPersonCheck className="text-green-500 bg-green-200 h-14 w-14 rounded-2xl md:rounded-full"/>
                    <div>
                        <p className="font-extralight text-xs">Members</p>
                        <p className="font-bold text-xl">1,893</p>
                        <p className="flex"><span className="flex text-red-700"><FaArrowDown className="mt-1"/>1%</span> <span className="text-gray-700 text-sm font-light ml-1">this month</span></p>
                    </div>
                    <div className="lg:border-r-2 ml-6 lg:mx-14 border-gray-600"></div>
                </div>
                <div className="flex gap-4">
                    <HiComputerDesktop className="text-green-500 bg-green-200 h-14 w-14 rounded-2xl md:rounded-full"/>
                    <div>
                        <p className="font-extralight text-xs">Total costumers</p>
                        <p className="font-bold text-xl">189</p>
                    </div>
                </div>
            </div>
        </>
    )
}