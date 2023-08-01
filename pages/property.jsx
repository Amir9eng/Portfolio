import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/property.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 h-[30vh] lg:h-[40vh] bg-black/80 z-10 w-full" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Resort Website</h2>
          <h3>Vite / Tailwind CSS / TypeScript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8 px-4">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using Vite, Tailwind CSS and TypeScript. It is a
            website for a resort that allows users to book, register and choose
            packages. It provides a user-friendly interface with features such
            as package listing, maps, photos, and contact forms, it boasts of
            responsiveness, smooth scroll and fast refresh. It is a complete
            website that contains everything and also an API Integration.
          </p>
          <a
            href="https://boloweisworldresort.com/"
            target="#blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-10">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Material UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#Projects">
          <p className="underline cursor-pointer mb-4 pl-2">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
