import { Metadata } from "next";
import { ContactForm } from "@/components/shared/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description: "Contact Anirudh Brand Creation for premium signage solutions in Hyderabad. Get a free quote for LED boards, wayfinding, and corporate branding.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-50 py-20 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Let's Build Something Great</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your brand's physical presence? Fill out the form below or reach out to us directly.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information Sidebar */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1">Our Headquarters</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Hyderabad, Telangana<br />
                      India, 500001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-1">For Sales & Inquiries:</p>
                    <a href="/contact" className="text-accent font-semibold hover:text-blue-800 transition-colors block">
                      Contact us for details
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-1">Send us your requirements:</p>
                    <a href="mailto:info@anirudhbrand.com" className="text-accent font-semibold hover:text-blue-800 transition-colors block">
                      info@anirudhbrand.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Monday - Saturday<br />
                      9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
          [Google Maps Embed]
        </div>
      </section>
    </>
  );
}
