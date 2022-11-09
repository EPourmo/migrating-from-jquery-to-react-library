const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <a href="#" className="font-lobster text-7xl text-primary">
        HRnet
      </a>
      <a
        href="#"
        className="text-primary px-3 py-1.5 rounded-lg border-2 border-primary font-bold hover:scale-105 uppercase"
      >
        View current employee
      </a>
    </nav>
  );
};

export default Header;
