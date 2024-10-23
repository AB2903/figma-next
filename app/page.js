import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import Main from "@/components/main/main";

export default function Home() {
  return (
   
    <div className="flex">
      <Sidebar />
      <div className="px-5 overflow-y-scroll md:overflow-y-hidden">
        <Header />  
        <Main />
      </div>
    </div>
   
  );
}
