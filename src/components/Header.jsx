function Header({ children }) {
  return (
    <header className='Header section'>
      <div className='Header-image--container'>
        <img
          src='https://avatars.githubusercontent.com/gusram01'
          alt='Gus Ramirez'
        />
      </div>

      <div className='Header-content'>
        <h1 className='Header-title'>Gus Ramírez</h1>

        {children}
      </div>
    </header>
  );
}
export default Header;
