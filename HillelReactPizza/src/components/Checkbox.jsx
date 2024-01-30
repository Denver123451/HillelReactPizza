const Checkbox = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label, value, onClick, onChange, onBlur, ref } = props;
  return (
    <>
      <label className="checkbox">
        <input
          type="checkbox"
          className="orderFormCheckbox"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          onClick={(e) => {
            onClick(e.target.checked);
          }}
        />
        {label}
      </label>
    </>
  );
};

export default Checkbox;
