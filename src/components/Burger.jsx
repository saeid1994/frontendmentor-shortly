const Burger = (props) => {
  return (
    <div
      id="nav-icon"
      className={`${props.status ? "open" : "close"} ${props.className}`}
      onClick={props.onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
