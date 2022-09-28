import CloseIcon from '../icons/CloseIcon';

type ModalProps = {
  children: React.ReactNode;
  closeModal: any;
  className?: string;
};

function Modal({ children, closeModal, className }: ModalProps) {
  return (
    <div
      className={`fixed left-0 top-0 w-screen h-screen p-4 bg-slate-50 overflow-scroll z-10 ${
        className !== undefined ? className : ''
      }`}
    >
      <button
        className="absolute right-0 top-0 mr-2 mt-2 p-2"
        onClick={closeModal}
      >
        <CloseIcon />
      </button>
      {children}
    </div>
  );
}

export default Modal;
