import { useState } from 'react';
import { Button } from '../components/ui/button';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("Une erreur s'est produite.");
      }
    } catch (err) {
      setStatus('Erreur réseau.');
    }
  };

  return (
    <section id="contact" className="px-4 py-20">
      <div className="container max-w-3xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Fiche de contact</h2>
        <form onSubmit={handleSubmit} className="grid gap-6 p-8 bg-white shadow-md rounded-2xl">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="vous@exemple.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
            Envoyer le message
          </Button>
          {status && (
            <p className="text-sm text-center text-gray-700">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
