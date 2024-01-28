import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { value, onChange, onBlur, name, label, placeholder, error } = props;

  return (
    <>
      <label className="orderFormLabel">
        {label}
        <input
          className="orderFormInput"
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          name={name}
          placeholder={placeholder}
        />
      </label>
      {error && <p className="formError">{error.message}</p>}
    </>
  );
});

export default Input;
