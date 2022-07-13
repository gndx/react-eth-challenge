import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Academic = ({
  data = {
    academic: {
      title: '',
      academics: [{  }, {  }, {  }],
    },
  },
}) => {
  return (
    <Section id="Academic" className="flex flex-col">
      <span className="flex items-center mb-3">
        <Icon name="Education" className="mr-0.5 text-neutral-900" />
        <h3 className="Academic-title">{data.academic.title}</h3>
      </span>
      <ul className="flex flex-col">
        {data.academic.academics.map((item, index) => (
          <li
            key={index}
            className="Academic-item mb-4 bg-active  rounded py-5 px-3 flex"
          >
            {item.image && (
              <img
                className="w-16 h-16 object-fit mr-3 rounded-full object-contain 0"
                src={item.image}
                alt=""
              />
            )}
            <span>
              <p className="text-lg font-semibold">{item.degree}</p>
              <p className="text-lg ">{item.institution}</p>
              <p className="mb-1">
                {item.startDate} - {item.endDate}
              </p>
              <p>{item.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Academic;
