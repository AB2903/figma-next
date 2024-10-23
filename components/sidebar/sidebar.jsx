import Up from "./up"
import Down from "./down"


export default function sidebar() {
    return (
        <div className="flex justify-between flex-col min-h-screen shadow-2xl">    
            <Up />
            <Down />
        </div>
    )
}