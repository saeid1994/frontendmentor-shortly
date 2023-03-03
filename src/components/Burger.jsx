const Burger = (props) => {
  
  return (
    <div
      id="nav-icon"
      className={props.status ? "open" : "close"}
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