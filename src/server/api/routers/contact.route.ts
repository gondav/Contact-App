import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getContactsHandler } from "../controllers/contact.controller";

const contactRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const response = await getContactsHandler();
    return response;
  }),
});

export default contactRouter;
