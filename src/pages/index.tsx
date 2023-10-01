import { api } from "~/utils/api";
import Header from "./components/Header";
import ContactListItem from "./components/ContactListItem";

export default function Home() {
  const contacts = api.contact.getAll.useQuery();
  const contactList = contacts.data?.data.contacts;

  return (
    <>
      <Header />
      <main className="h-full ">
        <div className="mx-auto h-full border-customGrey-60 md:w-[48rem] md:border-x">
          <div className="contact-list-container mx-6 pt-3">
            {contactList?.map((contact, i) => (
              <ContactListItem key={i} contact={contact} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
