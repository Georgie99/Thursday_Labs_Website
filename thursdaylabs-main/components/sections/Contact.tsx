'use client';

import { useState, useTransition } from 'react';
import { Send, Sparkles, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjzkbpl';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous status
    setStatus({ type: null, message: '' });

    const form = e.currentTarget;

    startTransition(async () => {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: new FormData(form),
        });

        if (response.ok) {
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          setFormData({ name: '', email: '', message: '' });
          return;
        }

        const payload = await response.json().catch(() => null);
        const fallbackMessage = 'Failed to send message.';
        const errorMessage =
          payload?.errors?.[0]?.message ||
          payload?.error ||
          payload?.message ||
          fallbackMessage;

        setStatus({ type: 'error', message: errorMessage });
      } catch (error) {
        setStatus({ type: 'error', message: 'Failed to send message.' });
      }
    });
  };

  return (
    <section
      id="contact"
      className="relative py-12 z-10 -mt-40 px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/images/section_4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* Floating Badge */}
      <div className="absolute top-0 right-8 sm:right-16 lg:right-24 hidden sm:block">
        <img
          src="/assets/images/stamp.png"
          alt="Let's talk stamp"
          className="w-24 h-24 sm:w-40 sm:h-40 rotate-12 drop-shadow-xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-1 mb-12">
          <img
            src="/assets/images/logo.png"
            alt="Thursday Labs"
            className="h-40 w-auto drop-shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold bg-linear-to-r from-brand-pink to-brand-peach text-transparent bg-clip-text leading-tight">
                For partnerships, press,
                <br />
                or collaborations,
                <br />
                get in touch.
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-white/70 text-xl mb-1">Reach us directly to:</p>
                <a
                  href="mailto:gwright@thursdaylabs.xyz"
                  className="text-brand-peach text-3xl font-medium hover:underline with-stars"
                >
                  gwright@thursdaylabs.xyz
                </a>
              </div>
              <div>
                <p className="text-white/70 text-xl mb-1">General inquiries reach out to:</p>
                <a
                  href="mailto:info@thursdaylabs.xyz"
                  className="text-brand-peach text-3xl font-medium hover:underline with-stars"
                >
                  info@thursdaylabs.xyz
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.tiktok.com/@thursdaylabs.xyz"
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/thursdaylabs.xyz/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-5xl font-bold text-white mb-2">Let's Talk</h3>
            <p className="text-white/70 text-xl mb-6">
              Reach out to discuss game development, partnerships, or funding opportunities with Thursday Labs.
            </p>

            <form
              onSubmit={handleSubmit}
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-4"
            >
              <div className="input-brand-border">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-brand"
                  required
                  disabled={isPending}
                />
              </div>
              <div className="input-brand-border">
                <input
                  type="email"
                  name="email"
                  placeholder="Best Email To Reach You"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-brand"
                  required
                  disabled={isPending}
                />
              </div>
              <div className="input-brand-border">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="input-brand resize-none"
                  required
                  disabled={isPending}
                />
              </div>

              {/* Status Messages */}
              {status.type === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-100">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="m3-body-medium">{status.message}</span>
                </div>
              )}
              {status.type === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-100">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="m3-body-medium">{status.message}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                size="lg"
                className="sm:w-auto with-stars relative"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
