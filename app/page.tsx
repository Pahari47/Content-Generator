"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { BookOpen, CupSoda, Github, Instagram, LayoutTemplate, Linkedin, MessageCircleDashed } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <div className="flex justify-between p-5 shadow-sm border-b-2">
        <Image src={'/logo.svg'} alt='logo' width={50} height={50} />
        <UserButton />
      </div>

      <div className="flex text-6xl font-extrabold items-center justify-center gap-3 mt-6">
        <h1 className="text-gray-700">Krishnendu</h1>
        <h1>nasa</h1>
        <h1 className="text-sky-800">Hackathon</h1>
      </div>
      <div className="flex items-center justify-center text-lg mt-3">
        <p className="w-[50vw] text-center">The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an independent agency of the U.S. federal government responsible for the civil space program, aeronautics research, and space research. </p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Button onClick={handleButtonClick}>Get Started</Button>
      </div>

    </div>
  );
}
