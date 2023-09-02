import { IoMdClose } from "react-icons/io";
import { useSite } from "../context/AppProvider";
const Modal = ({
  closeBtn,
  headerTitle,
  bodyContent,
  footerContent,
}: ModalData) => {
  const { closeModal } = useSite();
  return (
    <div className="fixed z-50 bg-black/20">
      <div className="p-10">
        <div>
          <h3>{headerTitle}</h3>
          {closeBtn && (
            <span onClick={() => closeModal()}>
              <IoMdClose />
            </span>
          )}
        </div>

        {bodyContent ? bodyContent : null}

        {footerContent ? footerContent : null}
      </div>
    </div>
  );
};

export default Modal;
