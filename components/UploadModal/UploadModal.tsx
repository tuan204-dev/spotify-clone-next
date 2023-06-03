import useUploadModal from '@/hooks/useUploadModal'
import Modal from '../Modal/Modal'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Input from '../Input/Input'

const UploadModal = () => {
  const [isLoading, setLoading] = useState()
  const uploadModal = useUploadModal()
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: '',
      title: '',
      song: null,
      image: null,
    },
  })

  const onChange = (open: boolean) => {
    if (!open) {
      reset()
      uploadModal.onClose()
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    //upload to supabase
  }

  return (
    <Modal
      title="Upload a song"
      description="Upload a mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
      > 
        <Input
          id='title'
          disabled={isLoading}
          {...register('title', { required: true })}
          placeholder='Song title'
        />
      </form>
    </Modal>
  )
}

export default UploadModal
