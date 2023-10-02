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

export const updateContactSchema = object({
  params,
  body: object({
    name: string(),
    phoneNumber: string(),
    email: string(),
    imageUrl: string(),
  }).partial(),
});

export type ParamsInput = TypeOf<typeof params>;
export type CreateContactInput = TypeOf<typeof createContactSchema>;
export type UpdateContactInput = TypeOf<typeof updateContactSchema>;
