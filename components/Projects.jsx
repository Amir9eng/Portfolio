import Image from 'next/image';
import React from 'react';
import EstateImg from '../public/assets/projects/tidelab.png';
import propertyImg from '../public/assets/projects/property.png';
import digitalImg from '../public/assets/projects/digital.png';
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
            title="Tidelab Website"
            backgroundImg={EstateImg}
            projectUrl="/estate"
            tech="React JS"
          />
          <ProjectItem
            title="Afrihealth"
            backgroundImg={afrihealthImg}
            projectUrl="/afrihealth"
            tech="React JS"
          />
          git
          <ProjectItem
            title="Resort Website"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="Vite JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
