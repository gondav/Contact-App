import { api } from "~/utils/api";
import Header from "./components/Header";

export default function Home() {
  const contacts = api.contact.getAll.useQuery();

  return (
    <>
      <Header />
    </>
  );
}
