import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getData from '../utils/getData';

export const ViteContext = createContext({});

export const ViteProvider = ({ children, url }) => {
  const [user, setUser] = useState({
    name: '',
    profession: '',
    address: '',
    email: '',
    website: '',
    phone: '',
    avatar: '',
    Profile: '',
    certificate: [],
    Academic: [],
    experience: [],
    skills: [],
    interest: [],
    languages: [],
    social: [],
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(url);
        setUser(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <ViteContext.Provider value={{ user }}>{children}</ViteContext.Provider>
  );
};

export function useVite() {
  return useContext(ViteContext);
}

ViteProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  url: PropTypes.string,
};
ViteProvider.defaultProps = {
  url: 'http://localhost:3000/data',
};
