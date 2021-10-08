const Navbar = ({handleSwitch}) => {
    
  
    return (
    <div className="App__Navbar">
      <nav className="navbar">
        <button onClick={() => handleSwitch('By Title')} className="mode">
          Books
        </button>
        <button onClick={() => handleSwitch('By Author')} className="mode">
          Authors
        </button>
        <button onClick={() => handleSwitch('By Genre')} className="mode">
          Genre
        </button>
        <button onClick={() => handleSwitch('By ISBN')} className="mode">
          ISBN
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
