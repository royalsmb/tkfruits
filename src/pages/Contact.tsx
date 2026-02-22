import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">Reach out</span>
            <h1 className="text-5xl font-bold mt-3 mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-zinc-500 text-lg">
              Have questions about our produce or want to place a bulk order? Our team is here to help.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+220 712 1486"]
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["hello@tkfruits.com"]
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  lines: ["Main Distribution Center", "Serrekunda Market, The Gambia"]
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  lines: ["Mon - Sat: 8:00 AM - 6:00 PM", "Sun: 9:00 AM - 2:00 PM"]
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl hover:bg-primary-50/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-zinc-500 text-sm">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-100"
          >
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+220 ..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all">
                  <option>General Inquiry</option>
                  <option>Bulk Order Request</option>
                  <option>Delivery Status</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-primary-500 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
