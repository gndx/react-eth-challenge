import React from 'react';

function Profile(props) {
  const { data } = props;

  return (
    <section className='Profile'>
      <h2 className='Profile-title'>Profile</h2>
      <article className='Profile-desc'>{data?.Profile}</article>
    </section>
  );
}

export default Profile;
