import Image from 'next/image';
import React from 'react';
import lawImg from '../public/assets/projects/digital.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const digital = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 h-[30vh] lg:h-[40vh] bg-black/80 z-10 w-full" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={lawImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Digital Leaps</h2>
          <h3>JavaScript / Firebase / Gitlab</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8 px-4">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Digital Leaps is a course management tool for educational practices.
            its mission is to provide a platform for students to learn and
            practice their skills. With easy access to past and present courses
            and materials from various states and countries. Users can enjoy
            unlimited e-books, resources, & more. Digital Leaps provides users
            with over 150k resources, books and more to aid your research and
            understanding.
          </p>
          <a
            href="https://www.digital-leaps.com/home/"
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
                React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NodeJs
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
                Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
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

export default digital;
