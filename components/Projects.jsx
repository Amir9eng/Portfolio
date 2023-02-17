import Image from 'next/image';
import React from 'react';
import EstateImg from '../public/assets/projects/Estate.png';
import propertyImg from '../public/assets/projects/property.png';
import lawImg from '../public/assets/projects/law.jpg';
import metaverseImg from '../public/assets/projects/metaverse.png';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="Projects" className="w-full">
      <div className="ma-w-[1240px] mx-auto px-24 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I’ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={EstateImg}
            projectUrl="/estate"
            tech="Next JS"
          />
          <ProjectItem
            title="Real Estate App"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="Next JS"
          />
          <ProjectItem
            title="Law Parlance"
            backgroundImg={lawImg}
            projectUrl="/law"
            tech="React JS"
          />
          <ProjectItem
            title="Metaverse UI"
            backgroundImg={metaverseImg}
            projectUrl="/metaverse"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
