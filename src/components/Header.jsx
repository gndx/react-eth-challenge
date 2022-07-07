function Header({ children }) {
  return (
    <header className='Header'>
      <h2 className='Header-title'>Header Title</h2>

      {children}
    </header>
  );
}
export default Header;
