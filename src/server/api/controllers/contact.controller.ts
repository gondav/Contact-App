import { TRPCError } from "@trpc/server";
import {
  createContact,
  deleteContact,
  findAllContacts,
  updateContact,
} from "../services/contact.service";
import {
  CreateContactInput,
  ParamsInput,
  UpdateContactInput,
} from "../schemas/contact.schema";

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

export const createContactHandler = async ({
  input,
}: {
  input: CreateContactInput;
}) => {
  try {
    const newContact = await createContact(input);

    if (!newContact) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Contact creation failed",
      });
    }

    return {
      status: "success",
      data: newContact,
    };
  } catch (err: any) {
    throw err;
  }
};

export const updateContactHandler = async ({
  paramsInput,
  input,
}: {
  paramsInput: ParamsInput;
  input: UpdateContactInput;
}) => {
  try {
    const contactId = +paramsInput.contactId;

    const updatedContact = await updateContact(contactId, input.body);
    if (!updatedContact) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Contact with that ID not found",
      });
    }
    return {
      status: "success",
      data: {
        updatedContact,
      },
    };
  } catch (err: any) {
    throw err;
  }
};
