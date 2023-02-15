import "./button.css";

export const Button = ({ text, value, size, color }) => {
  return (
    <button className={`button ${size} ${color}`} value={value}>
      {text}
    </button>
  );
};
