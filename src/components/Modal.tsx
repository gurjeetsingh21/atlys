import ModalProps from "../models/ModalProps";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`modal-show border-gradient fixed rounded-[8px] max-w-[500px] w-[100%] px-[15px] py-[25px] bg-[#27292D] translate-x-[-50%] translate-y-[-50%]`}
    >
      <div className="absolute right-[20px] top-[20px] p-[5px] bg-[#131319] rounded-full h-[25px] w-[25px] flex justify-center">
        <div
          className="text-[10px] text-[#FFFFFF] cursor-pointer"
          onClick={onClose}
        >
          ╳
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Modal;
