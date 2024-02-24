const Modal = ({ contentRef, showModal, setShowModal, children }) => {
  const closeModal = () => setShowModal(!showModal());

  return (
    <div
      id="modal"
      class="fixed inset-0 size-full bg-black/60 z-[999]"
      style={{ display: showModal() ? "block" : "none" }}
    >
      <div id="modal-overlay" class="size-full" onClick={closeModal}></div>
      <div
        id="modal-content"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-[#E6E8F2] w-full max-w-[20rem] rounded-lg shadow-lg z-[999]"
        ref={contentRef}
      >
        <span
          id="close-button"
          class="float-right cursor-pointer text-sm"
          onClick={closeModal}
        >
          &times;
        </span>
        {children}
        asdasdsa
      </div>
    </div>
  );
};

export default Modal;
