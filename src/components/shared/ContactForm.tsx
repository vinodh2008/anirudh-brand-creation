"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", requirement: "", location: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", phone: "", requirement: "", location: "", message: "" });
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gray-100 p-10 text-center rounded-lg">
        <span className="material-symbols-outlined text-5xl text-[#25D366] mb-4 block">check_circle</span>
        <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">We&apos;ll call you within 15–30 minutes.</p>
        <button onClick={() => setSubmitted(false)} className="text-[#fe6b00] font-semibold text-sm uppercase tracking-wider hover:underline">
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8 rounded-lg shadow-sm">
      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Name *</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-[#f5f5f5] border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-base"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Phone Number *</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 bg-[#f5f5f5] border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-base"
          />
        </div>
        <div>
          <label htmlFor="contact-requirement" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Requirement</label>
          <select
            id="contact-requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#f5f5f5] border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-base"
          >
            <option value="">Select Requirement</option>
            <option value="led-sign-board">LED Sign Board</option>
            <option value="hospital-signage">Hospital Signage</option>
            <option value="reception-signage">Reception Signage</option>
            <option value="wayfinding">Wayfinding Signage</option>
            <option value="pylon-sign">Pylon Sign Board</option>
            <option value="acp-cladding">ACP Cladding</option>
            <option value="3d-letters">3D Letters</option>
            <option value="restaurant-signage">Restaurant Signage</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-location" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Location <span className="text-gray-400">(optional)</span></label>
          <input
            type="text"
            id="contact-location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City / Area"
            className="w-full px-4 py-3 bg-[#f5f5f5] border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-base"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Message <span className="text-gray-400">(optional)</span></label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 bg-[#f5f5f5] border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-base resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-4 font-semibold text-sm uppercase tracking-wider hover:bg-[#fe6b00] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <><span className="material-symbols-outlined animate-spin text-base">progress_activity</span> Submitting...</>
          ) : (
            <><span className="material-symbols-outlined text-base">send</span> Submit Inquiry</>
          )}
        </button>
      </div>
    </form>
  );
}
