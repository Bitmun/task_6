import * as yup from "yup";
import { petSchema } from "./petScheme";

export const cardSchema = yup.object({
  username: yup.string().max(12).required("Username is required"),
  firstName: yup.string().max(12).required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  gender: yup.string().required("Gender is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required"),
  education: yup.bool().required("Required"),
  highestEducation: yup.string().when("education", (education, schema) => {
    if (education[0]) {
      return schema.required("Select place");
    }
    return schema;
  }),
  schoolName: yup.string().when("education", (education, schema) => {
    if (education[0]) {
      return schema.required("Enter name");
    }
    return schema;
  }),
  email: yup.string().email().required("Email is required"),
  phoneNumber: yup.string(),
  pets: yup.array().of(petSchema),
});
