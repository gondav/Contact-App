import { api } from "~/utils/api";

export default function Home() {
  const contacts = api.contact.getAll.useQuery();

  return <></>;
}
