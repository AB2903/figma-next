import { RiSearchLine } from "react-icons/ri";


export default function first(){
    return (
        <>
            <div className="flex justify-between flex-col lg:flex-row mt-8 w-full">
                <p className="font-bold text-xl">Hello Evano 👋🏼,</p>
                <div className="flex gap-2 shadow-lg border-2 rounded-lg mt-3 lg:m-0">
                    <RiSearchLine className="font-bold text-xl"/>
                    <input type="text" placeholder="Search" className="border-none bg-transparent outline-none"/>
                </div>
            </div>
        </>
    )
}