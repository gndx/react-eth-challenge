import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export function Languages({ className, languagesList }) {
  const [languages, setLanguages] = useState(languagesList);

  useEffect(() => {
    setLanguages(languagesList);
  }, [languagesList]);
  return (
    <Box
      className={className}
      classTitle='Languages-title'
      title='Languages-title'
    >
      <section>
        {languages.map(({ name, percentage }) => (
          <p className='Languages-item'>{`${name} - ${percentage}`}</p>
        ))}
      </section>
    </Box>
  );
}

Languages.propTypes = {
  className: PropTypes.string,
  languagesList: PropTypes.arrayOf(
    PropTypes.exact({
      name: 'Spanish',
      percentage: '90%',
    }),
  ),
};

Languages.defaultProps = {
  className: '',
  languagesList: [
    {
      name: 'Spanish',
      percentage: '90%',
    },
    {
      name: 'English',
      percentage: '50%',
    },
    {
      name: 'Japanese',
      percentage: '50%',
    },
  ],
};
export default Languages;
