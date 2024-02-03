import { useController } from "react-hook-form";

const Checkbox = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label, onClick } = props;
  const { field } = useController(props);
  return (
    <>
      <label className="checkbox">
        <input
          type="checkbox"
          className="orderFormCheckbox"
          {...field}
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
