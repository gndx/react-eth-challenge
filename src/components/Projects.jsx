import React, { useState } from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Projects = ({
  data = { projects: { title: '', projects: [{}, {}, {}] } },
}) => {
  const [fullImage, setFullImage] = useState({ display: false, image: null });

  const handleOpenFullImage = (imageUrl) => {
    setFullImage({
      display: true,
      image: imageUrl,
    });
  };

  const handleCloseFullImage = () => {
    setFullImage({ display: false, image: null });
  };

  return (
    <>
      {fullImage.display && (
        <div
          className="FullImage fixed h-[100%] w-[100%] bg-black/70 z-10 flex justify-center items-center cursor-pointer"
          onClick={handleCloseFullImage}
        >
          <img
            className="w-full sm:w-5/6 rounded object-fit shadow-[0_0_20px_rgba(1,1,1,1)]"
            src={fullImage.image}
            alt="project fullimage"
          />
        </div>
      )}
      <Section id="Projects" className="flex flex-col">
        <span className="flex items-center mb-3">
          <Icon name="Experiment" className="mr-0.5 text-green-500" />
          <h3 className="Projects-title">{data.projects.title}</h3>
        </span>
        <div className="flex flex-col sm:flex-row">
          {data.projects.projects.map((item, index) => (
            <article
              key={index}
              className="Project-item flex flex-col justify-between bg-active rounded-md py-3 px-4 drop-shadow-lg w-full mb-4 sm:m-2 sm:w-[50vw] lg:w-[35vw]"
            >
              <span>
                <h3 className="mb-1">{item.title}</h3>
                <img
                  className="w-full object-scale-down mb-2 drop-shadow-lg cursor-pointer rounded"
                  src={item.image}
                  alt={item.title.concat(' project')}
                  onClick={() => {
                    handleOpenFullImage(item.image);
                  }}
                />
                <p className="mb-2">{item.description}</p>
              </span>
              <span className="flex justify-between">
                <a
                  href={item.repo}
                  target={'_blank'}
                  className="flex items-center"
                >
                  <img src="../github.svg" className="mr-1"></img>Github link
                </a>
                <p className="">{item.date}</p>
              </span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Projects;
