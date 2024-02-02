import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation/validationSchema.js";
import Input from "../components/Input.jsx";
import { useDispatch, useSelector } from "react-redux";
import { ref } from "yup";
import Checkbox from "../components/Checkbox.jsx";
import Button from "../components/Button.jsx";
import { backendURL } from "../constans/constants.js";
import { useNavigate } from "react-router-dom";
import { addOrderDetails } from "../redux/slices/orderDetailsSlice.js";

const OrderNew = () => {
  const name = useSelector((state) => state.userInfo.userName);
  const items = useSelector((state) => state.cart.items);
  const [priority, setPriority] = useState(false);
  const [fail, setFail] = useState(false);
  const navigate = useNavigate();
  const dispath = useDispatch();

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
    const cartData = [];

    items.forEach((item) => {
      let newObj = {
        name: item.name,
        pizzaId: item.id,
        quantity: item.qty,
        totalPrice: item.qty * item.unitPrice,
        unitPrice: item.unitPrice,
      };
      cartData.push(newObj);
    });

    const postData = {
      address: data.address,
      customer: data.name,
      phone: data.tel,
      priority: data.checkbox,
      position: "",
      cart: cartData,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const request = async () => {
      try {
        const res = await fetch(backendURL, options);

        if (!res.ok) {
          console.log("error");
          setFail(true);
          throw new Error("failed to fetch");
        }
        const data = await res.json();
        if (data.status === "success") {
          dispath(addOrderDetails(data));
          navigate(`${data.data.id}`);
        } else {
          setFail(true);
          console.log(data, "fail");
        }
      } catch (e) {
        console.log(e.message);
        return Promise.reject();
      }
    };
    request();
    reset();
  };

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
      {fail ? (
        <div className="downloadError"> Something went wrong </div>
      ) : (
        <div className="downloadError"> </div>
      )}
    </div>
  );
};

export default OrderNew;
