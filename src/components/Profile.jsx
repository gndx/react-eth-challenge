import React, { useEffect, useState } from 'react';
import { getData } from '../utils/getData';

export default function Profile() {

    const [profile, setProfile] = useState("")

    useEffect(async () => {
      const { Profile } = await getData('http://localhost:3000/data');
      setProfile(Profile);
    }, []);
  return (
    <div className="profile">
      <h3 className="Profile-title">Profile</h3>
      <div className="Profile-desc">{profile}</div>
    </div>
  );
}
