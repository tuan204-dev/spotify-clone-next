'use client'

import AuthModal from '@/components/AuthModal/AuthModal'
import Modal from '@/components/Modal/Modal'
import UploadModal from '@/components/UploadModal/UploadModal'
import { ReactNode, useEffect, useState } from 'react'

interface ModalProviderProps {
  // children: ReactNode
}

const ModalProvider: React.FC<ModalProviderProps> = (props) => {
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <AuthModal />
      <UploadModal/>
      
    </>
  )
}

export default ModalProvider
