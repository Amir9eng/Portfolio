import Image from 'next/image';
import React from 'react';
import EstateImg from '../public/assets/projects/Estate.png';
import propertyImg from '../public/assets/projects/property.png';
import lawImg from '../public/assets/projects/law.jpg';
import afrihealthImg from '../public/assets/projects/afrihealth.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="Projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 whitespace-nowrap">What I’ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={EstateImg}
            projectUrl="/estate"
            tech="Next JS"
          />
          <ProjectItem
            title="Resort Website"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="Vite JS"
          />
          <ProjectItem
            title="Law Parlance"
            backgroundImg={lawImg}
            projectUrl="/law"
            tech="React JS"
          />
          <ProjectItem
            title="Afrihealth"
            backgroundImg={afrihealthImg}
            projectUrl="/afrihealth"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
