import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Updated import


// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

import { fadeIn } from '../../variants';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your EmailJS service, template, and user IDs
    const serviceId = 'service_0tpp66w';
    const templateId = 'template_u7rgkpu';
    const userId = 'necYrpfkWsoLboOTq';

    try {
      const response = await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        to_name: 'Connor',
        from_email: form.email,
        to_email: 'connormacd9@gmail.com',
        message: form.message,
      }, userId);

      setLoading(false);
      console.log('Email sent successfully:', response);

      alert('Thank you. We will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      console.error('Email error:', error);

      alert('Something went wrong.');
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-8 text-center xl:text-center flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
  variants={fadeIn('up', 0.2)}
  initial='hidden'
  animate='show'
  exit='hidden'
  className='h2 xl:mt-6 mt-20 w-full text-center xl:text-center pt-[30px]'
>
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          <div className="text-center">
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-8 max-w-[400px] mx-auto'
            >
              Contact us, and we&apos;ll craft a tailored quote for your needs within 24 hours. Include any important details or preferences we should know to provide you with the best possible quote.
            </motion.p>
          </div>

          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='Name' className='input bg-black/50' name='name' value={form.name} onChange={handleChange} required />
              <input type='text' placeholder='Email' className='input bg-black/50' name='email' value={form.email} onChange={handleChange} required />
            </div>
            <input type='text' placeholder='Subject' className='input bg-black/50' name='subject' value={form.subject} onChange={handleChange} />
            <textarea placeholder='Share the specifics of the service you are requesting' className='textarea bg-black/50' name='message' value={form.message} onChange={handleChange} required></textarea>
            <button type="submit" className='bg-black/50 mb-24 btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
  <span className={`absolute transition-all duration-500 ${loading ? 'opacity-0 pointer-events-none' : ''} group-hover:opacity-0`}>
    {loading ? 'Sending...' : 'Let\'s talk'}
  </span>
  <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500">
    Send
  </span>
</button>

          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
