import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export function AcademicItem({
  degree,
  description,
  endDate,
  institution,
  startDate,
}) {
  return (
    <div className="Academic-item">
      <p>
        <b>Degree: </b>
        {degree}
      </p>
      <p>
        <b>Time: </b>
        {`${startDate}-${endDate}`}
      </p>
      <p>
        <b>Description: </b>
        {description}
      </p>
      <p>
        <b>Institution: `</b>
        {institution}
      </p>
    </div>
  );
}

export function Academic({ className, academicList }) {
  const [academis, setAcademis] = useState(academicList);

  useEffect(() => {
    setAcademis(academicList);
  }, [academicList]);

  return (
    <Box
      className={className}
      classTitle="Academic-title"
      title="Academic-title"
    >
      <section style={{ display: 'flex', overflowWrap: 'break-word' }}>
        {academis.map(
          ({ degree, description, endDate, institution, startDate }) => {
            return (
              <AcademicItem
                key={`${degree}-${startDate}`}
                {...{ degree, description, endDate, institution, startDate }}
              />
            );
          }
        )}
      </section>
    </Box>
  );
}

Academic.propTypes = {
  className: PropTypes.string,
  academicList: PropTypes.arrayOf(
    PropTypes.exact({
      degree: PropTypes.string,
      description: PropTypes.string,
      endDate: PropTypes.string,
      institution: PropTypes.string,
      startDate: PropTypes.string,
    })
  ),
};

Academic.defaultProps = {
  className: '',
  academicList: [
    {
      degree: 'Atomic Master',
      description:
        ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
      endDate: 'Jan 2017',
      institution: 'MIT',
      startDate: 'Jan 2020',
    },
    {
      degree: 'Atomic Master',
      description:
        ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
      endDate: 'Jan 2017',
      institution: 'MIT',
      startDate: 'Jan 2019',
    },
    {
      degree: 'Atomic Master',
      description:
        ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
      endDate: 'Jan 2017',
      institution: 'MIT',
      startDate: 'Jan 2018',
    },
  ],
};

AcademicItem.propTypes = {
  degree: PropTypes.string,
  description: PropTypes.string,
  endDate: PropTypes.string,
  institution: PropTypes.string,
  startDate: PropTypes.string,
};

export default Academic;
