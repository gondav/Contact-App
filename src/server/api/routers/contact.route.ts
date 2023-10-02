import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  deleteContactHandler,
  getContactsHandler,
  createContactHandler,
} from "../controllers/contact.controller";
import { createContactSchema, params } from "../schemas/contact.schema";

const contactRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const response = await getContactsHandler();
    return response;
  }),
  delete: publicProcedure
    .input(params)
    .mutation(({ input }) => deleteContactHandler({ paramsInput: input })),
  create: publicProcedure
    .input(createContactSchema)
    .mutation(({ input }) => createContactHandler({ input })),
});

export default contactRouter;
