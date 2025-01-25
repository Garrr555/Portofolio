import { FloatingNav } from "@/ui/floating-navbar/page";
import { JSX } from "react";

export default function Navbar({name2, link2, icon2}: {name2: string; link2: string; icon2?: JSX.Element;}){
    return(
        <div>
            <FloatingNav navItems={[{name: name2, link: link2, icon: icon2}]}/>
        </div>
    )
}