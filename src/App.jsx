import { createSignal } from "solid-js";
import CustomModal from "./components/CustomModal";

function App() {
  const [showModal, setShowModal] = createSignal(false);
  let contentRef;
  return (
    <div class="flex items-center justify-center mt-20">
      <button
        onClick={() => setShowModal(true)}
        class="px-4 py-2 border border-[#E6E8F2] bg-white hover:bg-[#F4F4F5] rounded-md shadow-sm font-medium text-sm whitespace-nowrap h-9"
      >
        Open Modal
      </button>

      <CustomModal
        contentRef={contentRef}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <div class="flex flex-col gap-4">
          <h1>My Modal</h1>
          <p>This is some modal content.</p>
          <p>This is some modal content.</p>
          <p>This is some modal content.</p>
        </div>
      </CustomModal>
    </div>
  );
}

export default App;
