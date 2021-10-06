const Navbar = ({handleSwitch}) => {
    
  
    return (
    <div className="App__Navbar">
      <nav className="navbar">
        <button onClick={() => handleSwitch('Books')} className="mode">
          Books
        </button>
        <button onClick={() => handleSwitch('Authors')} className="mode">
          Authors
        </button>
        <button onClick={() => handleSwitch('Genre')} className="mode">
          Genre
        </button>
        <button onClick={() => handleSwitch('ISBN')} className="mode">
          ISBN
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
