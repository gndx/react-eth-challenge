import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getData } from '../utils/getData';

export const ViteContext = createContext({});

export function ViteProvider({ children, url }) {
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
  const [profile, setProfile] = useState({
    name: '',
    profession: '',
    address: '',
    email: '',
    website: '',
    phone: '',
    avatar: '',
    Profile: '',
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(url);
        const {
          name,
          profession,
          address,
          email,
          website,
          phone,
          avatar,
          Profile,
        } = data;
        setProfile({
          name,
          profession,
          address,
          email,
          website,
          phone,
          avatar,
          profile,
        });
        setUser(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [url]);

  return (
    <ViteContext.Provider value={{ user, profile }}>
      {children}
    </ViteContext.Provider>
  );
}

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
