import Entete from "./entete"
import Table from "./table"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function main(){
    return (
        <>
            <div className="h-auto mb-4 rounded-lg shadow-xl">
                <Entete />
                <Table />
                <div className="mt-7 flex flex-col lg:flex-row lg:justify-between">
                    <p className="ml-4">Showing data 1 to 8 of 256K entries</p>
                    <div className="mr-10 flex gap-4 mb-2">
                        <button className="border-[1px] px-1 bg-gray-100 hover:bg-indigo-600"><IoIosArrowBack /></button>
                        <button className="border-[1px] px-1 bg-gray-100 hover:bg-indigo-600">1</button>
                        <button className="border-[1px] px-1 bg-gray-100 hover:bg-indigo-600">2</button>
                        <button className="border-[1px] px-1 bg-gray-100 hover:bg-indigo-600">3</button>
                        <button className="border-[1px] px-1 bg-gray-100 hover:bg-indigo-600">4</button>
                        <button>...</button>
                        <button className="border-[1px] px-1 bg-gray-100 hover:bg-indigo-600">40</button>
                        <button className="border-[1px] px-1 bg-gray-100 hover:bg-indigo-600"><IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
        </>
    )
}