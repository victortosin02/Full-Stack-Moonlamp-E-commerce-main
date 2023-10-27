import Image from "next/image";

import heroimage from "@/public/moonlamphero.png";

const Hero = () => {
  return (
    <div className="bg-[#e0e1dd] py-10">
      <div className="w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-20">
        <div>
          <h1 className="text-5xl font-bold text-[#1b263b]">Accelerate Your Career: Tap into Your Full Potentials</h1>
          <p className="mt-5 text-[#778da9] font-bold- text-xl">
          Embarking on a fulfilling career journey starts with making informed decisions. Our state-of-the-art 
          career guidance recommendation system leverages cutting-edge technology to provide you with personalized 
          insights and expert advice.
          </p>
          <div className="flex gap-5 mt-8">
            <button className="bg-[#415a77] py-2 px-5 hover:bg-sky-700 text-xl rounded-xl text-white">Get Started</button>
          </div>
        </div>
        <div className="flex lg:justify-end justify-center items-center">
          <Image src={heroimage} width={600} height={600} alt="hero" placeholder="blur" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
