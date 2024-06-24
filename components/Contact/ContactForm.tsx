"use client"

import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import axios from 'axios';

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (isSent) {
      setMessage('Already sent a message. Please wait for a response.');
      return;
    }
    
    setIsDisabled(true);
    try {
      const response = await axios.post('/api/send/', data); // Send data to API
      setMessage(response.data.message); // Set the message state based on the response
      setIsSent(true);
    } catch (error) {
      setMessage('Failed to send email.');
    } finally {
      setIsDisabled(false);
    
    }
  };

  return (
    <div className="flex justify-center mt-2">
      <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"> {/* Added label and input for name */}
            Your Name
          </label>
          <input className="shadow border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" type="text" placeholder="Nome" {...register("name", {required: true})} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> {/* Added label and input for name */}
            E-mail
          </label>
          <input className="shadow border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" type="email" placeholder="E-mail" {...register("email", {required: true})} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input className="shadow border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" type="text" placeholder="Subject" {...register("subject", {required: true})} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
            Body
          </label>
          <textarea className="shadow border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" placeholder="Body" {...register("body", {required: true})} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button disabled={isDisabled} type="submit" variant="outline" className="mt-2 shadow-sm">Send Email</Button>
        </div>
        {message && <p className="mt-2 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default ContactForm;