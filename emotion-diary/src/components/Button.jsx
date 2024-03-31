import "./Button.scss";

const Button = ({ type, text = "DEFAULT", onClick }) => {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
