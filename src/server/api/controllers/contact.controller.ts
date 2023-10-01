import { TRPCError } from "@trpc/server";
import { deleteContact, findAllContacts } from "../services/contact.service";
import { ParamsInput } from "../schemas/contact.schema";

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

export const deleteContactHandler = async ({
  paramsInput,
}: {
  paramsInput: ParamsInput;
}) => {
  try {
    const contact = await deleteContact({
      id: +paramsInput.contactId,
    });

    if (!contact) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: `Contact with id ${paramsInput.contactId} not found`,
      });
    }

    return {
      status: "success",
      data: null,
    };
  } catch (err: any) {
    throw err;
  }
};
