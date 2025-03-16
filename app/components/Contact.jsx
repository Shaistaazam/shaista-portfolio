import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3425faae-bd23-4114-9dcf-5498c37c8507");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div 
      id='contact' 
      className='w-full px-[12%] py-10 scroll-mt-10 bg-no-repeat bg-center bg-cover'>
      <h4 className='text-center mb-1 text-lg font-serif'>Connect with me</h4>
      <h2 className='text-center text-5xl font-serif mt-3 mb-2'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="w-full max-w-lg mx-auto bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-xl">

        <div className="mb-6">
          <label className="block text-gray-800 font-semibold text-lg mb-2">Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="Enter your name" 
            required 
            className="w-full p-3 text-gray-800 border-2 border-gray-300 rounded-xl bg-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-semibold text-lg mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            required 
            className="w-full p-3 text-gray-800 border-2 border-gray-300 rounded-xl bg-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-semibold text-lg mb-2">Message</label>
          <textarea 
            name="message"
            rows="5" 
            placeholder="Enter your message..." 
            required 
            className="w-full p-4 text-gray-800 border-2 border-gray-300 rounded-xl bg-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-3/4 mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-600 hover:to-indigo-600 
          text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-100"
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  );
}

export default Contact;
