import { useSelector } from "react-redux";
import store, { RootState } from "src/store";
import { appendModal, deleteModal } from "src/store/modalSlice.ts";

export const useModal = () =>
  useSelector((state: RootState) => state.modal);
export const handleAppendModal = (modalName: string, data: any = false) =>
  store.dispatch(appendModal({ modalName, data }));
export const handleDeleteModal = () => store.dispatch(deleteModal());


