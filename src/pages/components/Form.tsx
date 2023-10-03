import DefaultButton from "./DefaultButton";
import addSrc from "../../icons/add.png";
import deleteSrc from "../../icons/delete.png";
import { useRef } from "react";
import { api } from "~/utils/api";
import { DEFAULT_IMG } from "../utils";
import { ContactToUpdate } from "..";

interface FormProps {
  formatType: "POST" | "PUT";
  contactToUpdate: ContactToUpdate;
  onClose: () => void;
}

const Form = ({ formatType, contactToUpdate, onClose }: FormProps) => {
  const createContactMutation = api.contact.create.useMutation();
  const updateContactMutation = api.contact.update.useMutation();
  const heading = formatType === "POST" ? "Add contact" : "Edit contact";

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const { id, ...rest } = contactToUpdate;
  const contact = { ...rest, imageUrl: rest.imageUrl || "" };

  const submitForm = () => {
    if (formatType === "POST") {
      createContactMutation.mutate(contact, {
        onSuccess: () => console.log("Contact added, yeaaaah...."),
        onError: (e) =>
          console.log("Something happened, could not save contact", e.message),
      });
    } else if (formatType === "PUT" && contactToUpdate) {
      updateContactMutation.mutate(
        {
          params: {
            contactId: (contactToUpdate?.id).toString(),
          },
          body: contact,
        },
        {
          onSuccess: () => console.log("Contact updated, yeaaaah...."),
          onError: (e) =>
            console.log(
              "Something happened, could not update contact",
              e.message,
            ),
        },
      );
    }
  };

  const createContactObject = () => {
    if (nameRef.current) {
      contact.name = nameRef.current.value;
    }
    if (phoneRef.current) {
      contact.phoneNumber = phoneRef.current.value;
    }
    if (emailRef.current) {
      contact.email = emailRef.current.value;
    }
    contact.imageUrl = "";

    submitForm();
  };

  return (
    <div className="rounded-lg bg-customGrey-90  p-6 sm:w-[364px]">
      <h2 className="mb-6">{heading}</h2>
      <form>
        <div className="form-wrapper ">
          <div className="picture-field-wrapper mb-6 flex  items-center">
            <img
              src={DEFAULT_IMG}
              alt="Contact picture"
              className="mr-4 w-[88px] rounded-full border-customGrey-70"
            />
            <DefaultButton iconSrc={addSrc.src} label="Add picture" />
            <div className="ml-2 hidden">
              <DefaultButton iconSrc={deleteSrc.src} />
            </div>
          </div>
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="name"
              className="message mb-1 text-white opacity-[.56] "
            >
              Name
            </label>
            <input
              ref={nameRef}
              className="input-field"
              type="text"
              id="name"
              placeholder={contact.name || "Jamie Wright"}
            />
          </div>
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="message mb-1 text-white opacity-[.56]"
            >
              Phone number
            </label>
            <input
              ref={phoneRef}
              className="input-field"
              type="text"
              id="phoneNumber"
              placeholder={contact.phoneNumber || "+01 234 5678"}
            />
          </div>
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="email"
              className="message mb-1 text-white opacity-[.56]"
            >
              Email address
            </label>
            <input
              ref={emailRef}
              className="input-field"
              type="text"
              id="email"
              placeholder={contact.email || "jamie.wright@mail.com"}
            />
          </div>
        </div>
        <div className="btn-container flex items-center justify-end space-x-2 pt-6">
          <DefaultButton
            label="Cancel"
            className="btn-secondary"
            onClick={onClose}
          />
          <DefaultButton
            label="Done"
            onClick={() => {
              createContactObject();
              onClose();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
