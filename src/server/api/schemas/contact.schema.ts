import { object, string, TypeOf } from "zod";

export const params = object({
  contactId: string(),
});

export const createContactSchema = object({
  name: string({
    required_error: "Name is required",
  }),
  phoneNumber: string(),
  email: string(),
  imageUrl: string(),
});

export type ParamsInput = TypeOf<typeof params>;
export type CreateContactInput = TypeOf<typeof createContactSchema>;
