import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation/validationSchema.js";
import Input from "../components/Input.jsx";
import { useSelector } from "react-redux";
import { ref } from "yup";
import Checkbox from "../components/Checkbox.jsx";
import Button from "../components/Button.jsx";

const OrderNew = () => {
  const name = useSelector((state) => state.userInfo.userName);

  const [priority, setPriority] = useState(false);

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: name,
      tel: "Please enter your phone number in this field",
      address: "Please enter address in this field",
      checkbox: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

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
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={ref}
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
              ref={ref}
              label="Phone number"
              placeholder="tel"
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
              ref={ref}
              label="Address"
              placeholder=""
            />
          )}
        />

        <Controller
          name="checkbox"
          control={control}
          render={({ field }) => (
            <Checkbox
              label="Want to give yor order priority?"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={ref}
              onClick={setPriority}
            />
          )}
        />

        <Button
          type="submit"
          className="orderButton"
          label="ORDER NOW FOR €"
          func={sum}
        />
      </form>
    </div>
  );
};

export default OrderNew;
