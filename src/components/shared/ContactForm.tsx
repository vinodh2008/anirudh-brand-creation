"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    if (!formData.get("name")) newErrors.name = "Name is required";
    if (!formData.get("phone")) newErrors.phone = "Phone is required";
    if (!formData.get("email")) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.get("email") as string)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.get("projectType")) newErrors.projectType = "Please select a project type";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) return;

    setIsSubmitting(true);
    
    // Simulate API call for production readiness
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    e.currentTarget.reset();

    // In a real implementation, you would route to a /thank-you page here
    // router.push("/thank-you");
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-8">
          Your message has been received. Our team will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-black transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-error focus:ring-error' : 'border-outline-variant/50 focus:ring-secondary-container'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-error focus:ring-error' : 'border-outline-variant/50 focus:ring-secondary-container'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-error focus:ring-error' : 'border-outline-variant/50 focus:ring-secondary-container'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name (Optional)</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="Company Ltd."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
          <select 
            id="projectType" 
            name="projectType" 
            className={`w-full px-4 py-3 rounded-md border ${errors.projectType ? 'border-error focus:ring-error' : 'border-outline-variant/50 focus:ring-secondary-container'} focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white`}
          >
            <option value="">Select a service</option>
            <option value="corporate">Corporate Branding</option>
            <option value="hospital">Hospital Wayfinding</option>
            <option value="retail">Retail Signage</option>
            <option value="real-estate">Real Estate Hoarding</option>
            <option value="led">LED Sign Board</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location (Optional)</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="Hyderabad, Telangana"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4}
          className="w-full px-4 py-3 rounded-md border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary-container focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project requirements..."
        ></textarea>
      </div>

      <div className="mb-8">
        <label htmlFor="referenceImage" className="block text-sm font-medium text-gray-700 mb-2">Upload Reference Image (Optional)</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-outline-variant/50 border-dashed rounded-md hover:border-secondary-container transition-colors bg-surface">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600 justify-center">
              <label htmlFor="referenceImage" className="relative cursor-pointer bg-white rounded-md font-medium text-secondary-container hover:text-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-secondary-container">
                <span>Upload a file</span>
                <input id="referenceImage" name="referenceImage" type="file" className="sr-only" accept="image/*" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-4 rounded-md font-medium hover:bg-secondary-container transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-label-md font-label-md"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
