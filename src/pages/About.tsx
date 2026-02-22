import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Users, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <div className="px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">About us</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6 tracking-tight">Our Story</h1>
            <p className="text-xl text-zinc-500 leading-relaxed">
              TK Fruits was born from a passion for Gambian agriculture and a desire to bring the incredible flavors of our land to every table in the country and beyond.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Image & Text Grid */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=1000&fit=crop"
                alt="Fresh produce market"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-3xl font-bold mb-1">10+ Years</p>
              <p className="text-sm text-primary-100/80">Of experience in Gambian agriculture and produce distribution.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold tracking-tight">From Farm to Table</h2>
            <p className="text-lg text-zinc-500 leading-relaxed">
              In The Gambia, agriculture is the backbone of our community. TK Fruits works directly with smallholder farmers across all regions — from the coastal West Coast to the fertile Upper River Region.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              We don't just sell fruits; we build relationships. By ensuring fair prices for our farmers and maintaining rigorous quality standards, we've created a sustainable ecosystem that benefits everyone.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="text-3xl font-bold text-primary-600 mb-1">50+</h4>
                <p className="text-sm text-zinc-500 font-medium">Local Farmers</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-3xl font-bold text-accent mb-1">100%</h4>
                <p className="text-sm text-zinc-500 font-medium">Natural Produce</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="text-3xl font-bold text-primary-600 mb-1">6</h4>
                <p className="text-sm text-zinc-500 font-medium">Regions Covered</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-3xl font-bold text-accent mb-1">1000+</h4>
                <p className="text-sm text-zinc-500 font-medium">Happy Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-primary-900 text-white py-24 px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-300 font-bold text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-relaxed">
              "To deliver the freshest, most nutritious fruits and vegetables from Gambian farms to your table, while empowering local farmers and preserving our agricultural heritage."
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-50 rounded-3xl p-10 md:p-16">
            <div className="text-center mb-16">
              <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">What drives us</span>
              <h2 className="text-4xl font-bold mt-3 mb-4">Our Core Values</h2>
              <p className="text-zinc-500">The principles that guide everything we do at TK Fruits.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: Leaf,
                  title: "Sustainability",
                  desc: "Promoting farming practices that protect our Gambian soil for future generations."
                },
                {
                  icon: Users,
                  title: "Community",
                  desc: "Investing in our local farmers and providing fair employment opportunities."
                },
                {
                  icon: Heart,
                  title: "Quality",
                  desc: "Never compromising on the freshness and taste of our produce."
                },
                {
                  icon: Globe,
                  title: "Integrity",
                  desc: "Transparent sourcing and honest pricing in every transaction."
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <value.icon className="text-primary-500" size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to partner with us?</h2>
          <p className="text-zinc-500 mb-8">Whether you're a farmer looking for a fair buyer or a business seeking quality produce, we'd love to hear from you.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/20"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
