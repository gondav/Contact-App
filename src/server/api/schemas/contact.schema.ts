import { object, string, TypeOf } from "zod";

export const params = object({
  contactId: string(),
});

export type ParamsInput = TypeOf<typeof params>;
