import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  deleteContactHandler,
  getContactsHandler,
} from "../controllers/contact.controller";
import { params } from "../schemas/contact.schema";

const contactRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const response = await getContactsHandler();
    return response;
  }),
  delete: publicProcedure
    .input(params)
    .mutation(({ input }) => deleteContactHandler({ paramsInput: input })),
});

export default contactRouter;
