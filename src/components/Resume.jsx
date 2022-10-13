import React from "react";
import ResumeCard from "./ResumeCard";
import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';

const resumeIcons = [
  {
    type: 'Academic',
    icon: MdOutlineSchool,
    colorBackground: '#FFF4F4',
  },
  {
    type: 'Certificate',
    icon: TbCertificate,
    colorBackground: '#FCF4FF',
  },
  {
    type: 'Experience',
    icon: MdOutlineBusinessCenter,
    colorBackground: '#EEF5FA',
  },
];


const Resume = ({local, academic, experience, certificate}) => {
  const [ first, second, third ] = resumeIcons;

  const resumeArrayFinal = [{
    ...first,
    data: academic
  },
  {
    ...second,
    data: certificate
  },
  {
    ...third,
    data: experience
  }];

  return (
    <>
      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="py-12 px-4 md:px-0">              
              <h2 className="after-effect after:left-44">Resume</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                {resumeArrayFinal.map((item, i) => {
                return  <ResumeCard item={item} local={local} key={i} />
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
