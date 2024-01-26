import Image from 'next/image';
import React from 'react';
import afrihealthImg from '../public/assets/projects/afrihealth.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const metaverse = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 h-[30vh] lg:h-[40vh] bg-black/80 z-10 w-full" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={afrihealthImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Afrihealth Helthcare</h2>
          <h3>React / Framer / Tailwind</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Afrihealth is a healthcare website that depicts a futuristic design,
            using sleek animations and colourful interfaces, it showcases the
            flexibility of a modern website, especially in the modern arena. It
            was built using Reactjs, Framer motion, Tailwind CSS and it is
            deployed online. It is responsive and has a lot of cool animations.
          </p>
          <a
            href="https://www.afri-health.com/"
            target="#blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Framer Motion
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SASS
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Git
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#Projects">
          <p className="underline cursor-pointer mb-4">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default metaverse;
