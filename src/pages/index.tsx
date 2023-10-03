import { api } from "~/utils/api";
import Header from "./components/Header";
import ContactListItem from "./components/ContactListItem";
import Form from "./components/Form";
import { useState } from "react";

export interface ContactToUpdate {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  imageUrl: string | null;
}

export default function Home() {
  const { data, refetch } = api.contact.getAll.useQuery();
  const contacts = data?.data.contacts;
  const [formatType, setFormatType] = useState<"POST" | "PUT">("POST");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [contactToUpdate, setContactToUpdate] = useState<ContactToUpdate>({
    id: 0,
    name: "",
    email: "",
    phoneNumber: "",
    imageUrl: "",
  });

  const handleFetch = () => {
    refetch();
  };

  const handleContactEdit = (contactId: number) => {
    const contactToUpdate = contacts?.find(
      (contact) => contact.id === contactId,
    );
    if (contactToUpdate) {
      const { id, name, email, phoneNumber, imageUrl } = contactToUpdate;

      setContactToUpdate({ id, name, email, phoneNumber, imageUrl });
    }
    setFormatType("PUT");
    setIsFormOpen(true);
  };

  const openFormToAddContact = () => {
    setFormatType("POST");
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <Header onClick={openFormToAddContact} />
      {isFormOpen && (
        <div className="overlay flex justify-center">
          <Form
            formatType={formatType}
            contactToUpdate={contactToUpdate}
            onClose={closeForm}
          />
        </div>
      )}

      <main className="h-full bg-customGrey-100">
        <div className="mx-auto h-full border-customGrey-60 md:w-[48rem] md:border-x">
          <div className="contact-list-container mx-6 pt-3">
            {contacts?.map((contact, i) => (
              <ContactListItem
                key={i}
                contact={contact}
                onRemove={handleFetch}
                onContactEdit={() => handleContactEdit(contact.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
