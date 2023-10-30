import Image from "next/image";
import Link from "next/link";

import heroimage from "@/public/moonlamphero.png";

const Hero = () => {
  return (
    <div className="bg-[#e0e1dd] py-10">
      <div className="w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-20">
        <div>
          <h1 className="text-5xl font-bold text-[#1b263b]">
            Accelerate Your Career: Tap into Your Full Potentials
          </h1>
          <p className="mt-5 text-[#778da9] font-bold- text-md">
            Embarking on a fulfilling career journey starts with making informed
            decisions. Our state-of-the-art career guidance recommendation algorithm
            leverages on psychometric tests and surveys to gain insights on your skills and experiences 
            thereby providing you with personalized insights and expert advice in your career journey.
          </p>
          <div className="flex gap-5 mt-8">
            <Link href={"/survey"}>
              <button className="bg-[rgb(65,90,119)] py-2 px-5 hover:bg-sky-700 text-xl rounded-xl text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="flex lg:justify-end justify-center items-center">
          <Image
            src={heroimage}
            width={600}
            height={600}
            alt="hero"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
