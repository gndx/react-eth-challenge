function Header({ name, avatar, children }) {
  return (
    <header className='Header section'>
      <div className='Header-image--container'>
        <img src={avatar} alt='Gus Ramirez' />
      </div>

      <div className='Header-content'>
        <h1 className='Header-title'>{name}</h1>

        {children}
      </div>
    </header>
  );
}
export default Header;
