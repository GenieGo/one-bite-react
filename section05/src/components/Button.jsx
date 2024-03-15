const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log("buttonClick", text);
    console.log("e", e);
  };
  return (
    <button
      style={{ color: color }}
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
    >
      {text || "Button"}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
