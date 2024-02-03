import { useController } from "react-hook-form";

const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, label } = props;

  const { field, fieldState } = useController(props);

  return (
    <>
      <label className="orderFormLabel">
        {label}
        <input className="orderFormInput" type="text" name={name} {...field} />
      </label>
      {fieldState.error && (
        <p className="formError">{fieldState.error.message}</p>
      )}
    </>
  );
};

export default Input;
