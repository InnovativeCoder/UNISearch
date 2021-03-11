/* Navbar logic */
export const Navbar = (props) => {
  const color = props.color ? props.color : 'bg-black';
  const textColor = props.textColor ? props.textColor : 'text-white';
  return (
    <nav
      className={`${color} ${textColor} font-light text-white md:relative md:flex md:items-center shadow py-2 px-4 md:flex md:flex-row md:justify-start`}
    >
      {props.children}
    </nav>
  );
};

Navbar.Brand = ({ children }) => (
  <div className="inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400">
    <strong>{children}</strong>
  </div>
);

Navbar.Toggler = ({ toggle }) => (
  <button
    className="float-right block md:hidden pt-1.5 text-3xl focus:outline-none focus:shadow"
    onClick={toggle}
  >
    &#8801;
  </button>
);

Navbar.Collapse = ({ children, isOpen }) => {
  const className = isOpen
    ? 'visible opacity-1 transition-all ease-out duration-500 md:transition-none'
    : 'invisible h-0 opacity-0 md:visible md:opacity-100 md:h-auto ';
  return (
    <div className={`${className} md:flex-grow md:items-center md:flex`}>
      {children}
    </div>
  );
};

Navbar.Nav = ({ children, left, right, center }) => {
  const className = left
    ? 'block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0'
    : right
    ? 'block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0'
    : center
    ? 'block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0 md:mx-auto '
    : 'block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0';
  return <ul className={className}>{children}</ul>;
};

Navbar.Item = ({ children }) => <li>{children}</li>;

Navbar.Link = ({ children }) => (
  <div className="cursor-pointer py-1.5 md:py-1 px-4 md:px-2 hover:text-gray-400 font-medium">
    {children}
  </div>
);