

import Home from "@/app/pages/Home/page";
import About from "@/app/pages/About/page";
import Projects from "@/app/pages/Projects/page";
import Contact from "@/app/pages/Contact/page";

export default function APP() {
  return (
    <main className="flex flex-col ">
    
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
    
    </main> 
  );
}
