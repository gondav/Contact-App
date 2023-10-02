import { Prisma, Contact } from "@prisma/client";
import { prisma } from "./utils/prisma";

export const findAllContacts = async (select?: Prisma.ContactSelect) => {
  return (await prisma.contact.findMany({
    select,
  })) as Contact[];
};

export const deleteContact = async (where: Prisma.ContactWhereUniqueInput) => {
  return await prisma.contact.delete({ where });
};

export const createContact = async (input: Prisma.ContactCreateInput) => {
  return (await prisma.contact.create({
    data: input,
  })) as Contact;
};

export const updateContact = async (
  contactId: number,
  input: Prisma.ContactUpdateInput,
) => {
  return (await prisma.contact.update({
    where: { id: contactId },
    data: input,
  })) as Contact;
};
