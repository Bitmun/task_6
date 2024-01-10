import * as yup from "yup";

export const petSchema = yup.object({
  species: yup.string().required("Required"),
  name: yup.string().required("Required"),
});
