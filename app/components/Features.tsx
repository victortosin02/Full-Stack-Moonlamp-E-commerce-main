import Image from "next/image";
import metrics from "@/public/career.png";

import { FaRocket, FaCertificate, FaGraduationCap, FaBook, FaSchool, FaBriefcase } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" className="py-5">
      <h1 className="text-center text-2xl font-bold text-primary">Career Metrics</h1>
      <div className="w-[89%] m-auto max-w-[1400px] grid md:grid-cols-3 grid-cols-1 items-center justify-items-center gap-5">
        <div>
          <ul className="space-y-10">
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77]">
                <h3>Choose a Career Path</h3>
                <div>
                  <FaRocket size={25} />
                </div>
              </div>
              <p className="text-gray-600">
                Whether you're just starting out or considering a change, finding the right path can make all the difference.
              </p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] ">
                <h3>Select a Skill</h3>
                <div>
                  <FaGraduationCap size={25} />
                </div>
              </div>
              <p>Building skills is the cornerstone of personal and professional growth. Choose from a wide range of
                in-demand skills and take the first step towards mastering your craft. </p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] ">
                <h3>Course Choice</h3>
                <div>
                  <FaBook size={25} />
                </div>
              </div>
              <p>Empower yourself with knowledge and skill-building through our diverse selection of courses. </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center ">
          <Image src={metrics} alt="career metrics" width={500} height={500} />
        </div>
        <div>
          <ul className="space-y-10 text-right">
            <li className="">
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] justify-end">
                <h3>Certifications</h3>
                <div>
                  <FaCertificate size={25} />
                </div>
              </div>
              <p>
                Elevate your credentials and showcase your expertise with our proposed
                industry-recognized certifications based on required skills, internship experience and educational level.
              </p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] justify-end ">
                <h3>Educational Level</h3>
                <div>
                  <FaSchool size={25} />
                </div>
              </div>
              <p>Whether you're a high school student preparing for college or a professional seeking advanced learning opportunities,
                we have resources to support your educational aspirations.</p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] justify-end ">
                <h3>Internship Experience</h3>
                <div>
                  <FaBriefcase size={25} />
                </div>
              </div>
              <p>Our carefully curated algorithm propose internship paths students and young professionals should consider
                to apply classroom knowledge in the work world, develop critical skills, and build a network of
                industry contacts.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
