import React, { useState } from 'react';

//icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress } from 'react-icons/fa';

import { SiNextdotjs } from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />, <SiNextdotjs />, <FaWordpress />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Front-end Developer - AVIVI',
        stage: '09.2021 - 06.2023',
      },
      {
        title: 'Intern Markup Developer - Geniustudio',
        stage: '12.2020 - 04.2021',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Complete course on JavaScript + React',
        stage: '2022 - till now',
      },
      {
        title: 'Landing layout and theme creation on CMS WordPress',
        stage: '2021',
      },
      {
        title: '"Website layout from 0 to 1" Markup Developer',
        stage: '2021',
      },

      {
        title: 'Front-end Developer IT Step',
        stage: '2020',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primery/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exite="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="h2">
              Captivating <span className="text-accent">stories</span> birth magnificent designs.
            </h2>
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              Three years ago, I started my career as a developer, taking on remote projects for
              various agencies and collaborating on digital products catering to both businesses and
              consumers. Throughout this time, I have gained valuable experience in delivering
              successful solutions in the web development realm.
            </p>
            {/* counters */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              animate="show"
              exite="hidden"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
                {/* clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={35} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied clients
                  </div>
                </div>
                {/* projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={50} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exite="hidden"
          className="flex flex-col w-full xl:max-w-[49%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hiden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return <div>{icon}</div>;
                  })}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
