import * as yup from "yup";
import { petSchema } from "./petScheme";

export const cardSchema = yup.object({
  username: yup.string().max(12).required("Required"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  gender: yup.string().required("Required"),
  age: yup.number().required("Required"),
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
  email: yup.string().email().required("Required"),
  phoneNumber: yup.string(),
  pets: yup.array().of(petSchema),
});
