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
      <UserButton/>
      </div>
     
      <div className="flex text-6xl font-extrabold items-center justify-center gap-3 mt-6">
        <h1 className="text-gray-700">Evolve</h1>
        <h1>Your</h1>
        <h1 className="text-sky-800">Content</h1>
      </div>
      <div className="flex items-center justify-center text-lg mt-3">
        <p className="w-[50vw] text-center">Revolutionize your content creation with our AI-powerd app, delivering engaging and high quality text in seconds.</p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Button onClick={handleButtonClick}>Get Started ></Button>
      </div>
      <div className="flex justify-center items-center mt-11 gap-7 text-fuchsia-900">
        <a href="https://github.com/Pahari47"><Github/></a>
        <a href="https://www.linkedin.com/in/nachiketa-pahari-6b1028257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Linkedin/></a>
        <a href="https://www.instagram.com/pahari_624?igsh=MWJiM2Z5anJ4YjEyaw=="><Instagram/></a>
      </div>
      <div className="grid grid-cols-4 mt-[30vh] m-20 gap-20">
        <div>
          <LayoutTemplate className="text-blue-800"/>
          <h1 className="font-bold mt-4">20+ templates</h1>
          <p className="mt-4">Responsive, and mobile-first project on the web</p>
        </div>
        <div>
          <CupSoda className="text-blue-800"/>
          <h1 className="font-bold mt-4">Customizable</h1>
          <p className="mt-4">Components are easily customized and exteendable</p>
        </div>
        <div>
          <BookOpen className="text-blue-800"/>
          <h1 className="font-bold mt-4">Free to Use</h1>
          <p className="mt-4">Every component and plugin is well documented</p>
        </div>
        <div>
          <MessageCircleDashed className="text-blue-800"/>
          <h1 className="font-bold mt-4">24/7 Support</h1>
          <p className="mt-4">Never Ever try to contact</p>
        </div>
      </div>      
    </div>
  );
}
