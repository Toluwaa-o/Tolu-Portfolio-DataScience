const HamburgerMenu = (props) => {
  return (
    <div
      onClick={() => props.setShow(!props.show)}
      className={`nav_icon ${props.show && `open`}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;
