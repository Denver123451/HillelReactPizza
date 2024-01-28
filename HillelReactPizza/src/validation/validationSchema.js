import * as yup from "yup";

const phoneRegExp = /^[0-9]{10}$/;

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(3, "must be at least 3 characters long")
    .max(20, "must be no more than 20 characters"),
  tel: yup.string().matches(phoneRegExp, "enter your phone number").required(),
  address: yup
    .string()
    .required()
    .min(3, "must be at least 3 characters long")
    .max(20, "must be no more than 20 characters"),
});
