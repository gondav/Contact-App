import muteSrc from "../../icons/mute.png";
import callSrc from "../../icons/call.png";
import moreSrc from "../../icons/more.png";
import Modal from "./Modal";
import DefaultButton from "./DefaultButton";
import { useState } from "react";
import { api } from "~/utils/api";
import { DEFAULT_IMG } from "../utils";

interface Contact {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  imageUrl: string | null;
}

interface ContactListItemProps {
  contact: Contact;
  onRemove: () => void;
  onContactEdit: () => void;
}

const ContactListItem = ({
  contact,
  onRemove,
  onContactEdit,
}: ContactListItemProps) => {
  const { name, phoneNumber, imageUrl } = contact || {};
  const imageSrc = imageUrl || DEFAULT_IMG;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const deleteContactMutation = api.contact.delete.useMutation();

  const handleRemoveContact = () => {
    toggleModal();
    deleteContactMutation.mutate(
      {
        contactId: contact.id.toString(),
      },
      {
        onSuccess: () => {
          onRemove();
        },
        onError: (e) => {
          console.log("Something went wrong...", e.message);
        },
      },
    );
  };

  return (
    <div className="contact-container group relative  flex justify-between">
      <div className="contact-left flex items-center py-3 ">
        <img
          className="mr-4 h-10 w-10 rounded-full border border-customGrey-60 object-cover"
          src={imageSrc}
          alt="Contact picture"
        />
        <div className="contact-info flex  flex-col justify-between">
          <h3 className="mt-0">{name ?? ""}</h3>
          <p className="message">{phoneNumber ?? ""}</p>
        </div>
      </div>
      <div className="contact-right  flex items-center  opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <DefaultButton iconSrc={muteSrc.src} className="btn-secondary" />
        <DefaultButton iconSrc={callSrc.src} className="btn-secondary" />
        <DefaultButton
          iconSrc={moreSrc.src}
          className="btn-secondary"
          onClick={toggleModal}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRemove={handleRemoveContact}
        onEdit={onContactEdit}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default ContactListItem;
