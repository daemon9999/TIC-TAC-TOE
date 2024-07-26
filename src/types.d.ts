type ModalType = {
  modalName: string,
  data?: any
};


type StaticModalType = {
  name: string,
  element: () => React.ReactNode
}


type User = {
  id: number,
  name: string | undefined,
  sign: string | null ,
  color: string | undefined
}