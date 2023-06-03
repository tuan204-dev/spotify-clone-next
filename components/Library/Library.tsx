'use client'

import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import useUploadModal from '@/hooks/useUploadModal'

interface LibraryProps {}

const Library: React.FC<LibraryProps> = (props) => {
  const authModal = useAuthModal()
  const uploadModal = useUploadModal()
  const { user } = useUser()

  const onClick = () => {
    if (!user) {
      return authModal.onOpen()
    }

    //Todo: check subscription

    return uploadModal.onOpen()
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4 ">
        <div className="flex items-center gap-x-2">
          <TbPlaylist />
          <p className="font-medium text-neutral-400 text-md">
            Your Playlist
          </p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={onClick}
          className="transition cursor-pointer text-neutral-400 hover:text-white"
        />
      </div>
      <div className="flex flex-col px-3 mt-4 gap-y-2">
        List of Songs!
      </div>
    </div>
  )
}

export default Library
