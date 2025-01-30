'use client'

import Grid from "@/components/grid/page";
import Hero from "@/components/hero/page";
import Navbar from "@/components/navbar/page";
import RecentProjects from "@/components/recentProject/page";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full px-7xl">
        <Navbar link2="/" name2="Home" icon2={<FaHome />} />
        <Hero />
        <div className="max-w-[120rem] mx-auto mb-20">
          <Grid />
        </div>
        <RecentProjects />
      </div>
    </main>
  );
}
