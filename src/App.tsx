import { useSite } from "src/context/AppProvider"
import Entry from "src/components/Entry"
import Layout from "src/components/Layout"
import Modal from "src/components/Modal"
import Game from "src/components/Game"



const App = () => {
  const {isEntry, modals} = useSite()

  return (
    <>
    {modals.length > 0 && modals.map(({closeBtn,headerTitle,bodyContent,footerContent}: ModalData, index: number) => (
      <Modal closeBtn={closeBtn} headerTitle={headerTitle} bodyContent={bodyContent} footerContent={footerContent} key={index}/>
    ))}

      <Layout>
        {isEntry ? <Entry/> : <Game/>}
      </Layout>
    </>
  )
}

export default App