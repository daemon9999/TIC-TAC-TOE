import React from 'react'


interface ModalLayoutProps {
    children: React.ReactNode
}

const ModalLayout = ({children}: ModalLayoutProps) => {
  return (
    <div className='fixed z-50 w-full h-full bg-black/30 flex items-center justify-center'>
        {children}
    </div>
  )
}

export default ModalLayout