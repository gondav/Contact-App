import editSrc from "../../icons/settings.png";
import favoriteSrc from "../../icons/favourite.png";
import removeSrc from "../../icons/delete.png";

interface ModalProps {
  isOpen: boolean;
}

const Modal = ({ isOpen }: ModalProps) => {
  if (!isOpen) return null;

  const listItemList = [
    {
      img: editSrc,
      name: "Edit",
    },
    {
      img: favoriteSrc,
      name: "Favourite",
    },
    {
      img: removeSrc,
      name: "Remove",
    },
  ];

  return (
    <div className="modal absolute  bottom-0 right-0 flex ">
      <ul className="w-[219px]">
        {listItemList.map((listItem, i) => {
          return (
            <li
              key={i}
              className="flex w-full cursor-pointer px-2.5 py-3 hover:bg-customGrey-70"
            >
              <img
                className="mr-3 h-5 w-5"
                src={listItem.img.src}
                alt={listItem.name}
              />
              <p>{listItem.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Modal;
