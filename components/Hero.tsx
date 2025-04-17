"use client";
import Image from 'next/image';
import{useState} from 'react';
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation';


const Hero = () => {
    const router = useRouter();

const handleScroll = () => {
    router.push('/chat-bot');
};

return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] bg-gradient-to-br from-[#e0f7fa] to-[#fffde7] px-6 md:px-20 py-10 gap-10">
    
      {/* LEFT TEXT SIDE */}
    <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#12408a] drop-shadow-sm animate-floatIn leading-tight">
        🌞 AI SOLAR WATER ASSISTANT
        </h1>
        <p className="text-xl font-normal text-black mt-4">
        Smart. Sustainable. Self-sufficient.
        </p>
        <div className="mt-8 flex justify-left md:justify-start">
        <CustomButton
            title="Explore AI Assistant"
            containerStyles="bg-blue-600 text-white rounded-full px-2 py-3 hover:bg-blue-700 transition"
            handleClick={handleScroll}
        />
        </div>
    </div>


    <div className=" xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className=" relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
        <Image
            src="/blueSolar.png"
            alt="hero"
            fill
            className="object-contain"
        />
        </div>
        <div className="hero__image-overlay absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
    </div>
    </div>
    </>
    
);
};

export default Hero;
