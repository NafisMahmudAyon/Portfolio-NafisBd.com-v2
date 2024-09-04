'use client'
import React, { useState, FormEvent } from 'react';
import { supabase } from "@/components/createClient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DOMPurify from 'dompurify';

interface ContactFormProps {
  // handleClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState<boolean>(false);

  const sanitizeData = (data: FormData): FormData => {
    return {
      name: DOMPurify.sanitize(data.name),
      email: DOMPurify.sanitize(data.email),
      message: DOMPurify.sanitize(data.message),
    };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      toast.error("Email and Message fields are required.");
      return;
    }

    setLoading(true);

    const sanitizedData = sanitizeData(formData);

    const { error } = await supabase
      .from('contact_form')
      .insert([
        {
          name: sanitizedData.name,
          email: sanitizedData.email,
          message: sanitizedData.message,
        }
      ]);

    setLoading(false);

    if (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Supabase Error:", error);
    } else {
      toast.success("Message sent successfully!");
      // handleClose();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 mt-10 max-w-[800px] mx-auto   px-8 py-2 rounded-lg '>

        <div className="form-row col-start-1 col-end-2">
          <div className="input-data">
            <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <div className="underline"></div>
            <label htmlFor="">Name</label>
          </div>
        </div>
        <div className="form-row col-start-1 col-end-2">
          <div className="input-data">
            <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <div className="underline"></div>
            <label htmlFor="">Email</label>
          </div>
        </div>
        <div className="form-row col-start-2 col-end-3 row-start-1 row-end-3">
          <div className="input-data textarea">
            <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
            <div className="underline"></div>
            <label htmlFor="">Write your message</label>
          </div>
        </div>








        <button className='col-start-1 col-end-3 mt-10 backdrop-blur-xl text-center bg-primaryColor bg-opacity-10 px-8 py-2 flex items-center justify-center flex-col rounded-lg border border-primaryColor cursor-design' type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
