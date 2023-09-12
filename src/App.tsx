
import Entry from "src/components/Entry";
import Layout from "src/components/Layout";

import Game from "src/components/Game";
import staticModals from "src/constants/modals";
import ModalLayout from "src/components/modal/ModalLayout";

import { useGame } from "src/utils/game";
import { useModal } from "src/utils/modal";
const App = () => {
  const { isEntry } = useGame();
  const { modals } = useModal();
  return (
    <>
      {modals.length > 0 &&
        modals.map((modal: ModalType, i: number) => {
          const openedModal = staticModals.find(
            (staticModal) => staticModal.name === modal.modalName
          );
          if (openedModal)
            return (
              <ModalLayout key={i}>
                <openedModal.element />;
              </ModalLayout>
            );
        })}

      <Layout>{isEntry ? <Entry /> : <Game />}</Layout>
    </>
  );
};

export default App;
