import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isPrepared, setIsPrepared] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Story Magic message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:hello@storymagic.example?subject=${subject}&body=${body}`;
    setIsPrepared(true);
  };

  return (
    <div className="story-page relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-10 font-['Fredoka',sans-serif]">
      <div className="absolute left-10 top-24 text-3xl text-yellow-300 animate-pulse">✨</div>
      <div className="absolute right-10 top-16 text-4xl text-orange-300 animate-bounce">☀</div>
      <section className="relative w-full max-w-2xl rounded-[36px] border-4 border-white bg-white p-8 text-center shadow-[0_14px_40px_rgba(30,41,91,0.16)] md:p-12">
        <div className="mb-5 text-6xl">💌</div>
        <h1 className="mb-4 text-4xl font-black text-[#1E295B] md:text-5xl">Contact Us</h1>
        <p className="mx-auto max-w-lg text-lg font-medium leading-relaxed text-[#475569] md:text-xl">
          Have a story idea or a sprinkle of feedback? Send us a message!
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-lg space-y-4 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-sm font-bold text-[#1E295B]">Your name</label>
              <input id="contact-name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 font-medium text-[#1E295B] outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-400" />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-sm font-bold text-[#1E295B]">Email address</label>
              <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 font-medium text-[#1E295B] outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-400" />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1 block text-sm font-bold text-[#1E295B]">Your message</label>
            <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Write your message here..." className="w-full resize-y rounded-2xl border-2 border-slate-200 px-4 py-3 font-medium text-[#1E295B] outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-400" />
          </div>
          <button type="submit" className="w-full rounded-full bg-emerald-400 px-7 py-3 text-lg font-extrabold text-white shadow-[0_5px_0_#15803D] transition-transform hover:-translate-y-1 active:translate-y-0">
            Send message <span aria-hidden="true">✈</span>
          </button>
          {isPrepared && (
            <p className="rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-bold text-emerald-700" role="status">
              Your email app has been opened. Press Send to deliver your message.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
