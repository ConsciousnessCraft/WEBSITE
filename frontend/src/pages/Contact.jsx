import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contactez-Nous</h1>
          <p className="text-lg text-gray-600">
            Nous sommes à votre écoute. Remplissez le formulaire ci-dessous ou contactez-nous directement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <button
                type="submit"
                className="w-full p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                {submitted ? 'Message Envoyé!' : 'Envoyer le Message'}
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informations de Contact</h2>
            <div className="flex items-center text-gray-600">
              <Phone className="h-6 w-6 text-indigo-600 mr-4" />
              <p>+33 1 23 45 67 89</p>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-6 w-6 text-indigo-600 mr-4" />
              <p>contact@exemple.com</p>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-6 w-6 text-indigo-600 mr-4" />
              <p>10 Rue de l'Innovation, Paris, France</p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Où Nous Trouver</h2>
          <div className="h-64 rounded-lg overflow-hidden">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.4303876640716!2d2.2922924156746844!3d48.85884407928792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d8c45bb1f5%3A0x9d998b56fe06a1ff!2sTour%20Eiffel!5e0!3m2!1sen!2sfr!4v1637104947081!5m2!1sen!2sfr"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
