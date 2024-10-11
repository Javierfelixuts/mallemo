import React, { useState, type FormEvent } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { SvgSpinners90RingWithBg } from './icons/loaderSvg';

const ContactForm = () => {
  
  const initFormData = {
    name: '',
    email: '',
    message: '',
  }
  const [formData, setFormData] = useState(initFormData);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormData(initFormData)
    try {
      const response = await axios.post('/send-email.php', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el correo');
    }
    finally{
      setIsLoading(false)
    }
  };

  return (
    <div className={`relative px-4 md:px-6 md:py-16 text-default max-w-7xl mx-auto py-0 lg:py-0 ${isLoading ? 'customOpacity' : '' }`}>
     {
      isLoading &&
       <SvgSpinners90RingWithBg className='spinner'/>
     }
      <div
        className="text-center flex justify-start max-w-xl mx-auto dark:bg-slate-900 shadow sm:p-6 lg:p-8 w-full backdrop-blur rounded-tr-lg rounded-tl-lg"
      >
        
        <div className="text-left m-4 text-sm">
          <h1 className="font-bold text-left text-4xl mb-2">CONTACT US</h1>
          <address>8230 E Broadway Blvd Suite E5, Tucson, AZ 85710</address>
          <p>manuel@mallemollc.com</p>
          <span>Phone:</span><span> (520) 585-6477</span>
          <p>Fax: (520) 208-8019</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-xl mx-auto  backdrop-blur border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:px-6 lg:px-8 w-full">
          <input className='py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900' type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
        </div>
        <div className="flex flex-col max-w-xl mx-auto  backdrop-blur border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:px-6 lg:px-8 w-full">
          <input className='py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        </div>
        <div className="flex flex-col max-w-xl mx-auto  backdrop-blur border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:px-6 lg:px-8 w-full">
          <textarea className='py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900' name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" required />
        </div>

        <div className="items-start flex max-w-xl mx-auto  backdrop-blur border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:px-6 lg:px-8 w-full"  > 
          <div className="flex mt-0.5"  >
          <input id="disclaimer" name="disclaimer" type="checkbox" className="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" />
        </div>
          <div className="ml-3" >
            <label htmlFor="disclaimer" className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400" data-astro-source-loc="62:111"> By submitting this contact form, you acknowledge and agree to the collection of your personal information. </label>
          </div>
        </div>

        <div className="flex flex-col max-w-xl mx-auto  backdrop-blur border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:px-6 lg:px-8 w-full">
          <button className='btn-primary' type="submit" disabled={isLoading}>Contact us</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
