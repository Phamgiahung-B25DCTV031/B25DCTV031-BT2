function Button({ label, color = "normal", onClick, className = "" }) {
  return (
    <button
      className={`btn ${color} ${className}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
