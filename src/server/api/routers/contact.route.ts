import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  deleteContactHandler,
  getContactsHandler,
  createContactHandler,
  updateContactHandler,
} from "../controllers/contact.controller";
import {
  createContactSchema,
  params,
  updateContactSchema,
} from "../schemas/contact.schema";

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
  update: publicProcedure.input(updateContactSchema).mutation(({ input }) =>
    updateContactHandler({
      paramsInput: input.params,
      input,
    }),
  ),
});

export default contactRouter;
