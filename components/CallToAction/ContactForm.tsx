'use client'
import React, { useState, FormEvent } from 'react'
import { supabase } from '@/components/createClient'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DOMPurify from 'dompurify'

interface ContactFormProps {
  // handleClose: () => void;
}

interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState<boolean>(false)

  const sanitizeData = (data: FormData): FormData => {
    return {
      name: DOMPurify.sanitize(data.name),
      email: DOMPurify.sanitize(data.email),
      message: DOMPurify.sanitize(data.message)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.email || !formData.message) {
      toast.error('Email and Message fields are required.')
      return
    }

    setLoading(true)

    const sanitizedData = sanitizeData(formData)

    const { error } = await supabase.from('contact_form').insert([
      {
        name: sanitizedData.name,
        email: sanitizedData.email,
        message: sanitizedData.message
      }
    ])

    setLoading(false)

    if (error) {
      toast.error('An error occurred. Please try again.')
      console.error('Supabase Error:', error)
    } else {
      toast.success('Message sent successfully!')
      // handleClose();
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='mt-10 flex max-w-[800px] grid-cols-2 flex-col gap-4 rounded-lg py-2 md:!grid md:px-8'
      >
        <div className='form-row col-start-1 col-end-2'>
          <div className='input-data'>
            <input
              type='text'
              name='name'
              className='text-headingText dark:text-headingDarkText'
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <div className='underline'></div>
            <label htmlFor=''>Name</label>
          </div>
        </div>
        <div className='form-row col-start-1 col-end-2'>
          <div className='input-data'>
            <input
              type='email'
              name='email'
              className='text-headingText dark:text-headingDarkText'
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <div className='underline'></div>
            <label htmlFor=''>Email</label>
          </div>
        </div>
        <div className='form-row col-start-2 col-end-3 row-start-1 row-end-3'>
          <div className='input-data textarea'>
            <textarea
              name='message'
              className='text-headingText dark:text-headingDarkText'
              value={formData.message}
              onChange={e =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
            <div className='underline'></div>
            <label htmlFor=''>Write your message</label>
          </div>
        </div>

        <button
          className='cursor-design col-start-1 col-end-3 mt-10 flex flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor bg-opacity-10 px-8 py-2 text-center text-headingText backdrop-blur-xl dark:text-headingDarkText'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </>
  )
}

export default ContactForm
