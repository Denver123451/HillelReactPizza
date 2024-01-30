const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, className, label, func } = props;
  return (
    <button type={type} className={className}>
      {label} {func()}
    </button>
  );
};
export default Button;
