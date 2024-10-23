import First from "./first";
import Second from "./second";



export default function header(){
    return (
        <>
            <div className="flex-col">
                <First />
                <Second />
            </div>
        </>
    )
}