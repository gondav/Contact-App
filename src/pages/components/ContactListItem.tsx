import muteSrc from "../../icons/mute.png";
import callSrc from "../../icons/call.png";
import moreSrc from "../../icons/more.png";
import Modal from "./Modal";
import { useState } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  imageUrl: string | null;
}

interface ContactListItemProps {
  contact: Contact;
}

const ContactListItem = ({ contact }: ContactListItemProps) => {
  const { name, phoneNumber, imageUrl } = contact || {};
  const defaultImageSrc =
    "https://ux-contact-profile-pictures.s3.eu-north-1.amazonaws.com/Default.png";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="contact-container group relative  flex justify-between">
      <div className="contact-left flex items-center py-3 ">
        <img
          className="mr-4 h-10 w-10 rounded-full border border-customGrey-60 object-cover"
          src={imageUrl ?? defaultImageSrc}
          alt="Contact picture"
        />
        <div className="contact-info flex  flex-col justify-between">
          <h3 className="mt-0">{name ?? ""}</h3>
          <p className="message">{phoneNumber ?? ""}</p>
        </div>
      </div>
      <div className="contact-right  flex items-center gap-x-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <img className="h-5 w-5" src={muteSrc.src} alt="Mute" />

        <img className="h-5 w-5" src={callSrc.src} alt="Call" />

        <img
          className="h-5 w-5 cursor-pointer"
          src={moreSrc.src}
          alt="More"
          onClick={toggleModal}
        />
      </div>
      <Modal isOpen={isModalOpen} />
    </div>
  );
};

export default ContactListItem;
