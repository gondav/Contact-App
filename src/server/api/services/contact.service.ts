import { Prisma, Contact } from "@prisma/client";
import { prisma } from "./utils/prisma";

export const findAllContacts = async (select?: Prisma.ContactSelect) => {
  return (await prisma.contact.findMany({
    select,
  })) as Contact[];
};
