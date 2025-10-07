import React from "react";

export default function Contact() {
  return (
    <main className="p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-semibold text-center mb-10 pt-3 relative after:content-[''] after:block after:w-16 after:h-[3px] after:bg-red-600 after:mx-auto after:mt-3">
        Contact Us
      </h2>

      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-10 hover:shadow-xl transition-all duration-300">
        {/* Left Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Get in Touch</h3>
          <p className="text-gray-600 leading-relaxed mb-5">
            Have any questions, feedback, or just want to say hello? We’d love to hear from you!  
            Fill out the form or reach us directly using the details below.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>
              📍 <span className="font-semibold">Address:</span> 123 Market Street, New Delhi, India
            </p>
            <p>
              📞 <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p>
              📧 <span className="font-semibold">Email:</span> support@ourstore.com
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-14 text-center text-gray-600">
        <p>We’ll get back to you within 24 hours 🕓</p>
      </div>
    </main>
  );
}
