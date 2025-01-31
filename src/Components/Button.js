import "./button.css";
function Button({ children, type }) {
  return (
    <button onClick={onclick} type={type} className="btn">
      {" "}
      {children}{" "}
    </button>
  );
}

export default Button;
