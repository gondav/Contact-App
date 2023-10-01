import { TRPCError } from "@trpc/server";
import { findAllContacts } from "../services/contact.service";

export const getContactsHandler = async () => {
  try {
    const contacts = await findAllContacts();

    return {
      status: "success",
      data: {
        contacts,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    });
  }
};
