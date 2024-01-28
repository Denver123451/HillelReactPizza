import { useForm, Controller } from "react-hook-form";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserInfoContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation/validationSchema.js";
import Input from "../components/Input.jsx";
import { useSelector } from "react-redux";

const OrderNew = () => {
  const { value } = useContext(UserContext);

  const [priority, setPriority] = useState(false);

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: value,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const inputRef = useRef(null);

  const items = useSelector((state) => state.cart.items);

  const sum = () => {
    let price = 0;

    items.forEach((item) => {
      price += item.qty * item.unitPrice;
    });
    if (priority) {
      price += 8;
    }

    return price;
  };

  return (
    <div className="loginPageWrapper">
      <div className="orderPageTitle">Ready to order? Lets go!</div>

      <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              name="name"
              error={error}
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={inputRef}
              label="First Name"
              placeholder="name"
            />
          )}
        />

        <Controller
          name="tel"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              name="tel"
              error={error}
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={inputRef}
              label="Phone number"
              placeholder=""
            />
          )}
        />

        <Controller
          name="address"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              name="address"
              error={error}
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={inputRef}
              label="Address"
              placeholder=""
            />
          )}
        />

        <label className="orderFormLabelCheckbox">
          <input
            type="checkbox"
            {...register("checkbox")}
            className="orderFormCheckbox"
            onClick={(e) => {
              setPriority(e.target.checked);
            }}
          />
          Want to give yor order priority?
        </label>

        <button type="submit" className="orderButton">
          ORDER NOW FOR {sum()}
        </button>
      </form>
    </div>
  );
};

export default OrderNew;
