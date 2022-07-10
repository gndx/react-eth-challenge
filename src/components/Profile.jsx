function Profile({ profile }) {
  return (
    <section className='Profile section'>
      <h3 className='Profile-title'>Profile</h3>

      <article className='Profile-desc'>
        <p>{profile}</p>
      </article>
    </section>
  );
}

export default Profile;
