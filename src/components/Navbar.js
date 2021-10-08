const Navbar = ({handleSwitch}) => {
    
  
    return (
    <div className="navbar">
      <nav className="nav">
        <h2 onClick={() => handleSwitch('By Title')} className="mode">
          Title
        </h2>
        <h2 onClick={() => handleSwitch('By Author')} className="mode">
          Author
        </h2>
        <h2 onClick={() => handleSwitch('By Genre')} className="mode">
          Genre
        </h2>
        <h2 onClick={() => handleSwitch('By ISBN')} className="mode">
          ISBN
        </h2>
      </nav>
    </div>
  );
};

export default Navbar;
