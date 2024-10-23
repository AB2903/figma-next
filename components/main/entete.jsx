import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";


export default function entete(){
    return (
        <>
            <div className="flex justify-between flex-col lg:flex-row mt-8 p-4">
                <div>
                    <h2 className="font-bold text-3xl">All Customers</h2>
                    <h3 className="text-green-600 text-xl">Active Members</h3>
                </div>
                <div className="flex gap-2">
                    <div className="flex gap-2 h-8 shadow-lg  rounded-lg">
                        <RiSearchLine className="font-bold text-xl mt-1"/>
                        <input type="text" placeholder="Search" className="border-none bg-transparent outline-none"/>
                    </div>
                    <button className="mr-10 mt-2 hidden lg:flex">Short by : <span className="font-bold">Newest</span><IoIosArrowDown className="mt-1 ml-3"/></button>
                </div>
            </div>
        </>
    )
}