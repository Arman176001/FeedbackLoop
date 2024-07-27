import HomePage from "@/components/HomePage";
import HomePageBG from "@/components/HomePageBG";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 z-0">
        <HomePageBG/>
      </div>
      <div className="relative z-10">
        <HomePage/>
      </div>
    </main>
  );
}