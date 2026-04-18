import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeader } from './SectionWrapper';
import { SendIcon, Loader2Icon, MapPinIcon, MailIcon, PhoneCallIcon } from 'lucide-react';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    setIsSubmitting(true);
    setSubmitError(null);
    setIsSubmitted(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/kaveeshasewmini161@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `Portfolio Contact: ${subject}`,
          _replyto: email,
          _template: 'table'
        })
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error('Unable to send message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitError('Could not send your message right now. Please email me directly at kaveeshasewmini161@gmail.com.');
    }
  };
  return (
    <SectionWrapper id="contact" className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader
        title="Get in Touch"
        subtitle="Have a project in mind or just want to say hi? I'd love to hear from you." />
      

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="lg:col-span-2 space-y-8">
          
          <div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I'm currently open for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-white dark:bg-slate-800 text-accent-600 dark:text-accent-400 shadow-sm">
                <MailIcon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Email
                </h4>
                <a
                  href="mailto:kaveeshasewmini161@gmail.com"
                  className="text-lg font-medium text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  
                  kaveeshasewmini161@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-white dark:bg-slate-800 text-accent-600 dark:text-accent-400 shadow-sm">
                <PhoneCallIcon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Mobile
                </h4>
                <p
                  className="text-lg font-medium text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  
                  +94 78 153 1463
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-white dark:bg-slate-800 text-accent-600 dark:text-accent-400 shadow-sm">
                <MapPinIcon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Location
                </h4>
                <p className="text-lg font-medium text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  Gampaha, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
          className="lg:col-span-3">
          
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 dark:focus:ring-accent-500/50 focus:border-accent-500 transition-all text-slate-900 dark:text-white"
                  placeholder="John Doe" />
                
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 dark:focus:ring-accent-500/50 focus:border-accent-500 transition-all text-slate-900 dark:text-white"
                  placeholder="john@example.com" />
                
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-slate-700 dark:text-slate-300">
                
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 dark:focus:ring-accent-500/50 focus:border-accent-500 transition-all text-slate-900 dark:text-white"
                placeholder="How can I help you?" />
              
            </div>

            <div className="space-y-2 mb-8">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-700 dark:text-slate-300">
                
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 dark:focus:ring-accent-500/50 focus:border-accent-500 transition-all text-slate-900 dark:text-white resize-none"
                placeholder="Your message here..." />
              
            </div>

            {submitError &&
            <p className="mb-6 text-sm font-medium text-red-600 dark:text-red-400" role="alert">
                {submitError}
              </p>
            }

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${isSubmitted ? 'bg-accent-600 dark:bg-accent-500 text-white shadow-lg shadow-accent-500/25' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'}`}>
              
              {isSubmitting ?
              <>
                  <Loader2Icon size={20} className="animate-spin" />
                  Sending...
                </> :
              isSubmitted ?
              'Message Sent!' :

              <>
                  <SendIcon size={20} />
                  Send Message
                </>
              }
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>);

}
